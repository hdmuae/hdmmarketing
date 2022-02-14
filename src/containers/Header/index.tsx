import * as React from "react";
import Image from "next/image";
import Navbar from "../Nav";

const Header: React.FC = () => {
  return (
    <div className="bg-mobile-header lg:bg-header bg-cover relative h-900">
      <div className="hidden xl:block absolute top-20 right-0">
        <Image
          height="880"
          width="810"
          src="/images/image_first_block.png"
          alt="HDM Marketing services"
        />
      </div>

      <div className="max-w-screen-2xl h-full m-auto pb-4 px-4 lg:px-8">
        <Navbar />

        <div className="xl:hidden flex justify-center">
          <Image
            height="344"
            width="343"
            src="/images/mobile/image_first_block.png"
            alt="HDM Marketing services"
          />
        </div>
        <section className="flex flex-col algin-center">
          <h1 className="lg:text-2xl text-xl xl:text-left text-center text-white font-sf font-bold leading-tight xl:mt-32 my-6">
            Lift your business <br /> to new heights
          </h1>
          <p className="xl:text-left text-center text-white font-sf lg:text-lg text-md mb-12">
            Digital marketing one stop solution that fits your business.
          </p>

          <div className="flex xl:justify-start justify-center">
            <button className="align-center text-white text-md rounded-2xl shadow-2xl bg-button py-4 px-16 duration-300 transition-transform hover:scale-110">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
