import * as React from "react";
import Image from "next/image";
import { data } from "./data";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="mb-12 lg:w-30">
      <div className="flex items-center mb-4">
        <div className="w-1/5">
          <Image src={icon} width="60" height="60" alt="UI/UX design icon" />
        </div>
        <h1 className="w-4/5 ml-2 text-lg">{title}</h1>
      </div>
      <p className="text-description font-inter font-normal">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="max-w-screen-2xl mx-auto pt-20 px-4 lg:px-8"
    >
      <h1 className="text-xl lg:text-2xl font-fs font-bold mb-8">Services</h1>

      <div className="flex flex-wrap justify-between">
        {data.map(({ icon, title, description }, key) => (
          <Card key={key} icon={icon} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default Services;
