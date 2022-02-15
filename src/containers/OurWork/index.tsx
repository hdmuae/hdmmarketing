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
    <div className="mb-12 flex flex-col lg:flex-row lg:even:flex-row lg:odd:flex-row-reverse justify-between">
      <div className="w-full relative lg:w-1/2 flex flex-col mb-8">
        <div
          className={`flex justify-center ${
            index % 2 == 0 ? "md:justify-start" : "md:justify-end"
          }`}
        >
          <Image width="585" height="400" src={image} alt="Project preview" />
        </div>
        <button
          className={`text-sm text-white rounded-2xl py-3 px-8 border-white shadow-lg border-2 bg-gradient-to-r from-button-gradient to-button-gradient1 absolute -bottom-4 right-0 left-0 ${
            index % 2 == 0
              ? "md:w-52 md:left-auto md:bottom-6 md:right-12"
              : "md:w-52 md:right-auto md:bottom-6 md:left-12"
          }`}
        >
          See the project
        </button>
      </div>

      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <h1 className="text-lg lg:text-xl font-bold lg:font-normal mb-2">
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
      className="max-w-screen-2xl mx-auto py-12 px-4 lg:px-8"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl font-fs font-bold mb-8">Our work</h1>
        <h2 className="text-button text-lg font-inter font-medium hidden lg:block">
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
