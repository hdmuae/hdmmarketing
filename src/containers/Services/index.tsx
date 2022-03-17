import * as React from "react";
import Image from "next/image";
import { data } from "./data";
import Card from "../../components/Card";
interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="max-w-default mx-auto w-full px-6 pt-20 md:w-4/5 md:px-0"
    >
      <h1 className="mb-8 text-xl font-bold lg:text-2xl">Services</h1>

      <div className="flex flex-wrap justify-between">
        {data.map(({ icon, title, description }, key) => (
          <Card
            website=""
            variant="service"
            key={key}
            image={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
