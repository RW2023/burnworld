'use client';
import { FC } from 'react';
import Layout from '../../Components/Layout';



interface Props {}

const Index: FC<Props> = (): JSX.Element => {
  return (
    <Layout title={'Countries'}>
      <div>
       <h1>Countries</h1>
      </div>
    </Layout>
  );
};

export default Index;
