import { defineMongooseModel } from '#nuxt/mongoose'
import type { AiImage } from '~/types'

export const AiImageSchema = defineMongooseModel<AiImage>({
  name: 'AiImage',
  schema: {
    _id: {
      type: String,
      required: true,
    },
  },
})
