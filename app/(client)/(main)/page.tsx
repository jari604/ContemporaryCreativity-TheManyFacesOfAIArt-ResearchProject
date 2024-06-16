import CardEN from 'app/(client)/(main)/components/card-en';
import CardNL from 'app/(client)/(main)/components/card-nl';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-8">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">
        Contemporary Creativity:
        <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">The Many Faces of AI Art</small>
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
        Een onderzoek naar de creatieve potentie van AI gegenereerde afbeeldingen.
      </p>
      <CardEN />
      <CardNL />
    </main>
  );
}
