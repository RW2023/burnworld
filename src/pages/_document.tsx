// src/pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';



class MyDocument extends Document {
  render() {
    return (
      <Html data-theme="black" lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossOrigin="anonymous"
          />
          <link
            rel="icon"
            href="/favicon_io/favicon-32x32.png"
            sizes="32x32"
            type="image/png"
          />
          <link
            rel="apple-touch-icon"
            href="/favicon_io/apple-touch-icon.png"
          />
          <link rel="manifest" href="/favicon_io/site.webmanifest" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
