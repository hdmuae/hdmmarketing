import * as React from "react";
import Image from "next/image";

const Announcement: React.FC = () => {
  return (
    <section
      id="announcement"
      className="relative flex h-[660px] items-center bg-cover lg:h-[450px]"
    >
      <div className="hidden md:block">
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/banner.png"
          alt="HDM Marketing services"
          quality="100"
        />
      </div>

      <div className="md:hidden">
        <Image
          layout="fill"
          objectFit="cover"
          src="/images/mobile/banner.png"
          alt="HDM Marketing services"
          quality="100"
        />
      </div>

      <div className="absolute right-32 -top-12 hidden lg:block">
        <Image width="305" height="156" src="/images/content.png" alt="" />
      </div>
      <div className="absolute bottom-20 right-0 hidden lg:block">
        <Image width="247" height="124" src="/images/content3.png" alt="" />
      </div>
      <div className="absolute left-0 hidden lg:block">
        <Image width="247" height="124" src="/images/content1.png" alt="" />
      </div>
      <div className="absolute -bottom-8 left-24 hidden lg:block">
        <Image width="347" height="124" src="/images/content2.png" alt="" />
      </div>

      {/* Mobile Cubes */}
      <div className="absolute right-0 -top-12 lg:hidden">
        <Image
          width="107"
          height="106"
          src="/svg/right_cube.svg"
          alt="Right cube"
        />
      </div>

      <div className="absolute left-0 -bottom-20 lg:hidden">
        <Image
          width="107"
          height="106"
          src="/svg/left_cube.svg"
          alt="left cube"
        />
      </div>

      <div className="absolute -bottom-12 right-28 hidden lg:block">
        <Image
          width="162"
          height="140"
          src="/images/right_cube.png"
          alt="Right cube"
        />
      </div>

      <div className="absolute left-52 -top-12 hidden lg:block">
        <Image
          width="107"
          height="106"
          src="/svg/left_cube.svg"
          alt="left cube"
        />
      </div>
      <div className="z-50 mx-auto w-11/12">
        <h1 className="mb-8 text-center text-[48px] font-medium leading-tight text-white">
          We share the things we like and the <br /> stuff that we are working
          on
        </h1>

        {/* <div className="flex justify-center">
          <button className="bg-button rounded-2xl py-4 px-16 text-sm text-white transition-transform duration-300 hover:scale-110">
            {`Let's go`}
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Announcement;
