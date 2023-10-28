import './globals.css';
import Head from 'next/head';
import type { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>Burn World News</title>
        <meta
          name="description"
          content="News Headlines from around the world"
        />
        <meta
          name="keywords"
          content="news, headlines, world, international, local, politics, business"
        />
        <meta name="author" content="Ryan Wilson" />
        <link
          rel="icon"
          href="/favicon_io/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
