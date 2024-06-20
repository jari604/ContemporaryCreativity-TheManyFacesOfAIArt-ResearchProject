export enum ImageType { OOD = 'OOD', ID = 'ID', IMAGENET = 'IMAGENET' }

export enum ImageClass { OX = 'OX' }

export interface Image {
  url_id: string
  type: ImageType
  class: ImageClass
  score_combined: number
  score_novelty: number
  score_surprise: number
  score_value: number
}

export interface Vote {
  image_id_1: string
  image_id_2: string
  winner_novelty: string
  winner_surprise: string
  winner_value: string
  user_id: string
}
