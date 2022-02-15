import * as React from "react";
import Image from "next/image";

const Announcement: React.FC = () => {
  return (
    <section
      id="announcement"
      className="h-660 bg-mobile-banner lg:h-450 lg:bg-banner relative flex items-center bg-cover"
    >
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
      <div className="mx-auto w-11/12">
        <h1 className="font-sf mb-8 text-center text-xl font-bold leading-tight text-white">
          We share the things we like and the <br /> stuff that we are working
          on
        </h1>

        <div className="flex justify-center">
          <button className="bg-button rounded-2xl py-4 px-16 text-white">
            Lets go
          </button>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
