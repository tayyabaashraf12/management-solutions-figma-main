// import busdContractInstance from "../busdContractHelper";
// import connectWallet, { web3 } from "../connectWallet/connectWallet";

// const sendBUSD = async (
//   recipientWalletAddress: string,
//   amount: string | number
// ) => {
//   const senderWalletAddress = await connectWallet();
//   console.log("Sender Wallet Address:", senderWalletAddress);

//   // Convert amount to the correct decimals (usually 18 for BUSD)
//   const amountInWei = web3?.utils.toWei(amount.toString(), "ether");

//   try {
//     const tx = await busdContractInstance.methods
//       .transfer(recipientWalletAddress, amountInWei)
//       .send({
//         from: senderWalletAddress as string,
//       });

//     console.log("Transaction Successful:", tx);
//     /* Return transaction hash*/
//     return tx.transactionHash;
//   } catch (error) {
//     console.error("Transaction Failed:", error);
//   }
// };

// export default sendBUSD;

// import busdABI from "../busdContractABI.json";
// import useWalletConnect from "../DesktopMobileWalletConnect";
// import useMobileWalletHook from "../useMobileWalletHook";

// export const sendBUSD = async (recipient: string, amount: string) => {
//   try {
//     const { account, web3 } = useMobileWalletHook();

//     if (!account || !web3) {
//       throw new Error(
//         "Wallet not connected! Please connect your wallet first."
//       );
//     }
//     const busdContractAddress = "0x8516Fc284AEEaa0374E66037BD2309349FF728eA";

//     const busdContract = new web3.eth.Contract(busdABI, busdContractAddress);

//     const tx = await busdContract.methods
//       .transfer(recipient, web3.utils.toWei(amount, "ether"))
//       .send({ from: account });

//     return tx.transactionHash;
//   } catch (error) {
//     console.error("Transaction Error:", error);
//     throw error;
//   }
// };

// export default sendBUSD;

// import Web3 from "web3";
// import busdABI from "../busdContractABI.json";
// import Provider from "@walletconnect/ethereum-provider";
// const sendBUSD = async (
//   recipientWalletAddress: string,
//   amount: string | number,
//   senderWalletAddress: string | null,
//   web3: Web3 | null,
//   provider: Provider | null
// ): Promise<string | null> => {
//   try {
//     if (!provider) {
//       alert("provider not available in sendBUSD");
//     } else {
//       alert("provider not found");
//       return null;
//     }
//     if (!web3) {
//       alert("web3 in sendBUSD not avaialable");
//       console.error("Web3 instance  not found!");
//       return null;
//     }
//     if (!senderWalletAddress) {
//       alert("senderWalletAddress in sendBUSD not avaialable");
//       console.error(" sender address not found!");
//       return null;
//     } else {
//       alert(`Sender Wallet Address ${senderWalletAddress}`);
//     }

//     // Convert amount to the correct decimals (usually 18 for BUSD)
//     const amountInWei = web3.utils.toWei(amount.toString(), "ether");

//     const busdContractAddress = "0x8516Fc284AEEaa0374E66037BD2309349FF728eA";
//     const busdContractInstance = new web3.eth.Contract(
//       busdABI,
//       busdContractAddress
//     );

//     const tx = await busdContractInstance.methods
//       .transfer(recipientWalletAddress, amountInWei)
//       .send({ from: senderWalletAddress });

//     console.log("Transaction Successful:", tx);
//     if (tx.transactionHash) {
//       alert(`transaction Hash ${tx.transactionHash}`);
//     } else {
//       alert(`error while generating transaction hash `);
//     }
//     return tx.transactionHash;
//   } catch (error) {
//     alert(`error in sendBUSD ${error}`);
//     console.error("Transaction Failed:", error);
//     return null;
//   }
// };

// export default sendBUSD;

import Web3 from "web3";
import { abi } from "../busdABI";
import EthereumProvider from "@walletconnect/ethereum-provider";
const sendBUSD = async (
  recipientWalletAddress: string,
  amount: string | number,
  senderWalletAddress: string | null,
  web3: Web3 | null,
  provider: EthereumProvider | null
): Promise<string | null> => {
  try {
    if (!provider) {
      alert("Provider not available in sendBUSD");
      return null;
    }

    if (!web3) {
      alert("Web3 instance not available in sendBUSD");
      console.error("Web3 instance not found!");
      return null;
    }

    if (!senderWalletAddress) {
      alert("Sender wallet address not available in sendBUSD");
      console.error("Sender address not found!");
      return null;
    }

    console.log(`Sender Wallet Address: ${senderWalletAddress}`);

    await provider.request({ method: "eth_requestAccounts" });

    const amountInWei = web3.utils.toWei(amount.toString(), "ether");

    const busdContractAddress = "0x8516Fc284AEEaa0374E66037BD2309349FF728eA";
    const busdContractInstance = new web3.eth.Contract(
      abi,
      busdContractAddress
    );

    const txData = busdContractInstance.methods
      .transfer(recipientWalletAddress, amountInWei)
      .encodeABI();

    const transactionParameters = {
      to: busdContractAddress,
      from: senderWalletAddress,
      data: txData,
      gas: web3.utils.toHex(500000),
    };

    const metamaskDeepLink = `https://metamask.app.link/dapp/${window.location.origin}`;

    window.location.href = metamaskDeepLink;

    const tx = (await provider.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    })) as string;

    console.log("Transaction Successful:", tx);
    return tx || null;
  } catch (error) {
    console.error("Transaction Failed:", error);
    alert(`Error in sendBUSD: ${error}`);
    return null;
  }
};
export default sendBUSD;
