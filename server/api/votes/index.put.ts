import type { Image, Vote } from '~/types'

const kFactor = parseInt(process.env.ELO_K_FACTOR || '32', 10) // Get from env, default to 32

export default defineEventHandler(async (event) => {
  const voteData: Vote = await readBody(event)
  const vote = new VoteSchema(voteData)

  // Validate winner fields
  const validImageIds = [voteData.image_id_1, voteData.image_id_2]
  if (
    !validImageIds.includes(voteData.winner_novelty)
    || !validImageIds.includes(voteData.winner_surprise)
    || !validImageIds.includes(voteData.winner_value)
  ) {
    throw createError({
      statusCode: 400, // Bad Request
      statusMessage: 'Invalid winner data: One or more winners are not among the voted images.',
    })
  }

  await vote.save()

  const [image1, image2] = await Promise.all([
    ImageSchema.findOne({ url_id: voteData.image_id_1 }).lean(),
    ImageSchema.findOne({ url_id: voteData.image_id_2 }).lean(),
  ])

  if (!image1 || !image2) {
    throw createError({
      statusCode: 404,
      statusMessage: 'One or both images not found in database' })
  }

  // refresh the ELO scores to reflect new votes
  const updatedImages = await calculateUpdatedEloScores(vote, image1, image2)

  // Store the updated ELO scores in MongoDB
  await saveUpdatedEloScores(updatedImages)
})

async function calculateUpdatedEloScores(voteBody: Vote, image1: Image, image2: Image): Promise<{ image1: Image, image2: Image }> {
  // Helper function to calculate the expected score of a player
  const expectedScore = (rating1: number, rating2: number): number => {
    return 1 / (1 + Math.pow(10, (rating2 - rating1) / 400))
  }

  const calculateNewEloRating = (rating: number, expected: number, score: number): number => {
    return rating + kFactor * (score - expected)
  }

  // Calculate expected scores
  const expected1_combined = expectedScore(image1.score_combined, image2.score_combined)
  const expected2_combined = expectedScore(image2.score_combined, image1.score_combined)
  const expected1_novelty = expectedScore(image1.score_novelty, image2.score_novelty)
  const expected2_novelty = expectedScore(image2.score_novelty, image1.score_novelty)
  const expected1_surprise = expectedScore(image1.score_surprise, image2.score_surprise)
  const expected2_surprise = expectedScore(image2.score_surprise, image1.score_surprise)
  const expected1_value = expectedScore(image1.score_value, image2.score_value)
  const expected2_value = expectedScore(image2.score_value, image1.score_value)

  // Calculate new ELO ratings, novelty, surprise, and value, combined is x wins out of 3
  let winsImage1 = 0
  if (voteBody.winner_novelty === image1.url_id) {
    winsImage1++
    image1.score_novelty = calculateNewEloRating(image1.score_novelty, expected1_novelty, 1)
  }
  else {
    image2.score_novelty = calculateNewEloRating(image2.score_novelty, expected2_novelty, 1)
  }
  if (voteBody.winner_surprise === image1.url_id) {
    winsImage1++
    image1.score_surprise = calculateNewEloRating(image1.score_surprise, expected1_surprise, 1)
  }
  else {
    image2.score_surprise = calculateNewEloRating(image2.score_surprise, expected2_surprise, 1)
  }
  if (voteBody.winner_value === image1.url_id) {
    winsImage1++
    image1.score_value = calculateNewEloRating(image1.score_value, expected1_value, 1)
  }
  else {
    image2.score_value = calculateNewEloRating(image2.score_value, expected2_value, 1)
  }

  const winsImage2 = 3 - winsImage1

  image1.score_combined = calculateNewEloRating(image1.score_combined, expected1_combined, winsImage1 / 3)
  image2.score_combined = calculateNewEloRating(image2.score_combined, expected2_combined, winsImage2 / 3)

  return { image1, image2 }
}

async function saveUpdatedEloScores(updatedImages: { image1: Image, image2: Image }) {
  await ImageSchema.updateOne({ url_id: updatedImages.image1.url_id }, updatedImages.image1)
  await ImageSchema.updateOne({ url_id: updatedImages.image2.url_id }, updatedImages.image2)
}
