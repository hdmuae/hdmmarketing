import * as React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between pt-8 pb-16 lg:pb-12 ">
      <Image height="37" width="150" src="/svg/logo.svg" alt="HDM Logo" />

      <div className="hidden lg:flex w-1/2 justify-between">
        <a href="#about" className="text-white text-sm">
          About us
        </a>
        <a href="#services" className="text-white text-sm">
          Services
        </a>
        <a href="#ourwork" className="text-white text-sm">
          Our work
        </a>
        {/* <a href="#ourteam" className="text-white text-sm">
          Our team
        </a>
        <a href="#blog" className="text-white text-sm">
          Blog
        </a> */}
        <a href="#contact" className="text-white text-sm">
          Contact us
        </a>
      </div>
      <div className="lg:hidden">
        <Image height="22" width="30" src="/svg/menu.svg" alt="Burger Menu" />
      </div>
    </nav>
  );
};

export default Navbar;
