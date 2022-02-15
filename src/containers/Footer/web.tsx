import * as React from "react";
import Image from "next/image";

const style: React.CSSProperties = {
  borderRadius: "24px",
  background:
    "linear-gradient(268.5deg, rgba(255, 171, 188, 0.1) -0.06%, rgba(164, 179, 255, 0.1) 97.65%)",
};

const Footer: React.FC = () => {
  return (
    <section
      id="contact"
      className="mx-auto hidden max-w-screen-2xl justify-between py-20 px-4 lg:flex lg:px-8"
    >
      <div className="w-1/2 pb-4">
        <h1 className="font-fs mb-4 text-xl font-bold lg:text-2xl">
          Contact Us
        </h1>

        <p className="font-md font-inter text-description mb-8 text-lg leading-tight">
          Whether you have a question about our services, projects, pricing or
          anything else - our team is looking forward to all your questions.
        </p>
        <div className="flex justify-center">
          <Image width="569" height="309" src="/svg/map.svg" alt="Map" />
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

          <div className="mb-3 flex">
            <h1 className="mr-3 font-bold">Mob./WhatsApp:</h1>
            <p className="text-description">+971 50 509 5699</p>
          </div>

          <div className="mb-3 flex">
            <h1 className="mr-3 font-bold">Tel.: </h1>
            <p className="text-description">+971 4 528 14 05</p>
          </div>

          <div className="flex">
            <h1 className="mr-3 font-bold">Mail us:</h1>
            <p className="text-description">info@hdmuae.com</p>
          </div>
        </div>
      </div>

      <div style={style} className="h-full w-2/5">
        <div className="mx-auto w-11/12 py-12 px-16">
          <h1 className="font-inter mb-2">Your name</h1>
          <input className="mb-4 h-16 w-full rounded-2xl px-4 shadow-lg outline-none" />

          <h1 className="mb-2">Your contact number</h1>
          <input className="mb-4 h-16 w-full rounded-2xl px-4 shadow-lg outline-none" />

          <h1 className="mb-2">Your email</h1>
          <input className="mb-4 h-16 w-full rounded-2xl px-4 shadow-lg outline-none" />

          <h1 className="mb-2">Your Message</h1>
          <textarea
            rows={7}
            className="mb-8 w-full rounded-2xl p-4 shadow-lg outline-none"
          />

          <div className="flex justify-center">
            <button className="bg-button rounded-2xl py-4 px-16 text-white transition-transform duration-300 hover:scale-110">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
