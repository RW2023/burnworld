// import CountriesNav from '@/Components/CountriesNav';

import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="black">
      <body>
        {/* <CountriesNav /> */}
        {children}
      </body>
    </html>
  );
}
