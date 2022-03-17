import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Home = () => {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Full-Service Digital Marketing Agency in Dubai & Zurich. HDM specializes in Web Development, Design & UX and Digital Marketing Services. Contact us for a Digital Marketing Audit."
        />
        <meta property="og:image" content="/images/metalogo.jpeg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  );
};

export default Home;
