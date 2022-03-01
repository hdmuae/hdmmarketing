import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Home = () => {
  return (
    <Html>
      <Head>
        <meta name="description" content="HDM Marketing Company profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Home;
