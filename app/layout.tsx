import React from 'react';
import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';

import Header from '../components/Header';
import './globals.css';
import Provider from './providers/Provider';

const poppins = Poppins({
  weight: ['400', '500', '700', '800'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'James Drysdale - Software Developer',
  description:
    'Portfolio for Software developer, UX enthusiast, mentor and artist, James Drysdale',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} dark:bg-slate-800`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
