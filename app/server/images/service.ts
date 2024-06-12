import dbConnect from '../db-connect';
import Image from './model';

export const getImages = async () => {
  await dbConnect();
  return Image.find({});
};
