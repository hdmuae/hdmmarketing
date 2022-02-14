import * as React from "react";

const style: React.CSSProperties = {
  backgroundImage: "url('/images/background_footer.png')",
};

const Copyrights: React.FC = () => {
  return (
    <div style={style}>
      <p className="text-center text-white text-xs py-4">
        Copyright © 2021 HDM marketing All Rights Reserved.
      </p>
    </div>
  );
};

export default Copyrights;
