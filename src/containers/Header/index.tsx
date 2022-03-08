import * as React from "react";
import Image from "next/image";
import Navbar from "../Nav";
import { If, Then, Else } from "react-if";

const shadow: React.CSSProperties = {
  boxShadow: "-10px 19px 20px rgba(43, 9, 120, 0.35)",
};

interface HeaderProps {
  title: string;
  variant: "horizontal" | "vertical";
}

const Header: React.FC<HeaderProps> = ({ title, variant }) => {
  return (
    <div
      className={`relative mb-20 bg-cover ${
        variant === "vertical"
          ? "h-[900px] lg:h-[750px] xl:h-[900px]"
          : "h-[600px] lg:h-[560px]"
      }`}
    >
      <div className="hidden md:block">
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/header-background.png"
          alt="HDM Marketing services"
          quality="100"
        />
      </div>

      <div className="md:hidden">
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/mobile/header-background.png"
          alt="HDM Marketing services"
          quality="100"
        />
      </div>
      <div className="absolute right-0 z-10 hidden md:w-[610px] lg:top-32 lg:block lg:w-[710] xl:top-20 xl:w-[810px]">
        <If condition={variant === "vertical"}>
          <Then>
            <Image
              height="880"
              width="810"
              src="/images/image_first_block.png"
              alt="HDM Marketing services"
              quality="100"
            />
          </Then>
          <Else>
            <Image
              height="542"
              width="810"
              src="/images/portfolio-header.png"
              alt="HDM Marketing services"
              quality="100"
            />
          </Else>
        </If>
      </div>

      <div className="max-w-default relative z-30 m-auto h-full w-4/5 pb-4">
        <Navbar />

        <div className="flex justify-center lg:hidden">
          <Image
            height="344"
            width="343"
            src="/images/mobile/image_first_block.png"
            alt="HDM Marketing services"
            quality="100"
          />
        </div>
        <section className="algin-center flex flex-col">
          <h1 className="font-sf my-6 whitespace-pre-line text-center text-xl font-bold leading-tight text-white lg:mt-32 lg:text-left lg:text-xl xl:text-2xl">
            {title}
          </h1>

          <If condition={variant === "vertical"}>
            <>
              <p className="text-md mb-12 text-center text-white lg:text-left xl:text-lg">
                Digital marketing one stop solution that <br /> fits your
                business.
              </p>

              {/* <div className="flex justify-center lg:justify-start">
                <button
                  style={shadow}
                  className="align-center bg-button text-md rounded-2xl py-4 px-16 text-white transition-transform duration-300 hover:scale-110"
                >
                  Get Started
                </button>
              </div> */}
            </>
          </If>
        </section>
      </div>
    </div>
  );
};

export default Header;
