import * as React from "react";
import Image from "next/image";
import { data } from "./data";
import Card from "../../components/Card";

const Portfolio: React.FC = () => {
  return (
    <section className="relative">
      <div>
        <Image
          layout="fill"
          src="/images/background_portfolio.png"
          alt="HDM portfolio background"
        />
      </div>

      <div className="max-w-default mx-auto w-full py-12 px-6 md:w-4/5 lg:px-0">
        <div className="flex items-center justify-between"></div>
        {data.map(
          ({ image, title, description, Industry, active, website }, key) => (
            <Card
              website={website}
              variant="ourwork"
              key={key}
              index={key}
              image={image}
              title={title}
              active={active}
              industry={Industry}
              description={description}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
