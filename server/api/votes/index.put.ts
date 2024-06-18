export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const {
    image_id_1,
    image_id_2,
    winner_novelty,
    winner_surprise,
    winner_value,
    user_id,
  } = body
  const vote = new VoteSchema({
    image_id_1,
    image_id_2,
    winner_novelty,
    winner_surprise,
    winner_value,
    user_id,
  })
  await vote.save()
})
