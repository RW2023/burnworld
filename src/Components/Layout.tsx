// components/Layout.tsx
import React from 'react';
import BackToTopButton from './BackToTopButton';
import Footer from './Footer';


type Props = {
  title: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="p-2">
      <header>
        <h1 className='text-center text-4xl text-headline mr-0'>{title}</h1>
      </header>
      <main>{children}</main>
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
