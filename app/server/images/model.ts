import type { Model } from 'mongoose';
import mongoose, { model } from 'mongoose';

import type { IImage } from './interfaces';

const ImageSchema = new mongoose.Schema({
  url_id: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  score_novelty: {
    type: Number,
    required: true,
  },
  score_surprise: {
    type: Number,
    required: true,
  },
  score_value: {
    type: Number,
    required: true,
  },
});

export default (mongoose.models.Image || model<IImage>('Image', ImageSchema)) as Model<IImage>;
