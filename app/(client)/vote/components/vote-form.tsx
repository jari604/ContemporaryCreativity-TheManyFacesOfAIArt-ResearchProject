import { useState } from 'react';

const variables: string[] = ['Novelty', 'Surprising', 'Value'];

export default function VoteForm() {
  const [selectedSurprise, set] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedNovelty, setSelectedNovelty] = useState<string | null>(null);

  return (
    <div className="mt-20 flex flex-col space-y-2">
      {variables.map((variable) => (
        <div className="flex w-96 items-center justify-between gap-10" key={variable}>
          <button
            onClick={() => {
              setSelectedSurprise('image 1');
              // set{variable}
              set(selectedSurprise, 'image 1');
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
