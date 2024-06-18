export default defineEventHandler(async () => {
  return ImageSchema.find({}).lean()
})
