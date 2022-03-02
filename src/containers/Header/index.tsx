import * as React from "react";
import Image from "next/image";
import Navbar from "../Nav";

const shadow: React.CSSProperties = {
  boxShadow: " -10px 19px 20px rgba(43, 9, 120, 0.35)",
};

const Header: React.FC = () => {
  return (
    <div className="bg-mobile-header lg:bg-header relative h-[900px] bg-cover lg:h-[750px] xl:h-[900px]">
      <div className="absolute right-0 z-10 hidden md:w-[610px] lg:top-32 lg:block lg:w-[710] xl:top-20 xl:w-[810px]">
        <Image
          height="880"
          width="810"
          src="/images/image_first_block.png"
          alt="HDM Marketing services"
        />
      </div>

      <div className="max-w-default relative z-30 m-auto h-full w-4/5 px-4 pb-4 md:px-0">
        <Navbar />

        <div className="flex justify-center lg:hidden">
          <Image
            height="344"
            width="343"
            src="/images/mobile/image_first_block.png"
            alt="HDM Marketing services"
          />
        </div>
        <section className="algin-center flex flex-col">
          <h1 className="font-sf my-6 text-center text-xl font-bold leading-tight text-white lg:mt-32 lg:text-left lg:text-xl xl:text-2xl">
            Lift your business <br /> to new heights
          </h1>
          <p className="text-md mb-12 text-center text-white lg:text-left xl:text-lg">
            Digital marketing one stop solution that <br /> fits your business.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button
              style={shadow}
              className="align-center bg-button text-md rounded-2xl py-4 px-16 text-white transition-transform duration-300 hover:scale-110"
            >
              Get Started
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
