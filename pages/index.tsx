import type { NextPage } from 'next';
import Head from 'next/head';
import { keyframes } from '@emotion/react';

const fadeInfadeOut = keyframes`
  from {
  	opacity: 0;
  }
  to {
 	opacity: 1;
  }
`;

const web3Styles = {
  color: 'accent',
  opacity: 1,
  '@media screen and (prefers-reduced-motion: no-preference)': {
    animation: `${fadeInfadeOut} 2.5s ease-in-out infinite`,
  },
};

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
          Welcome to <span sx={web3Styles}>web3</span>
        </h1>
        <p>Let&apos;s go!</p>
      </main>
    </>
  );
};

export default Home;
