import * as React from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const style: React.CSSProperties = {
  borderRadius: "24px",
  background:
    "linear-gradient(268.5deg, rgba(255, 171, 188, 0.1) -0.06%, rgba(164, 179, 255, 0.1) 97.65%)",
};

const Footer: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastify = (state: boolean) => {
    state
      ? toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: "submit-feedback success",
          toastId: "notifyToast",
        })
      : toast.error(errors, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
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
      toastify(true);
    } catch (e) {
      console.log(e);
    }
  };
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

      <div style={style} className="h-full w-[47%]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto py-12 md:px-8 xl:px-16"
        >
          <label htmlFor="form_name" className="font-inter mb-2 block">
            Your name
          </label>
          <input
            id="form_name"
            {...register("name", { required: true })}
            className="mb-4 h-16 w-full rounded-2xl px-4 shadow-lg outline-none"
          />

          <label htmlFor="form_number" className="mb-2 block">
            Your contact number
          </label>
          <input
            id="form_number"
            {...register("number", { required: true })}
            className="mb-4 h-16 w-full rounded-2xl px-4 shadow-lg outline-none"
          />

          <label htmlFor="form_email" className="mb-2 block">
            Your email
          </label>
          <input
            id="form_email"
            {...register("email", { required: true })}
            className="mb-4 h-16 w-full rounded-2xl px-4 shadow-lg outline-none"
          />

          <label htmlFor="form_message" className="mb-2 block">
            Your Message
          </label>
          <textarea
            id="form_message"
            rows={7}
            {...register("message", { required: true })}
            className="mb-8 w-full rounded-2xl p-4 shadow-lg outline-none"
          />

          <div className="flex justify-center">
            <button className="bg-button rounded-2xl py-4 px-16 text-white transition-transform duration-300 hover:scale-110">
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Footer;
