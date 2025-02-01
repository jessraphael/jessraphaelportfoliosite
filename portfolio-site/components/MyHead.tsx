import { FC } from 'react';
import Head from 'next/head';

type Props = {};

const MyHead: FC<Props> = () => {
  return (
    <Head>
      <title>Jess Raphael Ong</title>
      <meta name="description" content="Welcome to my world" />
      <link rel="icon" href="/bowling.ico" />
    </Head>
  );
};
export default MyHead;
