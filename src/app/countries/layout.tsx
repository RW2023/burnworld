
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="black">
      <title>News By Country</title>
      <body>
        {children}
      </body>
    </html>
  );
}
