import '@styles/global.css';

import Footer from '@components/ui/footer';
import GlobalNav from '@components/ui/global-nav';
import { Raleway } from 'next/font/google';
import React from 'react';

import { Providers } from './provider';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'Contemporary Creativity: The Many Faces of AI Art',
  description: 'Voting website for a research project on AI art',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={raleway.className}>
        <Providers>
          <GlobalNav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
