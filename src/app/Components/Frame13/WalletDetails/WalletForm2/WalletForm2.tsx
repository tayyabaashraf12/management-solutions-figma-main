"use client";
import React, { useState } from "react";
import TransactionHistoryTable from "./TransactionHistoryTable/TransactionHistoryTable";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // BscScan API key

interface Transaction {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
}
const WalletForm2: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to fetch wallet transaction history
  const fetchWalletHistory = async () => {
    if (!walletAddress) {
      setError("Please enter a wallet address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api-testnet.bscscan.com/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=desc&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.status === "1") {
        setTransactions(data.result as Transaction[]); // Ensure TypeScript knows the expected type
      } else {
        setError("No transactions found or invalid address");
        setTransactions([]);
      }
    } catch (err) {
      setError("Error fetching wallet history");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[920px] h-auto relative top-[30px] left-[28px] bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Wallet Transaction History
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-600">
          Enter Wallet Address
        </label>
        <input
          type="text"
          placeholder="0x1234...abcd"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
      </div>

      <button
        onClick={fetchWalletHistory}
        className="w-full h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
      >
        {loading ? "Loading..." : "Get Wallet History"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/*  TransactionHistoryTable component for showing Transaction history of any wallet*/}
      {walletAddress && transactions.length > 0 && (
        <TransactionHistoryTable transactions={transactions} />
      )}
    </div>
  );
};

export default WalletForm2;
