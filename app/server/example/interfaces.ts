export interface Vote {
  timestamp: string;
  user_id: string;
  image_id: string;
  image_id2: string;
  winner_novelty: string;
  winner_surprise: string;
  winner_value: string;
}

export interface User {
  user_id: string;
  votes: Vote[];
}
