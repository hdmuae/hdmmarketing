import * as React from "react";
import Image from "next/image";

const Copyrights: React.FC = () => {
  return (
    <div className="relative">
      <Image
        className="-z-10"
        layout="fill"
        objectFit="cover"
        src="/images/background_footer.png"
        alt="HDM footer background"
      />

      <div>
        <p className="py-4 text-center text-xs text-white">
          Copyright © 2021 HDM marketing All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Copyrights;
