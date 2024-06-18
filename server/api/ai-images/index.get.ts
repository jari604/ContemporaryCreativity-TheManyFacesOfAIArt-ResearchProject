export default defineEventHandler(async () => {
  return AiImageSchema.find({}).lean()
})
