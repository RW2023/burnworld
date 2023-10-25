// import CountriesNav from '@/Components/CountriesNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="black">
      <head>
        <title>News By Country</title>
      </head>
      <body>
        {/* <CountriesNav /> */}
        {children}
      </body>
    </html>
  );
}
