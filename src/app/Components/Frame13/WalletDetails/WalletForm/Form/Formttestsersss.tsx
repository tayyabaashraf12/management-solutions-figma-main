// import React, { useState } from "react";
// import Link from "next/link";
// import fetchBalance from "../../../../../utils/FetchBalanceMobileDesktop";
// import busdABI from "../../../../../utils/busdContractABI.json";
// import Web3 from "web3";
// import EthereumProvider from "@walletconnect/ethereum-provider";
// // import sendBUSD from "app/utils/busdTokenTransferUtils/TokenTransferUtility";
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
//   const connectMobileWallet = async () => {
//     try {
//       // Initialize WalletConnect provider
//       const newProvider = await EthereumProvider.init({
//         projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
//         chains: [97], // BSC Testnet
//         rpcMap: { 97: "https://data-seed-prebsc-1-s1.binance.org:8545/" },
//         showQrModal: false,
//       });

//       if (!newProvider) {
//         alert("Failed to initialize WalletConnect provider.");
//         return;
//       }

//       // Set the provider state
//       setProvider(newProvider);

//       // Handle WalletConnect URI event for MetaMask Deep Link
//       newProvider.on("display_uri", (uri: string) => {
//         const metamaskDeepLink = `https://metamask.app.link/wc?uri=${encodeURIComponent(
//           uri
//         )}`;
//         window.location.href = metamaskDeepLink;
//       });

//       alert(`${newProvider.chainId} new provider`);
//       // Connect to the wallet
//       await newProvider.connect();
//       alert(newProvider.connected);
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

//   const handleConnect = () => {
//     connectMobileWallet();
//   };
//   const handleConnectDesktop = () => {
//     connectDesktopWallet();
//   };
//   const handleFetchBalance = async () => {
//     if (!web3 && !account) {
//       console.error("Wallet not connected.");
//       return;
//     }

//     const fetchedBalance = await fetchBalance(web3, account);
//     setBalance(fetchedBalance);
//   };
//   const handleFetchBalanceDesktop = async () => {
//     if (!web3Instance || !accountDesktop) {
//       console.error("Wallet not connected.");
//       return;
//     }

//     const fetchedBalance = await fetchBalance(web3Instance, accountDesktop);
//     setBalance(fetchedBalance);
//   };

//   const sendBUSD = async (
//     recipientWalletAddress: string,
//     amount: string | number,
//     senderWalletAddress: string | null,
//     web3: Web3 | null,
//     provider: EthereumProvider | null
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

//       await provider.request({ method: "eth_requestAccounts" });

//       const amountInWei = web3.utils.toWei(amount.toString(), "ether");

//       const busdContractAddress = "0x8516Fc284AEEaa0374E66037BD2309349FF728eA";
//       const busdContractInstance = new web3.eth.Contract(
//         busdABI,
//         busdContractAddress
//       );

//       const txData = busdContractInstance.methods
//         .transfer(recipientWalletAddress, amountInWei)
//         .encodeABI();

//       const transactionParameters = {
//         to: busdContractAddress,
//         from: senderWalletAddress,
//         data: txData,
//         gas: web3.utils.toHex(500000),
//       };

//       const metamaskDeepLink = `https://metamask.app.link/dapp/${window.location.origin}`;

//       window.location.href = metamaskDeepLink;

//       const tx = (await provider.request({
//         method: "eth_sendTransaction",
//         params: [transactionParameters],
//       })) as string;

//       console.log("Transaction Successful:", tx);
//       return tx || null;
//     } catch (error) {
//       console.error("Transaction Failed:", error);
//       alert(`Error in sendBUSD: ${error}`);
//       return null;
//     }
//   };

//   const handleSendTokens = async (e: React.FormEvent) => {
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

//       if (!provider.request) {
//         alert("Provider request method not available.");
//         setLoading(false);
//         return;
//       }

//       // 🔹 Unlock MetaMask and request user accounts before sending transaction
//       const accounts: string[] = await provider.request({
//         method: "eth_requestAccounts",
//       });
//       if (!accounts) {
//         alert("MetaMask wallet not unlocked! Please unlock and try again.");
//         setLoading(false);
//         return;
//       }

//       // Use first connected account
//       const userAccount = accounts[0];

//       // Send BUSD tokens
//       const txHash = await sendBUSD(
//         recipientAddress,
//         tokenAmount,
//         userAccount,
//         web3,
//         provider
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
//       console.error("Transaction Error:", error);
//       alert(`Transaction failed! Error: ${error}`);
//     } finally {
//       setLoading(false);
//     }
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
//             onClick={handleConnect}
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
//             onClick={handleFetchBalance}
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
//             placeholder="Please enter token amount to send"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
//             value={tokenAmount}
//             onChange={(e) => setTokenAmount(e.target.value)}
//           />
//         </div>
//         {/* {/ Send Button /} */}
//         <div className="w-full mx-auto">
//           <button
//             disabled={loading}
//             onClick={handleSendTokens}
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

// // import React, { useEffect, useState } from "react";
// // import sendBUSD from "app/utils/busdTokenTransferUtils/TokenTransferUtility";
// // import useWalletConnect from "app/utils/DesktopMobileWalletConnect";
// // import useMobileWalletHook from "app/utils/useMobileWalletHook";
// // import busdABI from "../../../../../utils/busdContractABI.json";
// // import useDesktopWalletConnect from "app/utils/useDesktopWalletHook";

// // // import connectWalletAndFetchBalance from "app/utils/connectWalletAndFetchBalanceUtility";

// // const Form: React.FC = () => {
// //   // const { account, web3, connectWallet } = useWalletConnect();
// //   const { account, web3, provider, connectMobileWallet } =
// //     useMobileWalletHook();
// //   const { accountDesktop, web3Desktop, connectDesktopWallet } =
// //     useDesktopWalletConnect();
// //   const [walletConnect, setWalletConnect] = useState<boolean>(false);
// //   const [userWalletBalance, setUserWalletBalance] = useState<string | null>(
// //     null
// //   );

// //   const handleMobileConnectWallet = async () => {
// //     await connectMobileWallet();
// //     setWalletConnect(true);
// //   };
// //   const handleGetBalance = async () => {
// //     if (!account || !web3) {
// //       console.log("Failed to connect wallet.");
// //       return;
// //     }

// //     try {
// //       const balanceWei = await web3.eth.getBalance(account);
// //       const balanceEth = web3.utils.fromWei(balanceWei, "ether");
// //       setUserWalletBalance(balanceEth); // 🔹 بیلنس کو سٹیٹ میں سیٹ کریں
// //     } catch (error) {
// //       console.error("Error fetching balance:", error);
// //     }
// //   };

// //   const handleDesktopWallet = async () => {
// //     await connectDesktopWallet();
// //     setWalletConnect(true);
// //   };

// //   const handleGetBalance2 = async () => {
// //     if (!accountDesktop || !web3Desktop) {
// //       console.log("Failed to connect wallet.");
// //       return;
// //     }

// //     try {
// //       const balanceWei = await web3Desktop.eth.getBalance(accountDesktop);
// //       const balanceEth = web3Desktop.utils.fromWei(balanceWei, "ether");
// //       setUserWalletBalance(balanceEth); // 🔹 بیلنس کو سٹیٹ میں سیٹ کریں
// //     } catch (error) {
// //       console.error("Error fetching balance:", error);
// //     }
// //   };

// //   const [userAccount, setUserAccount] = useState<string | null>(null);
// //   const [recipientAddress, setRecipientAddress] = useState("");
// //   const [tokenAmount, setTokenAmount] = useState("");
// //   const [transactionHash, setTransactionHash] = useState<string | null>(null);

// //   // const handleConnectWallet = async () => {
// //   //   const { balance, account } = await connectWalletAndFetchBalance();
// //   //   if (balance) {
// //   //     setUserWalletBalance(balance);
// //   //     setUserAccount(account);
// //   //   }
// //   // };
// //   // const handleSendTokens = async (e: React.FormEvent) => {
// //   //   e.preventDefault();

// //   //   if (!recipientAddress.trim() || !tokenAmount.trim()) {
// //   //     alert("Please enter recipient's address and token amount.");
// //   //     return;
// //   //   }

// //   //   try {
// //   //     const txHash = await sendBUSD(recipientAddress, tokenAmount);
// //   //     setTransactionHash(txHash);
// //   //     alert(`Transaction successful! Tx Hash: ${txHash}`);
// //   //   } catch (error) {
// //   //     alert("Transaction failed! Check console for details.");
// //   //     console.error("Error:", error);
// //   //   }
// //   // };
// //   const [loading, setLoading] = useState(false); // Loader state

// //   const handleSendTokens = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (!recipientAddress.trim() || !tokenAmount.trim()) {
// //       alert("Please enter recipient's address and token amount.");
// //       return;
// //     }

// //     try {
// //       if (!account || !web3) {
// //         throw new Error(
// //           "Wallet not connected! Please connect your wallet first."
// //         );
// //       } else {
// //         alert(provider?.connected);
// //       }

// //       setLoading(true); // Start loader

// //       const busdContractAddress = "0x8516Fc284AEEaa0374E66037BD2309349FF728eA";
// //       const busdContract = new web3.eth.Contract(busdABI, busdContractAddress);

// //       const tx = await busdContract.methods
// //         .transfer(recipientAddress, web3.utils.toWei(tokenAmount, "ether"))
// //         .send({ from: account });

// //       setTransactionHash(tx.transactionHash);
// //       alert(`Transaction successful! Tx Hash: ${tx.transactionHash}`);
// //     } catch (error) {
// //       alert(error);
// //       console.error("Error:", error);
// //     } finally {
// //       setLoading(false); // Stop loader after success or error
// //     }
// //   };

// //   const handleSendTokens2 = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (!recipientAddress.trim() || !tokenAmount.trim()) {
// //       alert("Please enter recipient's address and token amount.");
// //       return;
// //     }

// //     try {
// //       if (!accountDesktop || !web3Desktop) {
// //         throw new Error(
// //           "Wallet not connected! Please connect your wallet first."
// //         );
// //       }
// //       const busdContractAddress = "0x8516Fc284AEEaa0374E66037BD2309349FF728eA";

// //       const busdContract = new web3Desktop.eth.Contract(
// //         busdABI,
// //         busdContractAddress
// //       );

// //       const tx = await busdContract.methods
// //         .transfer(
// //           recipientAddress,
// //           web3Desktop.utils.toWei(tokenAmount, "ether")
// //         )
// //         .send({ from: accountDesktop });

// //       setTransactionHash(tx.transactionHash);
// //       alert(`Transaction successful! Tx Hash: ${tx.transactionHash}`);
// //     } catch (error) {
// //       alert("Transaction failed! Check console for details.");
// //       console.error("Error:", error);
// //     }
// //   };
// //   return (
// //     <>
// //       <div>
// //         <div>
// //           <label className="block text-sm font-roboto font-extrabold text-gray-600">
// //             Connected Account Wallet Balance
// //           </label>
// //           <input
// //             type="text"
// //             value={userWalletBalance ?? "Balance not available"}
// //             readOnly
// //             className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
// //           />

// //           <div className="w-full py-2 px-20">
// //             <button
// //               className="w-[300px] h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
// //               onClick={handleMobileConnectWallet}
// //             >
// //               {walletConnect ? "Wallet Connected" : "Connect Wallet"}
// //             </button>
// //             {/* <button
// //               className="w-[300px] h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
// //               onClick={handleDesktopWallet}
// //             >
// //               {walletConnect ? "Wallet Connected" : "Connect Wallet"}
// //             </button> */}
// //           </div>
// //           <div className="w-full py-2 px-20">
// //             <button
// //               className="w-[300px] h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
// //               onClick={handleGetBalance}
// //             >
// //               GetBalance{" "}
// //             </button>
// //             {/* <button
// //               className="w-[300px] h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
// //               onClick={handleGetBalance2}
// //             >
// //               GetBalance{" "}
// //             </button> */}
// //           </div>
// //         </div>

// //         <form>
// //           <div className="my-2">
// //             <label className="block text-sm font-roboto font-extrabold text-gray-600">
// //               Tokens Address of Recipient
// //             </label>
// //             <input
// //               type="text"
// //               placeholder="Please enter address of recipient"
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
// //               value={recipientAddress}
// //               onChange={(e) => setRecipientAddress(e.target.value)}
// //             />
// //           </div>

// //           <div className="my-2">
// //             <label className="block text-sm font-roboto font-extrabold text-gray-600">
// //               Tokens to Send
// //             </label>
// //             <input
// //               type="text"
// //               placeholder="Please enter token amount to send"
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
// //               value={tokenAmount}
// //               onChange={(e) => setTokenAmount(e.target.value)}
// //             />
// //           </div>

// //           <div className="w-[300px] mx-auto">
// //             <button
// //               disabled={loading}
// //               onClick={handleSendTokens}
// //               className="w-full h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
// //             >
// //               {loading ? "Processing..." : "Send Tokens"}
// //             </button>
// //             {/* <button
// //               onClick={handleSendTokens2}
// //               className="w-full h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
// //             >
// //               Send Tokens
// //             </button> */}
// //           </div>

// //           {/* 🔥 اگر ٹرانزیکشن ہیش دستیاب ہو تو دکھائیں */}
// //           {transactionHash && (
// //             <div className="mt-4 p-2 border border-gray-300 rounded bg-gray-50 text-gray-700">
// //               <p className="text-sm font-bold">Transaction Hash:</p>
// //               <p className="break-all">{transactionHash}</p>
// //             </div>
// //           )}
// //         </form>
// //       </div>
// //       <div>{transactionHash}</div>
// //     </>
// //   );
// // };

// // export default Form;
// // {
// //   /* <Link
// //             href={
// //               transactionHash
// //                 ? `https://testnet.bscscan.com/tx/${transactionHash}`
// //                 : "#"
// //             }
// //             target={transactionHash ? "_blank" : undefined}
// //             rel="noopener noreferrer"
// //             className={`inline-block px-4 py-2 rounded-md text-white font-bold transition ${
// //               isDisabled
// //                 ? "bg-gray-400 cursor-not-allowed"
// //                 : "bg-blue-500 hover:bg-blue-700"
// //             }`}
// //             onClick={(e) => {
// //               if (isDisabled) e.preventDefault(); // Prevent navigation when disabled
// //             }}
// //           >
// //             View Transaction
// //           </Link> */
// // }
