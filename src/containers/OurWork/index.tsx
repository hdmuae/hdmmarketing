import * as React from "react";
import Image from "next/image";
import { data } from "./data";

interface CardProps {
  index: number;
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ index, image, title, description }) => {
  return (
    <div className="mb-12 flex flex-col justify-between lg:flex-row lg:odd:flex-row-reverse lg:even:flex-row">
      <div className="relative mb-8 flex w-full flex-col lg:w-1/2">
        <div
          className={`flex justify-center ${
            index % 2 == 0 ? "md:justify-start" : "md:justify-end"
          }`}
        >
          <Image width="585" height="400" src={image} alt="Project preview" />
        </div>
        <button
          className={`from-button-gradient to-button-gradient1 absolute -bottom-4 right-0 left-0 rounded-2xl border-2 border-white bg-gradient-to-r py-3 px-8 text-sm text-white shadow-lg ${
            index % 2 == 0
              ? "md:left-auto md:bottom-6 md:right-12 md:w-52"
              : "md:right-auto md:bottom-6 md:left-12 md:w-52"
          }`}
        >
          See the project
        </button>
      </div>

      <div className="flex w-full flex-col justify-center lg:w-2/5">
        <h1 className="mb-2 text-lg font-bold lg:text-xl lg:font-normal">
          {title}
        </h1>
        <p className="text-description">{description}</p>
      </div>
    </div>
  );
};

const OurWork: React.FC = () => {
  return (
    <section
      id="ourwork"
      className="mx-auto max-w-screen-2xl py-12 px-4 lg:px-8"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-fs mb-8 text-xl font-bold lg:text-2xl">Our work</h1>
        <h2 className="font-inter text-button hidden text-lg font-medium lg:block">
          <span className="mr-3">See all projects</span>
          <Image width="12" height="18px" src="/svg/arrow.svg" alt="arrow" />
        </h2>
      </div>
      {data.map(({ image, title, description }, key) => (
        <Card
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
