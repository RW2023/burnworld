'use client';
import { FC } from 'react';
import Layout from '../../Components/Layout';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

const Index: FC<Props> = (): JSX.Element => {
  return (
    <Layout title={'Countries'}>
      <div className="min-h-screen bg-background">
        <div className="min-h-screen bg-background">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <div className="bg-background rounded-lg shadow-lg p-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">
                      Canadian New Headlines
                    </h2>
                  </div>
                  <div className="mt-4">
                    <Link href="/canada">
                      <Image
                        width={300}
                        height={300}
                        src="/canadaFlagIcon.png"
                        alt="flag"
                        className="w-full h-auto"
                      />
                    </Link>
                  </div>
                  <div className="mt-4">
                    <p className="text-headline text-lg text-center font-bold">
                      Latest stories from Canadian press
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="bg-background rounded-lg shadow-lg p-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">
                      US News Headlines
                    </h2>
                  </div>
                  <div className="mt-4">
                    <Link href="/us">
                      <Image
                        height={300}
                        width={300}
                        src="/americanFlagIcon.png"
                        alt="flag"
                        className="w-full h-auto"
                      />
                    </Link>
                  </div>
                  <div className="mt-4">
                    <p className="text-headline text-lg text-center text-font-bold">
                      Latest headlines from the American Press
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
