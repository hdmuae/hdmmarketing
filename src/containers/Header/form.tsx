import * as React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import ReCAPTCHA from "react-google-recaptcha";

const Form: React.FC<{ toggle: any }> = ({ toggle }) => {
  const [captcha, setCaptcha] = React.useState("");

  const schema = yup.object().shape({
    name: yup.string().min(5).max(32).required(),
    email: yup.string().email().required(),
    number: yup.number().typeError("Number can not be a string").required(),
    message: yup.string().required(),
  });

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
      toggle();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-6">
      <label htmlFor="modal_name" className="font-inter mb-2 block">
        Your name
      </label>
      <input
        id="modal_name"
        {...register("name")}
        style={{ WebkitAppearance: "none" }}
        className="mb-4 h-16 w-full rounded-2xl px-4 shadow-md outline-none"
      />
      <p className="text-red-400">{errors.name?.message}</p>

      <label htmlFor="modal_number" className="font-inter mb-2 block">
        Your number
      </label>
      <input
        id="modal_number"
        {...register("number")}
        style={{ WebkitAppearance: "none" }}
        className="mb-4 h-16 w-full rounded-2xl px-4 shadow-md outline-none"
      />
      <p className="text-red-400">{errors.number?.message}</p>

      <label htmlFor="modal_email" className="font-inter mb-2 block">
        Your email
      </label>
      <input
        id="modal_email"
        {...register("email")}
        style={{ WebkitAppearance: "none" }}
        className="mb-4 h-16 w-full rounded-2xl px-4 shadow-md outline-none"
      />
      <p className="text-red-400">{errors.email?.message}</p>

      <label htmlFor="modal_message" className="font-inter mb-2 block">
        Tell us about your project
      </label>
      <textarea
        rows={5}
        id="modal_message"
        {...register("message")}
        style={{ WebkitAppearance: "none" }}
        className="mb-4 w-full rounded-2xl p-4 shadow-md outline-none"
      />
      <p className="text-red-400">{errors.message?.message}</p>

      <div className="flex justify-center">
        <ReCAPTCHA
          sitekey="6LezEAMfAAAAAHKw6-lsl-zma4rCQ-1VQdprD3Ez"
          onChange={(value: any) => setCaptcha(value)}
          className="mb-4 text-center"
        />
      </div>

      <div className="flex justify-center">
        <button className="bg-button rounded-2xl py-4 px-16 text-white">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
