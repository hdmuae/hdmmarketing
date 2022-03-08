import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between pt-8 pb-16 lg:pb-12">
      <Link href="/">
        <a>
          <Image height="37" width="150" src="/svg/logo.svg" alt="HDM Logo" />
        </a>
      </Link>

      <div className="hidden w-1/2 justify-between lg:flex">
        <Link href="/#about">
          <a className="hover:text-button text-sm text-white">About us</a>
        </Link>

        <Link href="/#services">
          <a className="hover:text-button text-sm text-white">Services</a>
        </Link>

        <Link href="/#ourwork">
          <a className="hover:text-button text-sm text-white">Our work</a>
        </Link>
        {/* <a href="#ourteam" className="text-white text-sm hover:text-button">
          Our team
          </a>
          <a href="#blog" className="text-white text-sm hover:text-button">
          Blog
        </a> */}

        <Link href="/#contact">
          <a href="#contact" className="hover:text-button text-sm text-white">
            Contact us
          </a>
        </Link>
      </div>
      <div className="lg:hidden">
        <Image height="22" width="30" src="/svg/menu.svg" alt="Burger Menu" />
      </div>
    </nav>
  );
};

export default Navbar;
