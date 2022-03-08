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
    <div>
      <Head>
        <title>HDM Marketing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="HDM Company Profile, Software and Marketing Solutions"
        />
      </Head>

      <Header
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
    </div>
  );
};

export default Home;
