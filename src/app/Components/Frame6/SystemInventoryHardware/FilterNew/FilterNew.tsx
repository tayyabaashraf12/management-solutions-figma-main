import React from "react";
import Filter from "./Filter/Filter";
import New from "./New/New";

const FilterNew = () => {
  return (
    <div className="w-[234.73px] h-[41px] absolute flex justify-between  top-[85px] left-[903px] rounded-[12px] bg-[#FFFFFF]">
      <Filter />
      <New />
    </div>
  );
};
export default FilterNew;
