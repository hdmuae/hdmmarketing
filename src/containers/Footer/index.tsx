import * as React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="lg:hidden">
      <div className="mx-auto w-11/12 pt-12 pb-4">
        <div className="flex justify-center">
          <Image width="343" height="181" src="/svg/map.svg" alt="Map" />
        </div>

        <div className="flex flex-col py-4">
          <div className="mb-3 flex">
            <Image
              src="/svg/location_icon.svg"
              width="45"
              height="30"
              alt="Location icon"
            />

            <a
              href="https://goo.gl/maps/7baPY67BULuubtVw8"
              target="_blank"
              rel="noreferrer"
              className="text-description ml-3"
            >
              Al Saqr Business Tower, 91 Sheikh Zayed Rd, Trade Centre DIFC -
              Dubai
            </a>
          </div>

          <div className="mb-3 flex">
            <Image
              src="/svg/location_icon.svg"
              width="30"
              height="25"
              alt="Location icon"
            />
            <a
              href="https://goo.gl/maps/fDy56hcaguy6LCqr8"
              target="_blank"
              rel="noreferrer"
              className="text-description ml-3"
            >
              Badenerstrasse 434, 8004 Zürich, Switzerland
            </a>
          </div>

          <div className="mb-3 flex">
            <Image
              src="/svg/phone_icon.svg"
              width="30"
              height="20"
              alt="Location icon"
            />
            <a href="tel:+971 50 509 5699" className="text-description ml-2">
              +971 50 509 5699
            </a>
          </div>

          <div className="flex">
            <Image
              src="/svg/mail_icon.svg"
              width="30"
              height="20"
              alt="Location icon"
            />
            <a href="mailto:info@hdmuae.com" className="text-description ml-2">
              info@hdmuae.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
