import React from "react";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./Page4/Page4";

const PaginationFrame2 = () => {
  return (
    <div className="w-[182px] h-[38px] top-[893px] left-[766px] flex gap-[10px] ">
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
};
export default PaginationFrame2;
