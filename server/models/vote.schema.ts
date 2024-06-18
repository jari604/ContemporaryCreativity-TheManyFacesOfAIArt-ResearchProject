import { defineMongooseModel } from '#nuxt/mongoose'
import type { Vote } from '~/types'

export const VoteSchema = defineMongooseModel<Vote>({
  name: 'Vote',
  schema: {
    image_id_1: {
      type: String,
      required: true,
      ref: 'Image',
    },
    image_id_2: {
      type: String,
      required: true,
      ref: 'Image',
    },
    winner_novelty: {
      type: String,
      required: true,
      ref: 'Image',
    },
    winner_surprise: {
      type: String,
      required: true,
      ref: 'Image',
    },
    winner_value: {
      type: String,
      required: true,
      ref: 'Image',
    },
    user_id: {
      type: String,
      required: true,
    },
  },
})
