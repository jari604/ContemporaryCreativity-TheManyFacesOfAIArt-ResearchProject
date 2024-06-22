import type { Image } from '~/types'
import { defineMongooseModel } from '#nuxt/mongoose'

export const ImageSchema = defineMongooseModel<Image>({
  name: 'Image',
  schema: {
    url_id: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    score_combined: {
      type: Number,
      required: true,
      default: 1500,
      set: (v: number) => Math.round(v), // Round before saving
    },
    score_novelty: {
      type: Number,
      required: true,
      default: 1500,
      set: (v: number) => Math.round(v), // Round before saving
    },
    score_surprise: {
      type: Number,
      required: true,
      default: 1500,
      set: (v: number) => Math.round(v), // Round before saving
    },
    score_value: {
      type: Number,
      required: true,
      default: 1500,
      set: (v: number) => Math.round(v), // Round before saving
    },
  },
  options: {
    timestamps: true,
  },
})
