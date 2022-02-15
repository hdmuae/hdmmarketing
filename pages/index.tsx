import type { NextPage } from "next";
import Head from "next/head";
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
        <meta name="description" content="HDM Marketing Company profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <About />
        <Services />
        <OurWork />
        <Announcement />
        <Contact />
      </main>

      <Footer />
      <MobileFooter />
      <Copyrights />
    </div>
  );
};

export default Home;
