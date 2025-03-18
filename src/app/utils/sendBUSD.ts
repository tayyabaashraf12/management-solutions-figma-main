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
    if (!web3) {
      alert("Web3 instance is not available.");
      return null;
    }

    if (!senderWalletAddress) {
      alert("Sender wallet address not available.");
      return null;
    }

    const amountInWei = web3.utils.toWei(amount.toString(), "ether");

    const busdContractAddress = "0x8516Fc284AEEaa0374E66037BD2309349FF728eA";
    const busdContractInstance = new web3.eth.Contract(
      abi,
      busdContractAddress
    );

    let tx;

    if (provider) {
      // Use provider for mobile transactions
      //   const accounts = await provider.request({ method: "eth_accounts" });
      tx = await busdContractInstance.methods
        .transfer(recipientWalletAddress, amountInWei)
        .send({ from: senderWalletAddress });
    } else {
      // Use web3 instance for desktop transactions
      //   const accounts = await web3.eth.getAccounts();
      tx = await busdContractInstance.methods
        .transfer(recipientWalletAddress, amountInWei)
        .send({ from: senderWalletAddress });
    }

    if (tx.transactionHash) {
      alert(`Transaction Successful: ${tx.transactionHash}`);
    } else {
      alert(" Transaction hash not generated please confirm transaction first");
    }

    return tx.transactionHash;
  } catch (error) {
    console.error("Transaction Failed:", error);
    alert(`Transaction Error: ${error}`);
    return null;
  }
};

export default sendBUSD;
