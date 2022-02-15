import * as React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="m-auto flex max-w-screen-2xl flex-col justify-center px-4 pt-20 lg:flex-row-reverse lg:px-8"
    >
      <div className="flex w-full flex-col justify-center lg:ml-12 lg:w-2/5">
        <h1 className="font-fs mb-4 text-xl font-bold lg:text-2xl">About us</h1>
        <p className="font-md font-inter text-description mb-8 text-sm leading-tight lg:text-lg">
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
          src="/svg/mobile/about-us.svg"
          alt="About us"
        />
      </div>
    </section>
  );
};

export default About;
