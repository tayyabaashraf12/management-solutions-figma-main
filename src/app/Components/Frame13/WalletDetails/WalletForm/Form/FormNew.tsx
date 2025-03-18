import React, { useState } from "react";
import Link from "next/link";
import Web3 from "web3";
import EthereumProvider from "@walletconnect/ethereum-provider";
import { connectWallet } from "../../../../../utils/walletConnect";
import fetchBalance from "app/utils/FetchBalanceMobileDesktop";
import sendBUSD from "app/utils/sendBUSD";

const FormNew: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [recipientAddress, setRecipientAddress] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const [provider, setProvider] = useState<EthereumProvider | null>(null);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  const handleSendTokens = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientAddress || !tokenAmount) {
      alert("Please enter recipient's address and token amount.");
      return;
    }

    try {
      setLoading(true);

      const formattedAmount = parseFloat(tokenAmount).toFixed(18);
      const txHash = await sendBUSD(
        recipientAddress,
        formattedAmount,
        account,
        web3,
        provider
      );

      if (!txHash) {
        alert("Transaction failed! No transaction hash found.");
        return;
      }

      setTransactionHash(txHash);
      alert(
        `Transaction successful! View on BscScan: https://bscscan.com/tx/${txHash}`
      );

      setRecipientAddress("");
      setTokenAmount("");
    } catch (error) {
      console.error("Transaction Error:", error);
      alert(`Transaction failed! Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full py-2 px-20">
          <button
            className="w-[300px] h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
            onClick={() => connectWallet(setWeb3, setAccount, setProvider)}
          >
            {account ? "Wallet Connected" : "Connect Wallet"}
          </button>
        </div>
        <div className="w-full py-2 px-20">
          <button
            className="w-[300px] h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
            onClick={() => fetchBalance(web3, provider, account, setBalance)}
          >
            Fetch Wallet Balance
          </button>
        </div>

        <div>
          <label className="block text-sm font-roboto font-extrabold text-gray-600">
            Connected Account Wallet Balance
          </label>
          <input
            type="text"
            value={balance ?? "Balance not available"}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
          />
        </div>
      </div>
      <form>
        <div className="my-2">
          <label className="block text-sm font-roboto font-extrabold text-gray-600">
            Address of receipent
          </label>
          <input
            type="text"
            placeholder="Please enter address of recipient"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
          />
        </div>
        {/* {/ Token Amount Input /} */}
        <div className="my-2">
          <label className="block text-sm font-roboto font-extrabold text-gray-600">
            Tokens to Send
          </label>
          <input
            type="text"
            placeholder="Please enter BUSD token amount in float values as 0.01"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
            value={tokenAmount}
            onChange={(e) => setTokenAmount(e.target.value)}
          />
        </div>
        {/* {/ Send Button /} */}
        <div className="w-full mx-auto">
          <button
            disabled={loading}
            onClick={handleSendTokens}
            type="submit"
            className="w-[500px] h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px]  px-[12px] gap-[8px]"
          >
            {loading ? "Processing ..." : "Send Tokens "}
          </button>
        </div>
      </form>

      <div className="mt-4 text-center">
        {transactionHash && (
          <Link
            href={`https://testnet.bscscan.com/tx/${transactionHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-md text-white font-bold transition bg-blue-500 hover:bg-blue-700"
          >
            View Transaction
          </Link>
        )}
      </div>
    </>
  );
};

export default FormNew;
