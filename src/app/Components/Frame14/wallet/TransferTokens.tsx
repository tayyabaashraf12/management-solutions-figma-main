import * as React from "react";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  type BaseError,
} from "wagmi";
import { abi } from "../wallet/busdABI";
import { isAddress } from "viem";
export default function TransferTokens() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const tokenAddress = formData.get("tokenAddress") as string;
    const tokenAmount = formData.get("tokenAmount") as string;
    if (!isAddress(tokenAddress)) {
      alert("Please Enter Address of Token Recipent ");
      return;
    }

    if (!tokenAmount || isNaN(Number(tokenAmount))) {
      alert("Please Enter tokens Amount");
      return;
    }

    writeContract({
      address: "0x8516Fc284AEEaa0374E66037BD2309349FF728eA",
      abi,
      functionName: "transfer",
      args: [tokenAddress as `0x${string}`, BigInt(tokenAmount)],
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <form onSubmit={submit} className="bg-white relative top-2 h-72 ">
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
        name="tokenAddress"
        placeholder="Enter Recipent address"
        required
      />
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
        name="tokenAmount"
        placeholder="Enter Tokens Amount in decimal values as 1,2,3..."
        required
      />

      <button
        className="w-[300px] h-[45px] bg-[#263238]
       text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] mx-56 mt-2"
        disabled={isPending}
        type="submit"
      >
        {isPending ? "Transaction is Processing..." : "Transfer Tokens"}
      </button>
      {hash && (
        <div className="bg-black text-white relative top-20 ">
          Transaction Hash: {hash}
        </div>
      )}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && (
        <div className="bg-black text-white">Transaction confirmed.</div>
      )}
      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </form>
  );
}
