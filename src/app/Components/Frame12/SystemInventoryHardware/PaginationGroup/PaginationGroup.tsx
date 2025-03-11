import React from "react";
import PaginationFrame1 from "./PaginationFrame1/PaginationFrame1";
import PaginationFrame2 from "./PaginationFrame2/PaginationFrame2";

const PaginationGroup = () => {
  return (
    <div className="w-[285px]  h-[38px] relative flex top-[893px] left-[872px] ">
      <PaginationFrame1 />
      <PaginationFrame2 />
    </div>
  );
};
export default PaginationGroup;
