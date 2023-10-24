'use client';
import { FC } from 'react';
import Layout from '../../Components/Layout';
import NextImage from 'next/image';



interface Props {}

const Index: FC<Props> = (): JSX.Element => {
  return (
    <Layout title={'Countries'}>
      <div className="min-h-screen bg-background">
        {/* <h1 className="text-headline">Countries</h1>
        <div className="min-h-screen">
          <div className="country p-4 bg-main rounded-lg shadow-lg mb-6">
            <NextImage
              src="/images/burningGlobe.png"
              alt="other country"
              width={500}
              height={500}
              className="rounded-lg"
            />
            <div className="text-container mt-4">
              <h2 className="text-highlight">US</h2>
              <p className="text-paragraph">US Headlines</p>
            </div>
          </div>
          <div className="country p-4 bg-main rounded-lg shadow-lg mb-6">
            <NextImage
              src=""
              alt="Country 2"
              width={500}
              height={500}
              className="rounded-lg"
            />
            <div className="text-container mt-4">
              <h2 className="text-highlight">Country 2</h2>
              <p className="text-paragraph">Description of Country 2</p>
            </div>
          </div>
          <div className="country p-4 bg-main rounded-lg shadow-lg mb-6">
            <NextImage
              src=""
              alt="Country 3"
              width={500}
              height={500}
              className="rounded-lg"
            />
            <div className="text-container mt-4">
              <h2 className="text-highlight">Country 3</h2>
              <p className="text-paragraph">Description of Country 3</p>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default Index;
