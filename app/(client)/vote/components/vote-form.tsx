import { Button } from 'flowbite-react';
import { useState } from 'react';

const variables: string[] = ['Novelty', 'Surprising', 'Value'];

export default function VoteForm() {
  const [selectedNovelty, setSelectedNovelty] = useState<string | null>(null);
  const [selectedSurprise, setSelectedSurprise] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const notClicked = 'bg-TUwhite text-TUcyan hover:bg-TUcyan hover:text-TUwhite';
  const clicked = 'bg-TUcyan text-TUwhite hover:bg-TUwhite hover:text-TUcyan';
  const button =
    'mb-2 me-2 rounded-lg border-2 border-TUcyan p-6 text-center text-base font-medium hover:outline-none hover:ring-4 hover:ring-TUcyan focus:outline-none focus:ring-4 focus:ring-TUcyan active:outline-none active:ring-4 active:ring-TUcyan';

  return (
    <div className="mt-20 flex flex-col space-y-2">
      <div className="flex w-96 items-center justify-between gap-10">
        <button
          type="button"
          className={`${button} ${selectedNovelty === 'image 1' ? clicked : notClicked}`}
          onClick={() => {
            setSelectedNovelty('image 1');
          }}
        >
          Left
        </button>
        <p className="grow">Novelty</p>
        <button
          type="button"
          className={`${button} ${selectedNovelty === 'image 2' ? clicked : notClicked}`}
          onClick={() => {
            setSelectedNovelty('image 2');
          }}
        >
          Right
        </button>
      </div>

      <div className="flex w-96 items-center justify-between gap-10">
        <button
          type="button"
          className={`${button} ${selectedSurprise === 'image 1' ? clicked : notClicked}`}
          onClick={() => {
            setSelectedSurprise('image 1');
          }}
        >
          Left
        </button>
        <p className="grow">Surprising</p>
        <button
          type="button"
          className={`${button} ${selectedSurprise === 'image 2' ? clicked : notClicked}`}
          onClick={() => {
            setSelectedSurprise('image 2');
          }}
        >
          Right
        </button>
      </div>

      <div className="flex w-96 items-center justify-between gap-10">
        <button
          type="button"
          className={`${button} ${selectedValue === 'image 1' ? clicked : notClicked}`}
          onClick={() => {
            setSelectedValue('image 1');
          }}
        >
          Left
        </button>
        <p className="grow">Value</p>
        <button
          type="button"
          className={`${button} ${selectedValue === 'image 2' ? clicked : notClicked}`}
          onClick={() => {
            setSelectedValue('image 2');
          }}
        >
          Right
        </button>
      </div>

      <div className="flex flex-col space-y-2">
        <Button onClick={() => {}} className="rounded bg-green-500 p-1">
          Submit
        </Button>
      </div>
    </div>
  );
}
