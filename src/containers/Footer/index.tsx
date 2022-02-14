import * as React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="lg:hidden">
      <div className="w-11/12 mx-auto pt-12 pb-4">
        <div className="flex justify-center">
          <Image width="343" height="181" src="/svg/map.svg" alt="Map" />
        </div>

        <div className="flex flex-col py-4">
          <div className="mb-3">
            <h1 className="font-bold">Locations:</h1>
            <p className="text-description">
              Al Saqr Business Tower, 91 Sheikh Zayed Rd, Trade Centre DIFC -
              Dubai
            </p>
            <p className="text-description">
              Badenerstrasse 434, 8004 Zürich, Switzerland
            </p>
          </div>

          <div className="flex mb-3">
            <h1 className="font-bold mr-3">Mob./WhatsApp:</h1>
            <p className="text-description">+971 50 509 5699</p>
          </div>

          <div className="flex mb-3">
            <h1 className="font-bold mr-3">Tel.: </h1>
            <p className="text-description">+971 4 528 14 05</p>
          </div>

          <div className="flex">
            <h1 className="font-bold mr-3">Mail us:</h1>
            <p className="text-description">info@hdmuae.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
