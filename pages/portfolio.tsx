import * as React from "react";
import {
  Contact,
  Copyrights,
  Footer,
  Header,
  MobileFooter,
  Portfolio as Work,
} from "../src/containers";

const Portfolio: React.FC = () => {
  return (
    <section>
      <Header variant="horizontal" title="Our Case Studies" />
      <Work />
      <Contact />
      <Footer />
      <MobileFooter />
      <Copyrights />
    </section>
  );
};

export default Portfolio;
