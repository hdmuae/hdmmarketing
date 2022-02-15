import * as React from "react";

const style: React.CSSProperties = {
  background:
    "linear-gradient(268.5deg, rgba(255, 171, 188, 0.1) -0.06%, rgba(164, 179, 255, 0.1) 97.65%)",
};

const Contact: React.FC = () => {
  return (
    <section className="lg:hidden">
      <div className="px-6 pt-28 pb-4">
        <h1 className="font-fs mb-4 text-xl font-bold">Contact Us</h1>

        <p className="font-md font-inter text-description mb-8 text-sm">
          Whether you have a question about our services, projects, pricing or
          anything else - our team is looking forward to all your questions.
        </p>
      </div>

      <div style={style}>
        <div className="px-6 py-12">
          <h1 className="font-inter mb-2">Your name</h1>
          <input className="mb-4 h-16 w-full rounded-2xl shadow-md outline-none" />

          <h1 className="mb-2">Your contact number</h1>
          <input className="mb-4 h-16 w-full rounded-2xl shadow-md outline-none" />

          <h1 className="mb-2">Your email</h1>
          <input className="mb-4 h-16 w-full rounded-2xl shadow-md outline-none" />

          <h1 className="mb-2">Your Message</h1>
          <textarea
            rows={5}
            className="mb-4 w-full rounded-2xl shadow-md outline-none"
          />

          <div className="flex justify-center">
            <button className="bg-button rounded-2xl py-4 px-16 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
