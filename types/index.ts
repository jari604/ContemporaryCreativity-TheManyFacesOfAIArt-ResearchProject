export interface AiImage {
  _id: string
}

export interface Image {
  url_id: string
  class: string
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
  timestamp: string
}
