// import CountriesNav from '@/Components/CountriesNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="black">
      <head>
        <link
          rel="icon"
          href="/favicon_io/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />

        <title>News By Country</title>
      </head>
      <body>
        {/* <CountriesNav /> */}
        {children}
      </body>
    </html>
  );
}
