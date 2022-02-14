import * as React from "react";

const style: React.CSSProperties = {
  background:
    "linear-gradient(268.5deg, rgba(255, 171, 188, 0.1) -0.06%, rgba(164, 179, 255, 0.1) 97.65%)",
};

const Contact: React.FC = () => {
  return (
    <section className="lg:hidden">
      <div className="px-6 pt-28 pb-4">
        <h1 className="text-xl font-fs font-bold mb-4">Contact Us</h1>

        <p className="text-sm text-description font-inter font-md mb-8">
          Whether you have a question about our services, projects, pricing or
          anything else - our team is looking forward to all your questions.
        </p>
      </div>

      <div style={style}>
        <div className="px-6 py-12">
          <h1 className="mb-2 font-inter">Your name</h1>
          <input className="w-full h-16 shadow-md rounded-2xl mb-4 outline-none" />

          <h1 className="mb-2">Your contact number</h1>
          <input className="w-full h-16 shadow-md rounded-2xl mb-4 outline-none" />

          <h1 className="mb-2">Your email</h1>
          <input className="w-full h-16 shadow-md rounded-2xl mb-4 outline-none" />

          <h1 className="mb-2">Your Message</h1>
          <textarea
            rows={5}
            className="w-full shadow-md rounded-2xl mb-4 outline-none"
          />

          <div className="flex justify-center">
            <button className="text-white rounded-2xl bg-button py-4 px-16">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
