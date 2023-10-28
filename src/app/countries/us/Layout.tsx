
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
     
      <title>US News</title> 
    
      <main>  
        <h1 className="text-3xl text-center text-font-bold">US News</h1>{' '}
        {children}
      </main>
    </div>
  );
};

export default Layout;
