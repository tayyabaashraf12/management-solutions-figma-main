"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, useAccount } from "wagmi";
import { config } from "../../../../config";
import { Account } from "./wallet/Account";
import { WalletOptions } from "./wallet/WalletOptions";
import TransferTokens from "./wallet/TransferTokens";

const queryClient = new QueryClient();

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

const Frame14 = () => {
  
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <div className="w-[760px] h-[500px] relative top-[90px] left-[0px] bg-[#071410]">
        <ConnectWallet />
        <TransferTokens />
      </div>
    </QueryClientProvider>
  </WagmiProvider>
};

export default Frame14;
