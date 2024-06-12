'use client';

// import { getExampleData } from 'app/server/example/action';
import { Suspense, useState } from 'react';

import RandomImageLoader from './components/RandomImageLoader';

const variables: string[] = ['Surprise', 'Test', 'Value'];

function VoteForm() {
  const [selectedSurprise, setSelectedSurprise] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedNovelty, setSelectedNovelty] = useState<string | null>(null);

  return (
    <div className="mt-20 flex flex-col space-y-2">
      {variables.map((variable) => (
        <div className="flex w-96 items-center justify-between gap-10" key={variable}>
          <button
            onClick={() => {
              setSelectedSurprise('image 1');
            }}
            className={`rounded px-3 py-6 ${selectedSurprise === 'image 1' ? 'bg-red-500' : 'bg-blue-500'}`}
          >
            Image 1
          </button>
          <p className="grow-1">{variable}</p>
          <button className="rounded bg-blue-500 px-3 py-6">Image 2</button>
        </div>
      ))}
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => {
            console.log('Submit clicked');
            location.reload();
          }}
          className="rounded bg-green-500 p-1"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

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
        <Suspense fallback={<div>Loading...</div>}>
          <RandomImageLoader />
        </Suspense>
        <VoteForm />
      </div>
    </main>
  );
}
