import Image from 'next/image';
import React from 'react';

export default function ImageLoader(props: { file: string }) {
  const filename: string = encodeURIComponent(props.file);
  return (
    <Image
      src={`https://storage.googleapis.com/research-project-creative-ai/${filename}`}
      width={500}
      height={500}
      key={filename}
      className="rounded border border-gray-700 shadow-lg"
      alt="Picture"
    />
  );
}
