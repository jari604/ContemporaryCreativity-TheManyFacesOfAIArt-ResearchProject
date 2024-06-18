export default defineEventHandler(async (event) => {
    return AiImageSchema.find({}).lean();
})