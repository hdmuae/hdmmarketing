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
    <div className="from-card-gradient to-card-gradient1 mb-4 rounded-3xl p-6 hover:bg-gradient-to-r lg:w-1/3">
      <div className="mb-4 flex items-center">
        <div className="w-1/5">
          <Image src={icon} width="60" height="60" alt="UI/UX design icon" />
        </div>
        <h1 className="ml-2 w-4/5 text-lg">{title}</h1>
      </div>
      <p className="font-inter text-description font-normal">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="mx-auto max-w-screen-2xl px-4 pt-20 lg:px-8"
    >
      <h1 className="font-fs mb-8 text-xl font-bold lg:text-2xl">Services</h1>

      <div className="flex flex-wrap justify-between">
        {data.map(({ icon, title, description }, key) => (
          <Card key={key} icon={icon} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default Services;
