import Image from 'next/image';

export default function ImageLoader(props: { file: string }) {
  const filename: string = encodeURIComponent(props.file);

  return (
    <Image
      src={`/images/OOD/${filename}`}
      width={256}
      height={256}
      key={filename}
      className="size-full rounded border border-gray-700 shadow-lg md:size-96"
      alt="Picture"
    />
  );
}
