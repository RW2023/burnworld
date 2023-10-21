// src/pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';


class MyDocument extends Document {
  render() {
    return (
      <Html data-theme="black" lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Navbar />
        <body>
          <Main />
          <NextScript />
        </body>
        <Footer />
      </Html>
    );
  }
}

export default MyDocument;
