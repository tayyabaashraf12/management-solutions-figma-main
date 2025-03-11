import React from "react";
import Text1 from "./Text1/Text1";
import Text2 from "./Text2/Text2";

const TextContainer = () => {
  return (
    <div className="w-[415px] h-[14px] top-[950px]  left-[30px] relative flex justify-center gap-1   ">
      <Text1 />
      <Text2 />
    </div>
  );
};

export default TextContainer;
