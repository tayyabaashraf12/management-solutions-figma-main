import React from "react";
import Container1 from "./Container1/Container1";
import Container2 from "./Container2/Container2";
import Container3 from "./Container3/Container3";

const NavFeatureCard = () => {
  return (
    <div className="w-[248px] h-[292px]  rounded-lg py-[28px] px-[16px] gap-4 bg-[#A21A36]">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
};

export default NavFeatureCard;
