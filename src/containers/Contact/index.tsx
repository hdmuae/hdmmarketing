import * as React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const style: React.CSSProperties = {
  background:
    "linear-gradient(268.5deg, rgba(255, 171, 188, 0.1) -0.06%, rgba(164, 179, 255, 0.1) 97.65%)",
};

const Contact: React.FC = () => {
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
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="lg:hidden">
      <div className="px-6 pt-28 pb-4">
        <h1 className="mb-4 text-xl font-bold">Contact Us</h1>

        <p className="font-md font-inter text-description mb-8 text-sm">
          Whether you have a question about our services, projects, pricing or
          anything else - our team is looking forward to all your questions.
        </p>
      </div>

      <div style={style}>
        <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-12">
          <label htmlFor="name" className="font-inter mb-2 block">
            Your name
          </label>
          <input
            id="name"
            {...register("name", { required: true })}
            className="mb-4 h-16 w-full rounded-2xl px-4 shadow-md outline-none"
          />

          <label htmlFor="number" className="mb-2 block">
            Your contact number
          </label>
          <input
            id="number"
            {...register("number", { required: true })}
            className="mb-4 h-16 w-full rounded-2xl px-4 shadow-md outline-none"
          />

          <label htmlFor="email" className="mb-2 block">
            Your email
          </label>
          <input
            id="email"
            {...register("email", { required: true })}
            className="mb-4 h-16 w-full rounded-2xl px-4 shadow-md outline-none"
          />

          <label htmlFor="message" className="mb-2 block">
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message", { required: true })}
            className="mb-4 w-full rounded-2xl px-4 shadow-md outline-none"
          />

          <div className="flex justify-center">
            <div
              className="g-recaptcha"
              data-sitekey="6Lc-CQMfAAAAAN6woHHMCph6VrEeL2s6n16yTnro"
            ></div>
            <button className="bg-button rounded-2xl py-4 px-16 text-white">
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
