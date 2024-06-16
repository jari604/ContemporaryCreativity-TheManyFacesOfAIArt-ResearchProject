import { useSuspenseQuery } from '@tanstack/react-query';

import ImageLoader from './image-loader';

function getBaseURL() {
  if (typeof window !== 'undefined') {
    return '';
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}
const baseUrl = getBaseURL();

function randomImageQuery() {
  return useSuspenseQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const url = `${baseUrl}/server/images`;

      const res: string = await (
        await fetch(url, {
          cache: 'no-store',
        })
      ).json();
      return res;
    },
  });
}
export default function RandomImageLoader() {
  const { data } = randomImageQuery();

  return (
    <div className="size-full space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0">
      <ImageLoader file={data.image_1} />
      <ImageLoader file={data.image_2} />
    </div>
  );
}
