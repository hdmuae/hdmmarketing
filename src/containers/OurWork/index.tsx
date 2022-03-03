import * as React from "react";
import Image from "next/image";
import { data } from "./data";
import Card from "../../components/Card";

const OurWork: React.FC = () => {
  return (
    <section id="ourwork" className="relative">
      <div>
        <Image
          layout="fill"
          src="/images/background_portfolio.png"
          alt="HDM portfolio background"
        />
      </div>

      <div className="max-w-default mx-auto w-full py-12 px-6 md:w-4/5 lg:px-0">
        <div className="flex items-center justify-between">
          <h1 className="font-fs mb-8 text-xl font-bold lg:text-2xl">
            Our work
          </h1>
          <h2 className="font-inter text-button hidden text-lg font-medium lg:block">
            <span className="mr-3 cursor-pointer">See all projects</span>
            <Image width="12" height="18px" src="/svg/arrow.svg" alt="arrow" />
          </h2>
        </div>
        {data.map(({ image, title, description }, key) => (
          <Card
            variant="ourwork"
            key={key}
            index={key}
            image={image}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default OurWork;
