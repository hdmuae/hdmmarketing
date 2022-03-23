import * as React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Form from "./form";

const Contact: React.FC = () => {
  return (
    <section className="lg:hidden">
      <div className="px-6 pt-28 pb-4">
        <h1 className="mb-4 text-xl font-bold">Contact Us</h1>

        <p className="font-md font-inter text-description mb-8 text-sm">
          Whether you have a question about our services, projects, pricing or
          anything else - our team is looking forward to all your questions.
        </p>
      </div>

      <Form />

      <ToastContainer />
    </section>
  );
};

export default Contact;
