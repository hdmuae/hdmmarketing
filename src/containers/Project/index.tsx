import * as React from "react";
import Image from "next/image";

const Project: React.FC = () => {
  return (
    <section className="relative">
      <div>
        <Image
          layout="fill"
          src="/images/background_portfolio.png"
          alt="HDM portfolio background"
        />
      </div>

      <div className="max-w-default mx-auto w-full py-12 px-6 md:w-4/5 lg:px-0">
        <div className="flex items-center justify-between"></div>
      </div>
    </section>
  );
};

export default Project;
