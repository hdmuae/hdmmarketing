import type { NextPage } from "next";
import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Home: NextPage = () => {
  return (
    <Html>
      <Head>
        <meta name="description" content="HDM Marketing Company profile" />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T9DH5TW');`,
          }}
        ></script>
        {/* <!-- Google Tag Manager --> */}
      </Head>

      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T9DH5TW"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Home;
