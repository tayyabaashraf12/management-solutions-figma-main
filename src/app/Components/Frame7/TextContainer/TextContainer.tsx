import React from "react";
import Text1 from "./Text1/Text1";
import Text2 from "./Text2/Text2";

const TextContainer = () => {
  return (
    <div className="w-[400px] h-[14px] top-[972px] left-[533px] flex gap-1 absolute ">
      <Text1 />
      <Text2 />
    </div>
  );
};

export default TextContainer;
