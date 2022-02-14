import * as React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="max-w-screen-2xl m-auto flex flex-col justify-center lg:flex-row-reverse px-4 lg:px-8 pt-20"
    >
      <div className="w-full lg:w-2/5 flex flex-col justify-center lg:ml-12">
        <h1 className="text-xl lg:text-2xl font-fs font-bold mb-4">About us</h1>
        <p className="text-sm lg:text-lg text-description leading-tight font-inter font-md mb-8">
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
