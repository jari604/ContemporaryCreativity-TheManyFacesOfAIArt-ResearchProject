import { NextResponse } from 'next/server';

import { getImagesData } from './action';

const possibleImages: string[] = [
  'ox_00486.png',
  'ox_00487.png',
  'ox_00488.png',
  'ox_01359.png',
  'ox_01360.png',
  'ox_01361.png',
  'ox_01695.png',
  'ox_01696.png',
  'ox_01697.png',
  'ox_02412.png',
  'ox_02413.png',
  'ox_02414.png',
  'ox_02502.png',
  'ox_02503.png',
  'ox_02504.png',
  'ox_02916.png',
  'ox_02917.png',
  'ox_02918.png',
  'ox_03078.png',
  'ox_03079.png',
];

export async function GET() {
  // Choose 2 random images
  // const index1 = Math.floor(Math.random() * possibleImages.length);
  // let index2 = index1;
  // while (index2 == index1) {
  //   index2 = Math.floor(Math.random() * possibleImages.length);
  // }

  const imagesData = await getImagesData();

  console.log(imagesData);

  return NextResponse.json({
    image_1: possibleImages[2],
    image_2: possibleImages[5],
  });
}
