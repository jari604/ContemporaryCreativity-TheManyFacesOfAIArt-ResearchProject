import { Card } from 'flowbite-react';

export default function Contact() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-8">
      <Card className="max-w-sm" imgAlt="Profile picture Jari de Keijzer" imgSrc="/images/blog/image-1.jpg">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </Card>
    </main>
  );
}
