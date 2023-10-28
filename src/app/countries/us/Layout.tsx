import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <title>US News</title>
      {/* Add your header component here */}
      <main>
        <h1 className="text-3xl text-center text-font-bold">US News</h1>{' '}
        {children}
      </main>
      {/* Add your footer component here */}
    </div>
  );
};

export default Layout;
