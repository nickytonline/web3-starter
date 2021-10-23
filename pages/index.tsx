import type { NextPage } from 'next';
import Head from 'next/head';
import { ExampleHeader } from '@components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to Web3</title>
        <meta name="description" content="Welcome to Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header sx={{ margin: '1rem 0' }}>
        <ExampleHeader />
      </header>
      <main>
        <p>Let&apos;s go!</p>
      </main>
    </>
  );
};

export default Home;
