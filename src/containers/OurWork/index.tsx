import * as React from "react";
import Image from "next/image";
import { data } from "./data";
import Card from "../../components/Card";
import Link from "next/link";

const OurWork: React.FC = () => {
  return (
    <section id="ourwork" className="relative">
      <div>
        <Image
          className="-z-10"
          layout="fill"
          src="/images/background_portfolio.png"
          alt="HDM portfolio background"
        />
      </div>

      <div className="max-w-default mx-auto w-full py-12 px-6 md:w-4/5 lg:px-0">
        <div className="flex items-center justify-between">
          <h1 className="mb-8 text-xl font-bold lg:text-2xl">Our work</h1>
          <h2 className="font-inter text-button z-10 hidden cursor-pointer text-lg font-medium lg:block">
            <Link href="/portfolio">
              <a className="mr-3 cursor-pointer">See all projects</a>
            </Link>
            <Image width="12" height="18px" src="/svg/arrow.svg" alt="arrow" />
          </h2>
        </div>

        {data.map(({ image, title, description, active, website }, key) => (
          <Card
            website={website}
            variant="ourwork"
            active={active}
            key={key}
            index={key}
            image={image}
            title={title}
            description={description}
          />
        ))}

        <h2 className="font-inter text-button absolute bottom-12 cursor-pointer text-sm font-medium lg:hidden">
          <Link href="/portfolio">
            <a className="z-50 mr-3 cursor-pointer">See all projects</a>
          </Link>
        </h2>
      </div>
    </section>
  );
};

export default OurWork;
