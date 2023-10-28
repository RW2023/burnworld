// components/Layout.tsx
import React from 'react';
import BackToTopButton from './BackToTopButton';
import Navbar from './Navbar';
import Footer from './Footer';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Navbar />
      <div className="p-2">
        <header>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Burn World News" />
          <meta
            name="keywords"
            content="news, headlines, world, international, local, politics, business"
          />
          <meta
            property="og:image"
            content="https://burnworld.vercel.app/explodingGlobe.png"
          />
          <meta name="author" content="Ryan Wilson" />
          <link
            rel="icon"
            href="/favicon_io/favicon-32x32.png"
            sizes="32x32"
            type="image/png"
          />
          <link
            rel="apple-touch-icon"
            href="/favicon_io/apple-touch-icon.png"
          />
          <link rel="manifest" href="/favicon_io/site.webmanifest" />
          <title>{title}</title>
          <h1 className="text-center text-4xl text-headline mr-0">{title}</h1>
        </header>
        <main>{children}</main>
        <BackToTopButton />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
