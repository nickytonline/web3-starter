import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to Web3</title>
        <meta name="description" content="Welcome to Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 sx={{ fontFamily: 'heading' }}>
          Welcome to <span sx={{ color: 'accent' }}>web3</span>
        </h1>
        <p>Let&apos;s go!</p>
      </main>
    </>
  );
};

export default Home;
