import * as React from "react";
import Image from "next/image";
import Navbar from "../Nav";

const Header: React.FC = () => {
  return (
    <div className="h-900 bg-mobile-header lg:bg-header relative bg-cover">
      <div className="absolute top-20 right-0 hidden xl:block">
        <Image
          height="880"
          width="810"
          src="/images/image_first_block.png"
          alt="HDM Marketing services"
        />
      </div>

      <div className="m-auto h-full max-w-screen-2xl px-4 pb-4 lg:px-8">
        <Navbar />

        <div className="flex justify-center xl:hidden">
          <Image
            height="344"
            width="343"
            src="/images/mobile/image_first_block.png"
            alt="HDM Marketing services"
          />
        </div>
        <section className="algin-center flex flex-col">
          <h1 className="font-sf my-6 text-center text-xl font-bold leading-tight text-white lg:text-2xl xl:mt-32 xl:text-left">
            Lift your business <br /> to new heights
          </h1>
          <p className="font-sf text-md mb-12 text-center text-white lg:text-lg xl:text-left">
            Digital marketing one stop solution that fits your business.
          </p>

          <div className="flex justify-center xl:justify-start">
            <button className="align-center bg-button text-md rounded-2xl py-4 px-16 text-white shadow-2xl transition-transform duration-300 hover:scale-110">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
