import Web3 from "web3";
import { abi } from "../utils/busdABI"; // Import your BUSD contract ABI

const sendBUSD = async (
  recipientWalletAddress: string,
  amount: string | number,
  senderWalletAddress: string | null,
  web3: Web3 | null,
  provider: any
): Promise<string | null> => {
  try {
    if (!senderWalletAddress) {
      alert("Sender wallet address not available while BUSD Transfering ");
      return null;
    }

    const amountInWei = Web3.utils.toWei(amount.toString(), "ether");
    const busdContractAddress = "0x8516Fc284AEEaa0374E66037BD2309349FF728eA";

    let web3Instance: Web3;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let busdContractInstance: any;

    if (provider) {
      // Mobile: Initialize web3 with provider
      web3Instance = new Web3(provider);
      busdContractInstance = new web3Instance.eth.Contract(
        abi,
        busdContractAddress
      );
    } else if (web3) {
      // Desktop: Use existing web3 instance
      web3Instance = web3;
      busdContractInstance = new web3Instance.eth.Contract(
        abi,
        busdContractAddress
      );
    } else {
      alert("No provider or web3 instance available.");
      return null;
    }

    // Send transaction
    const tx = await busdContractInstance.methods
      .transfer(recipientWalletAddress, amountInWei)
      .send({ from: senderWalletAddress });

    if (tx.transactionHash) {
      alert(`Transaction Successful: ${tx.transactionHash}`);
    } else {
      alert("Transaction hash not generated.");
      return null;
    }

    return tx.transactionHash;
  } catch (error) {
    alert(`Transaction Error: ${error}`);

    return null;
  }
};

export default sendBUSD;

// import Web3 from "web3";
// import { abi } from "../utils/busdABI"; // Import your BUSD contract ABI

// const sendBUSD = async (
//   recipientWalletAddress: string,
//   amount: string | number,
//   senderWalletAddress: string | null,
//   web3: Web3 | null,
//   provider: any
// ): Promise<string | null> => {
//   try {
//     if (!web3) {
//       alert("Web3 instance is not available.");
//       return null;
//     }

//     if (!senderWalletAddress) {
//       alert("Sender wallet address not available.");
//       return null;
//     }

//     const amountInWei = web3.utils.toWei(amount.toString(), "ether");

//     const busdContractAddress = "0x8516Fc284AEEaa0374E66037BD2309349FF728eA";
//     const busdContractInstance = new web3.eth.Contract(
//       abi,
//       busdContractAddress
//     );

//     let tx;

//     if (provider) {
//       // Use provider for mobile transactions
//       //   const accounts = await provider.request({ method: "eth_accounts" });
//       tx = await busdContractInstance.methods
//         .transfer(recipientWalletAddress, amountInWei)
//         .send({ from: senderWalletAddress });
//     } else {
//       // Use web3 instance for desktop transactions
//       //   const accounts = await web3.eth.getAccounts();
//       tx = await busdContractInstance.methods
//         .transfer(recipientWalletAddress, amountInWei)
//         .send({ from: senderWalletAddress });
//     }

//     if (tx.transactionHash) {
//       alert(`Transaction Successful: ${tx.transactionHash}`);
//     } else {
//       alert(" Transaction hash not generated please confirm transaction first");
//     }

//     return tx.transactionHash;
//   } catch (error) {
//     console.error("Transaction Failed:", error);
//     alert(`Transaction Error: ${error}`);
//     return null;
//   }
// };

// export default sendBUSD;
