import * as React from "react";
import Navbar from "../Nav";
import Image from "next/image";
import useStore from "../../state";
import Modal from "../../components/Modal";
import Form from "./form";
import { If, Then, Else } from "react-if";

const shadow: React.CSSProperties = {
  boxShadow: "-10px 19px 20px rgba(43, 9, 120, 0.35)",
};

const style: React.CSSProperties = {
  width: "50px",
  height: "50px",
  backgroundColor: "#301B65",
  boxShadow: "2px 2px 3px #999",
};

interface HeaderProps {
  title: string;
  image: string;
  variant: "horizontal" | "vertical";
}

const Header: React.FC<HeaderProps> = ({ title, variant, image }) => {
  const modal = useStore((state) => state.modal);
  const toggleModal = useStore((state) => state.toggleModal);

  return (
    <div
      className={`relative mb-20 bg-cover ${
        variant === "vertical"
          ? "h-[900px] lg:h-[750px] xl:h-[900px]"
          : "h-[600px] lg:h-[560px]"
      }`}
    >
      <a
        href="https://wa.me/971505095699"
        target="_blank"
        className="fixed bottom-[35px] right-[35px] z-50 flex items-center justify-center rounded-full text-center lg:bottom-[20px] lg:right-[20px]"
        style={style}
        rel="noreferrer"
      >
        <Image
          src="/svg/whatsapp.svg"
          width="30"
          height="30"
          alt="Whatsapp icon"
        />
      </a>

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
      <div className="absolute right-0 z-10 hidden md:w-[610px] lg:top-32 lg:block lg:w-[710] xl:top-20 xl:w-[710px] 2xl:w-[810px]">
        <If condition={variant === "vertical"}>
          <Then>
            <Image
              height="880"
              width="810"
              src="/svg/header_image.svg"
              alt="HDM Marketing services"
              quality="100"
            />
          </Then>
          <Else>
            <Image
              height="542"
              width="810"
              src={image}
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
            src="/images/mobile/image_first_block@4.png"
            alt="HDM Marketing services"
            quality="100"
          />
        </div>
        <section className="algin-center flex flex-col">
          <h1 className="anim my-6 whitespace-pre-line text-center text-xl font-semibold leading-tight text-white lg:mt-32 lg:text-left lg:text-xl xl:text-2xl">
            {title}
          </h1>

          <If condition={variant === "vertical"}>
            <Then>
              <p className="anim text-md mb-12 text-center text-white lg:text-left xl:text-lg">
                Digital marketing one stop solution that <br /> fits your
                business.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button
                  style={shadow}
                  onClick={toggleModal}
                  className="align-center bg-button text-md rounded-2xl py-4 px-16 text-white transition-transform duration-300 hover:scale-110"
                >
                  Submit a Request
                </button>
                <Modal
                  onClose={toggleModal}
                  setShowModal={toggleModal}
                  show={modal}
                >
                  <Form toggle={toggleModal} />
                </Modal>
              </div>
            </Then>
          </If>
        </section>
      </div>
    </div>
  );
};

export default Header;
