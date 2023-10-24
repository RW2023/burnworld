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
    <div className="p-2">
      <header>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Burn World News" />
        <meta
          name="keywords"
          content="news, headlines, world, international, local, politics, business"
        />
        <meta name="author" content="Ryan Wilson" />
        <h1 className="text-center text-4xl text-headline mr-0">{title}</h1>
        <title>Burn World News</title>
      </header>
      <Navbar />
      <main>{children}</main>
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
