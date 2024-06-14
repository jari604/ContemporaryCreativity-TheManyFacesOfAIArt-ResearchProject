import '@styles/global.css';

import Footer from '@components/ui/footer';
import GlobalNav from '@components/ui/global-nav';
import { ThemeModeScript } from 'flowbite-react';
import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import React from 'react';

import { Providers } from './provider';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Contemporary Creativity: The Many Faces of AI Art',
  description: 'Voting website for a research project on AI art',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <ThemeModeScript />
      </head>
      <body className={robotoSlab.className}>
        <Providers>
          <GlobalNav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
