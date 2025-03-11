import React from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableCell1 from "./TableCell1/TableCell1";
import TableCell2 from "./TableCell2/TableCell2";

const Coulmn1 = () => {
  return (
    <div className="w-[325px] h-[188px] top-[167px] left-[40px] ">
      <TableHeader />
      <TableCell1 />
      <TableCell2 />
    </div>
  );
};
export default Coulmn1;
