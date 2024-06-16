import { Button } from 'flowbite-react';
import Link from 'next/link';

export default function Explanation() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-8">
      <h2 className="mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl">
        Creativiteit meten in foto&apos;s:
        <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">hoe werkt dat?</small>
      </h2>
      <div className="max-w-prose">
        <p className="my-4 text-lg font-normal text-gray-500 lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <Button
          as={Link}
          href="/vote"
          className="bg-TUcyan hover:bg-TUdarkblue focus:outline-none focus:ring-4 focus:ring-TUblue active:outline-none active:ring-4 active:ring-TUblue"
        >
          Ik begrijp het en wil nu gaan stemmen
          <svg
            className="size-[24px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </Button>
      </div>
    </main>
  );
}
