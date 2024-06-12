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
  const imagePairQuery = useSuspenseQuery({
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

  return imagePairQuery;
}
export default function RandomImageLoader() {
  const { data } = randomImageQuery();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <ImageLoader file={data.image_1} />
      <ImageLoader file={data.image_2} />
    </div>
  );
}
