import { ImageSchema } from '~/server/models/image.schema'
import { VoteSchema } from '~/server/models/vote.schema'
import type { Image } from '~/types'

function chooseRandomImagePair(images: Array<Image>): {
  image1_url: string
  image2_url: string
} {
  const numImages = images.length
  if (numImages < 2) {
    throw new Error('Not enough images to choose from')
  }
  // Choose two random images, not the same
  const index1 = Math.floor(Math.random() * numImages)
  let index2 = index1
  while (index2 === index1) {
    index2 = Math.floor(Math.random() * numImages)
  }
  // Only return the image URLs, not the whole image object, to avoid leaking sensitive data to the client
  return {
    image1_url: images[index1].url_id,
    image2_url: images[index2].url_id,
  }
}

export default defineEventHandler(async () => {
  const images = await ImageSchema.find({}).lean()
  const votes = await VoteSchema.find({})

  const votesOnImage = new Map<string, number>()

  for (const image of images) {
    const numVotes = votes.filter((vote) => {
      return vote.image_id_1 === image.url_id || vote.image_id_2 === image.url_id
    })
    votesOnImage.set(image.url_id, votesOnImage.get(image.url_id) || 0 + numVotes.length)
  }

  const distinctNumVotes = Array.from(new Set(votesOnImage.values()))
  const lowestNumVotes = Math.min(...distinctNumVotes)
  const imagesWithLowestNumVotes = images.filter((image) => {
    return votesOnImage.get(image.url_id) === lowestNumVotes
  })

  if (imagesWithLowestNumVotes.length === 1) {
    // Return one image with the lowest number of votes and one random image
    console.log('Returning one image with lowest number of votes and one random image')
    const randomImage = chooseRandomImagePair(images)
    return {
      image1_url: imagesWithLowestNumVotes[0].url_id,
      image2_url: randomImage.image1_url === imagesWithLowestNumVotes[0].url_id ? randomImage.image2_url : randomImage.image1_url,
    }
  }

  if (imagesWithLowestNumVotes.length < 1) {
    // Return two random images from all images
    console.log('Returning two random images')
    return chooseRandomImagePair(images)
  }

  return chooseRandomImagePair(imagesWithLowestNumVotes)
})
