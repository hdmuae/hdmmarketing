import * as React from "react";
import Image from "next/image";
import { data } from "./data";
import Card from "../../components/Card";

const OurWork: React.FC = () => {
  return (
    <section
      id="ourwork"
      className="mx-auto max-w-screen-2xl py-12 px-4 lg:px-8"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-fs mb-8 text-xl font-bold lg:text-2xl">Our work</h1>
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
    </section>
  );
};

export default OurWork;
