import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '../components/Header';
import './globals.css';
import Provider from './providers/Provider';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={`${inter.className} dark:bg-slate-800`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
