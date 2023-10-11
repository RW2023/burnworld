// components/Layout.tsx
import React from 'react';
import  styles from './Layout.module.css';

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
    </div>
  );
};

export default Layout;
