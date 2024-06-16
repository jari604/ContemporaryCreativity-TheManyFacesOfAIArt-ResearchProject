import { NextResponse } from 'next/server';

const numberOfImages: number = Number(process.env.NUMBER_OF_IMAGES);

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
  const index1 = Math.floor(Math.random() * numberOfImages);
  let index2 = index1;
  while (index2 === index1) {
    index2 = Math.floor(Math.random() * numberOfImages);
  }

  return NextResponse.json({
    image_1: possibleImages[index1],
    image_2: possibleImages[index2],
  });
}
