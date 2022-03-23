import * as React from "react";
import Image from "next/image";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Form from "../Contact/form";

const Footer: React.FC = () => {
  return (
    <section
      id="contact"
      className="max-w-default mx-auto hidden w-4/5 justify-between py-20 px-6 lg:flex lg:px-0"
    >
      <div className="w-1/2 pb-4">
        <h1 className="mb-4 text-xl font-bold lg:text-2xl">Contact Us</h1>

        <p className="font-md font-inter text-description mb-8 text-lg leading-tight">
          Whether you have a question about our services, projects, pricing or
          anything else - our team is looking forward to all your questions.
        </p>
        <div className="flex justify-center">
          <Image width="569" height="309" src="/svg/map.svg" alt="Map" />
        </div>

        <div className="flex flex-col py-4">
          <div className="mb-3">
            <div className="mb-3 flex">
              <Image
                src="/svg/location_icon.svg"
                width="30"
                height="25"
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

            <div className="flex">
              <div>
                <Image
                  src="/svg/location_icon.svg"
                  width="30"
                  height="25"
                  alt="Location icon"
                />
              </div>
              <a
                href="https://goo.gl/maps/fDy56hcaguy6LCqr8"
                target="_blank"
                rel="noreferrer"
                className="text-description ml-3"
              >
                Badenerstrasse 434, 8004 Zürich, Switzerland
              </a>
            </div>
          </div>

          <div className="mb-3 flex">
            <Image
              src="/svg/phone_icon.svg"
              width="30"
              height="20"
              alt="Location icon"
            />
            <a href="tel:+971 50 509 5699" className="text-description ml-3">
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
            <a href="mailto:info@hdmuae.com" className="text-description ml-3">
              info@hdmuae.com
            </a>
          </div>
        </div>
      </div>

      <Form />
      <ToastContainer />
    </section>
  );
};

export default Footer;
