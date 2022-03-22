import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  About,
  Header,
  Footer,
  Contact,
  OurWork,
  Services,
  Copyrights,
  MobileFooter,
  Announcement,
} from "../src/containers";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <title>HDM Marketing</title>
      </Head>

      <Header
        image=""
        variant="vertical"
        title={`Lift your business \n to new heights`}
      />

      <About />
      <Services />
      <OurWork />
      <Announcement />
      <Contact />

      <Footer />
      <MobileFooter />
      <Copyrights />
    </>
  );
};

export default Home;
