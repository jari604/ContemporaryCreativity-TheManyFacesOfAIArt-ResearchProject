import { Button } from 'flowbite-react';
import { useState } from 'react';

const variables: string[] = ['Novelty', 'Surprising', 'Value'];

export default function VoteForm() {
  const [selectedSurprise, setSelectedSurprise] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedNovelty, setSelectedNovelty] = useState<string | null>(null);

  return (
    <div className="mt-20 flex flex-col space-y-2">
      {variables.map((variable) => (
        <div className="flex w-96 items-center justify-between gap-10" key={variable}>
          <Button
            outline={selectedSurprise != 'image 1'}
            size="xl"
            gradientDuoTone="cyanToBlue"
            onClick={() => {
              setSelectedSurprise('image 1');
            }}
          >
            Image 1
          </Button>
          <p className="grow-1">{variable}</p>
          <Button
            outline={selectedSurprise != 'image 2'}
            size="xl"
            gradientDuoTone="cyanToBlue"
            onClick={() => {
              setSelectedSurprise('image 2');
            }}
          >
            Image 2
          </Button>
        </div>
      ))}

      <div className="flex flex-col space-y-2">
        <Button
          onClick={() => {
            console.log('Submit clicked');
            location.reload();
          }}
          className="rounded bg-green-500 p-1"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
