"use client";
import React from "react";
import { Provider } from "react-redux";

import SidebarNavigation from "./SidebarNavigation/SidebarNavigation";
import WalletDetails from "./WalletDetails/WalletDetails";
import store from "../../../redux/store";

const Frame13 = () => {
  return (
    <Provider store={store}>
      <div className="w-[1440px] h-[1024px] top-[7062px] left-[12385px] bg-[#071410]">
        <SidebarNavigation />
        <WalletDetails />
      </div>
    </Provider>
  );
};

export default Frame13;
