import Image from "next/image";
import React from "react";
import FilterTuneIcon from "../../../../../../../SVG/FiltorIcon.svg";

const FilterIcon = () => {
  return (
    <Image
      src={FilterTuneIcon}
      alt="FilterTuneIcon"
      className="w-[21px] h-[21px]"
    />
  );
};
export default FilterIcon;
