import React from "react";
import Header from "./Header/Header";
import OrderIcon from "./OrderIcon/OrderIcon";
import BookIcon from "./BookIcon/BookIcon";
import PlusIcon from "./PlusIcon/PlusIcon";

const Navbar = () => {
  return (
    <div className="w-[81px] h-[260px] pt-[32px] flex  flex-col gap-[24px] ">
      <Header />
      <OrderIcon />
      <BookIcon />
      <PlusIcon />
    </div>
  );
};

export default Navbar;
