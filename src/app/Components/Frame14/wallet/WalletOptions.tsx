import * as React from "react";
import { useConnect } from "wagmi";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <button
      className="w-[300px] h-[40px] bg-[#85a9bb] text-[#FFFFFF] rounded-[6px] mx-40 my-5"
      key={connector.uid}
      onClick={() => connect({ connector })}
    >
      {connector.name}
    </button>
  ));
}
