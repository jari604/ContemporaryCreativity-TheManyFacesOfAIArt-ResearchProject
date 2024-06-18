export default defineEventHandler(async (event) => {
    return ImageSchema.find({}).lean();
})