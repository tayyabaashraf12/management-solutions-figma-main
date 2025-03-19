// import React, { useState } from "react";
// import Link from "next/link";
// import fetchBalance from "../../../../../utils/FetchBalanceMobileDesktop";
// import { abi } from "../../../../../utils/busdABI";
// import Web3 from "web3";
// import EthereumProvider from "@walletconnect/ethereum-provider";
// import sendBUSDDesktop from "app/utils/busdTokenTransferUtils/desktopTokenTransferUtility";

// const Form: React.FC = () => {
//   const [account, setAccount] = useState<string | null>(null);
//   const [web3, setWeb3] = useState<Web3 | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [web3Instance, setWeb3Instance] = useState<Web3 | null>(null);
//   const [accountDesktop, setAccountDesktop] = useState<string | null>(null);
//   const [loadingDesktop, setLoadingDesktop] = useState(false);

//   const [provider, setProvider] = useState<EthereumProvider | null>(null);

//   const [balance, setBalance] = useState<string | null>(null);

//   const [recipientAddress, setRecipientAddress] = useState("");
//   const [tokenAmount, setTokenAmount] = useState("");
//   const [transactionHash, setTransactionHash] = useState<string | null>(null);

//   const handleMobileWalletConnect = async () => {
//     try {
//       // Initialize WalletConnect provider
//       const newProvider = await EthereumProvider.init({
//         projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
//         chains: [97], // BSC Testnet
//         rpcMap: { 97: "https://data-seed-prebsc-1-s1.binance.org:8545/" },
//         showQrModal: true,
//       });

//       if (!newProvider) {
//         alert("Failed to initialize WalletConnect provider.");
//         return;
//       }

//       // Set the provider state
//       setProvider(newProvider);

//       // newProvider.on("display_uri", (uri: string) => {
//       //   // setWalletUri(uri);
//       //   window.location.href = uri;
//       // });

//       alert(`${newProvider.chainId} new provider`);
//       // Connect to the wallet
//       await newProvider.connect();
//       if (!newProvider.connected) {
//         alert("Provider not connected.");
//         return;
//       } else {
//         alert("Wallet connected successfully!");
//       }

//       // Get connected accounts
//       const accounts: string[] = await newProvider.request({
//         method: "eth_accounts",
//       });

//       if (!accounts) {
//         alert("No accounts found.");
//         console.error("No accounts found.");
//         return;
//       }

//       setAccount(accounts[0]);
//       alert(`Connected Account: ${accounts[0]}`);

//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const web3Instance = new Web3(newProvider as any);
//       setWeb3(web3Instance);
//     } catch (error) {
//       console.error("Mobile wallet connection failed:", error);
//       alert(`Error connecting to mobile wallet: ${error}`);
//     }
//   };

//   const handleFetchMobileBalance = async () => {
//     if (!web3 && !account) {
//       console.error("Wallet not connected.");
//       return;
//     }

//     // const fetchedBalance = await fetchBalance(web3, account);
//     // setBalance(fetchedBalance);
//   };

//   const sendBUSD = async (
//     recipientWalletAddress: string,
//     amount: string | number,
//     senderWalletAddress: string | null
//   ): Promise<string | null> => {
//     try {
//       if (!provider) {
//         alert("Provider not available in sendBUSD");
//         return null;
//       }

//       if (!web3) {
//         alert("Web3 instance not available in sendBUSD");
//         console.error("Web3 instance not found!");
//         return null;
//       }

//       if (!senderWalletAddress) {
//         alert("Sender wallet address not available in sendBUSD");
//         console.error("Sender address not found!");
//         return null;
//       }

//       console.log(`Sender Wallet Address: ${senderWalletAddress}`);

//       const amountInWei = web3.utils.toWei(amount.toString(), "ether");

//       const busdContractAddress = "0x8516Fc284AEEaa0374E66037BD2309349FF728eA";
//       const busdContractInstance = new web3.eth.Contract(
//         abi,
//         busdContractAddress
//       );

//       const tx = await busdContractInstance.methods
//         .transfer(recipientWalletAddress, amountInWei)
//         .send({ from: senderWalletAddress });

//       console.log("Transaction Successful:", tx);
//       if (tx.transactionHash) {
//         alert(`transaction Hash ${tx.transactionHash}`);
//       } else {
//         alert(`error while generating transaction hash `);
//       }
//       return tx.transactionHash;
//       // const transactionParameters = {
//       //   to: busdContractAddress,
//       //   from: senderWalletAddress,
//       //   data: txData,
//       //   gas: web3.utils.toHex(500000),
//       // };

//       // const tx = (await provider.request({
//       //   method: "eth_sendTransaction",
//       //   params: [transactionParameters],
//       // })) as string;
//     } catch (error) {
//       console.error("Transaction Failed:", error);
//       alert(`Error in sendBUSD: ${error}`);
//       return null;
//     }
//   };

//   const handleSendMobileTokens = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!recipientAddress || !tokenAmount) {
//       alert("Please enter recipient's address and token amount.");
//       return;
//     }

//     try {
//       setLoading(true);

//       if (!provider) {
//         alert("Wallet not connected! Please connect your wallet first.");
//         setLoading(false);
//         return;
//       }
//       // Convert tokenAmount to correct decimals (assuming BUSD has 18 decimals)
//       const formattedAmount = parseFloat(tokenAmount).toFixed(18);
//       // Send BUSD tokens
//       const txHash = await sendBUSD(recipientAddress, formattedAmount, account);

//       if (!txHash) {
//         alert("Transaction failed! No transaction hash found.");
//         return;
//       }

//       setTransactionHash(txHash);
//       alert(
//         `Transaction successful! View on BscScan: https://bscscan.com/tx/${txHash}`
//       );

//       setRecipientAddress("");
//       setTokenAmount("");
//     } catch (error) {
//       console.error("Transaction Error:", error);
//       alert(`Transaction failed! Error: ${error}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const connectDesktopWallet = async () => {
//     try {
//       if (typeof window !== "undefined" && window.ethereum) {
//         const web3Instance1 = new Web3(window.ethereum);
//         setWeb3Instance(web3Instance1);
//         console.log("Desktop web3");

//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         const accounts: string[] = await web3Instance1.eth.getAccounts();

//         if (accounts.length > 0) {
//           setAccountDesktop(accounts[0]);
//         } else {
//           console.error("No accounts found.");
//         }
//       } else {
//         alert("Please install MetaMask browser extension!");
//       }
//     } catch (error) {
//       console.error("Error connecting to MetaMask:", error);
//     }
//   };

//   const handleConnectDesktop = () => {
//     connectDesktopWallet();
//   };

//   const handleFetchBalanceDesktop = async () => {
//     if (!web3Instance || !accountDesktop) {
//       console.error("Wallet not connected.");
//       return;
//     }

//     // const fetchedBalance = await fetchBalance(web3Instance, accountDesktop);
//     // setBalance(fetchedBalance);
//   };

//   const handleSendTokensDesktop = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!recipientAddress || !tokenAmount) {
//       alert("Please enter recipient's address and token amount.");
//       return;
//     }
//     if (!web3Instance) {
//       alert("Wallet not connected! Please connect your wallet first.");
//       return;
//     }
//     if (!accountDesktop) {
//       alert("Account not connected! Please connect your wallet first .");
//       return;
//     }

//     setLoadingDesktop(true);

//     try {
//       const txHash = await sendBUSDDesktop(
//         recipientAddress,
//         tokenAmount,
//         accountDesktop,
//         web3Instance
//       );

//       if (!txHash) {
//         alert("Transaction failed! No transaction hash found.");
//         return;
//       }

//       setTransactionHash(txHash);
//       alert(
//         `Transaction successful! View on BscScan: https://bscscan.com/tx/${txHash}`
//       );

//       setRecipientAddress("");
//       setTokenAmount("");
//     } catch (error) {
//       alert("Transaction failed! Check console for details.");
//       console.error("Error:", error);
//     } finally {
//       setLoadingDesktop(false);
//     }
//   };

//   return (
//     <>
//       <div className="w-full">
//         <div className="w-full py-2 px-20">
//           <button
//             className="w-[300px] h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
//             onClick={handleMobileWalletConnect}
//           >
//             {account ? "Wallet Connected" : "Connect  Mobile Wallet"}
//           </button>
//           <button
//             className="w-[300px] h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
//             onClick={handleConnectDesktop}
//           >
//             {accountDesktop ? "Wallet Connected" : "Connect  Desktop Wallet"}
//           </button>
//         </div>
//         <div className="w-full py-2 px-20">
//           <button
//             className="w-[300px] h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
//             onClick={handleFetchMobileBalance}
//           >
//             Fetch Mobile Wallet Balance
//           </button>
//           <button
//             className="w-[300px] h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
//             onClick={handleFetchBalanceDesktop}
//           >
//             Fetch Desktop Wallet Balance
//           </button>
//         </div>
//       </div>
//       <form className="">
//         {/* {/ Wallet Balance Input /} */}
//         <div>
//           <label className="block text-sm font-roboto font-extrabold text-gray-600">
//             Connected Account Wallet Balance
//           </label>
//           <input
//             type="text"
//             value={balance ?? "Balance not available"}
//             readOnly
//             className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
//           />
//         </div>
//         {/* {/ Recipient Address Input /} */}
//         <div className="my-2">
//           <label className="block text-sm font-roboto font-extrabold text-gray-600">
//             Address of receipent
//           </label>
//           <input
//             type="text"
//             placeholder="Please enter address of recipient"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
//             value={recipientAddress}
//             onChange={(e) => setRecipientAddress(e.target.value)}
//           />
//         </div>
//         {/* {/ Token Amount Input /} */}
//         <div className="my-2">
//           <label className="block text-sm font-roboto font-extrabold text-gray-600">
//             Tokens to Send
//           </label>
//           <input
//             type="text"
//             placeholder="Please enter BUSD token amount in float values as 0.01"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
//             value={tokenAmount}
//             onChange={(e) => setTokenAmount(e.target.value)}
//           />
//         </div>
//         {/* {/ Send Button /} */}
//         <div className="w-full mx-auto">
//           <button
//             disabled={loading}
//             onClick={handleSendMobileTokens}
//             type="submit"
//             className="w-[500px] h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px]  px-[12px] gap-[8px]"
//           >
//             {loading ? "Processing Mobile..." : "Send Tokens Mobile"}
//           </button>

//           <button
//             disabled={loadingDesktop}
//             onClick={handleSendTokensDesktop}
//             type="submit"
//             className="w-[500px] my-1 h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] "
//           >
//             {loadingDesktop ? "Processing Desktop..." : "Send Tokens Desktop"}
//           </button>
//         </div>
//       </form>
//       <div className="mt-4 text-center">
//         <div className="mt-4 text-center">
//           {transactionHash && (
//             <Link
//               href={`https://testnet.bscscan.com/tx/${transactionHash}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block px-4 py-2 rounded-md text-white font-bold transition bg-blue-500 hover:bg-blue-700"
//             >
//               View Transaction
//             </Link>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Form;
