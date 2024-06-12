'use server';

import { getImages } from 'app/server/images/service';

export async function getImagesData() {
  return getImages();
}
