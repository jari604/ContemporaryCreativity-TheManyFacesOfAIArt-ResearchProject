'use client';

import { Suspense } from 'react';

import Loading from './components/loading';
import RandomImageLoader from './components/random-image-loader';
import VoteForm from './components/vote-form';

export default function MainPage() {
  const user = 'test';

  if (!user) {
    return (
      <div>
        <h1>User Consent</h1>
        <button
          onClick={() => {
            // Get user from MongoDB
            // const id = await getUser();
            // localStorage.setItem('user', id);

            location.reload();
          }}
        >
          Go!
        </button>
      </div>
    );
  }

  // imagesUrls =  fetchImages();

  // Choose the first two images
  // const image1 = imagesUrls[0];
  // const image2 = imagesUrls[1];

  // const image1 = images[0] as string;
  // const image2 = images[1] as string;

  return (
    <main className="flex min-h-screen w-full flex-col items-center p-8">
      <div className="flex flex-col items-center justify-between">
        <Suspense fallback={<Loading />}>
          <RandomImageLoader />
        </Suspense>
        <VoteForm />
      </div>
    </main>
  );
}
