import * as React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.min.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const style: React.CSSProperties = {
  background:
    "linear-gradient(268.5deg, rgba(255, 171, 188, 0.1) -0.06%, rgba(164, 179, 255, 0.1) 97.65%)",
};
const schema = yup.object().shape({
  name: yup.string().min(5).max(32).required(),
  email: yup.string().email().required(),
  number: yup.number().typeError("Number can not be a string").required(),
  message: yup.string().required(),
});

const Form: React.FC = () => {
  const [captcha, setCaptcha] = React.useState("");
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
        "g-recaptcha-response": captcha,
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={style}
      className="rounded-3xl px-6 py-12 md:px-8 lg:mx-auto lg:h-full lg:w-[47%] xl:px-16"
    >
      <label htmlFor="name" className="font-inter mb-2 block">
        Your name
      </label>
      <input
        id="name"
        {...register("name")}
        className="mb-4 h-16 w-full rounded-2xl px-4 shadow-md outline-none"
      />
      <p className="mb-2 text-red-400">{errors.name?.message}</p>

      <label htmlFor="number" className="mb-2 block">
        Your contact number
      </label>
      <input
        id="number"
        {...register("number")}
        className="mb-4 h-16 w-full rounded-2xl px-4 shadow-md outline-none"
      />
      <p className="mb-2 text-red-400">{errors.number?.message}</p>

      <label htmlFor="email" className="mb-2 block">
        Your email
      </label>
      <input
        id="email"
        {...register("email")}
        className="mb-4 h-16 w-full rounded-2xl px-4 shadow-md outline-none"
      />
      <p className="mb-2 text-red-400">{errors.email?.message}</p>

      <label htmlFor="message" className="mb-2 block">
        Your Message
      </label>
      <textarea
        id="message"
        rows={8}
        {...register("message")}
        className="mb-4 w-full rounded-2xl p-4 shadow-md outline-none"
      />
      <p className="mb-2 text-red-400">{errors.message?.message}</p>

      <ReCAPTCHA
        sitekey="6LezEAMfAAAAAHKw6-lsl-zma4rCQ-1VQdprD3Ez"
        onChange={(value: any) => setCaptcha(value)}
        className="mb-4"
      />

      <div className="flex justify-center">
        <button className="bg-button rounded-2xl py-4 px-16 text-white transition-transform duration-300 hover:scale-110">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
