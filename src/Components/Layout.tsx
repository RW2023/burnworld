// components/Layout.tsx
import React from 'react';
import BackToTopButton from './BackToTopButton';
import Navbar from './Navbar';
import Footer from './Footer';
import Image from 'next/image';

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
          <meta property="og:image" content="https://burnworld.vercel.app/logo.png" />
          <meta name="author" content="Ryan Wilson" />
          <h1 className="text-center text-4xl text-headline mr-0">{title}</h1>
          <title>Burn World News</title>
          <div className="flex justify-center">
            <div
              className="fixed top-0 left-0 w-full h-1/2 bg-cover bg-no-repeat bg-center z-[-1] "
              style={{ backgroundImage: "url('/burningGlobe.png')" }}
            ></div>
            {/* <Image
              src="/logo.png"
              alt="Logo"
              className="logo"
              width="200"
              height="50"
            /> */}
          </div>
        </header>

        <main>{children}</main>
        <BackToTopButton />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
