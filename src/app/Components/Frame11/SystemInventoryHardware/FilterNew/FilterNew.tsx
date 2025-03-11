import React from "react";
import Filter from "./Filter/Filter";
import New from "./New/New";

const FilterNew = () => {
  return (
    <div className="w-[234.73px] h-[41px] absolute flex justify-between top-[86px] left-[713px] rounded-[12px] bg-[#FFFFFF]">
      <Filter />
      <New />
    </div>
  );
};
export default FilterNew;
