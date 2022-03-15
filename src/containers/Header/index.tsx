import * as React from "react";
import Navbar from "../Nav";
import Image from "next/image";
import useStore from "../../state";
import Modal from "../../components/Modal";
import emailjs from "emailjs-com";

import { useForm } from "react-hook-form";
import { If, Then, Else } from "react-if";
import { toast } from "react-toastify";

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
  variant: "horizontal" | "vertical";
}

const Header: React.FC<HeaderProps> = ({ title, variant }) => {
  const modal = useStore((state) => state.modal);
  const toggleModal = useStore((state) => state.toggleModal);

  const { register, handleSubmit, reset } = useForm();

  const toastifySuccess = () => {
    toast.success("Message sent successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data: any) => {
    const { name, email, number, message } = data;

    try {
      const templateParams = {
        name,
        email,
        number,
        message,
      };
      await emailjs.send(
        "service_m9x0oik",
        "template_z3zmvkb",
        templateParams,
        "user_bDIEmwy6qfjsQW9OkuxdP"
      );
      reset();
      toggleModal();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

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
        className="fixed bottom-[35px] right-[35px] z-50 flex items-center justify-center rounded-full text-center lg:bottom-[20px] lg:right-[20px]"
        style={style}
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
            src="/images/mobile/image_first_block@4.png"
            alt="HDM Marketing services"
            quality="100"
          />
        </div>
        <section className="algin-center flex flex-col">
          <h1 className="font-sf my-6 whitespace-pre-line text-center text-xl font-bold leading-tight text-white lg:mt-32 lg:text-left lg:text-xl xl:text-2xl">
            {title}
          </h1>

          <If condition={variant === "vertical"}>
            <Then>
              <p className="text-md mb-12 text-center text-white lg:text-left xl:text-lg">
                Digital marketing one stop solution that <br /> fits your
                business.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button
                  style={shadow}
                  onClick={toggleModal}
                  className="align-center bg-button text-md rounded-2xl py-4 px-16 text-white transition-transform duration-300 hover:scale-110"
                >
                  Get Started
                </button>
                <Modal
                  onClose={toggleModal}
                  setShowModal={toggleModal}
                  show={modal}
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="px-6">
                    <h1 className="font-inter mb-2">Your name</h1>
                    <input
                      {...register("name")}
                      className="mb-4 h-16 w-full rounded-2xl px-4 shadow-md outline-none"
                    />

                    <h1 className="font-inter mb-2">Your number</h1>
                    <input
                      {...register("number")}
                      className="mb-4 h-16 w-full rounded-2xl px-4 shadow-md outline-none"
                    />

                    <h1 className="font-inter mb-2">Your email</h1>
                    <input
                      {...register("email")}
                      className="font-sf mb-4 h-16 w-full rounded-2xl px-4 shadow-md outline-none"
                    />

                    <h1 className="font-inter mb-2">
                      Tell us about your project
                    </h1>
                    <textarea
                      rows={5}
                      {...register("message")}
                      className="mb-4 w-full rounded-2xl px-4 shadow-md outline-none"
                    />

                    <div className="flex justify-center">
                      <button className="bg-button rounded-2xl py-4 px-16 text-white">
                        Submit
                      </button>
                    </div>
                  </form>
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
