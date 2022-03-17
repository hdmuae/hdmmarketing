import * as React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-default m-auto flex w-full flex-col justify-between px-6 md:w-4/5 md:px-0 lg:flex-row-reverse"
    >
      <div className="flex w-full flex-col justify-center lg:ml-12 lg:w-2/5">
        <h1 className="mb-4 text-xl font-bold lg:text-2xl">About us</h1>
        <p className="text-description font-inter mb-8 text-sm font-normal leading-tight xl:text-lg">
          HDM Marketing is a full-service digital marketing agency based in
          Dubai, UAE. We combine a data-driven approach with knowledge gained
          from years in digital marketing to deliver outstanding results to our
          clients.
        </p>
      </div>
      <div className="w-full lg:w-3/5">
        <Image
          width="343"
          height="243"
          layout="responsive"
          src="/images/about-us.png"
          alt="About us"
          quality="100"
        />
      </div>
    </section>
  );
};

export default About;
