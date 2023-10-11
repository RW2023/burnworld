// components/Layout.tsx
import React from 'react';
import BackToTopButton from './BackToTopButton';


type Props = {
  title: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <header>
        <h1 className='text-center text-4xl text-headline'>{title}</h1>
      </header>
      <main>{children}</main>
      <BackToTopButton />
    </div>
  );
};

export default Layout;
