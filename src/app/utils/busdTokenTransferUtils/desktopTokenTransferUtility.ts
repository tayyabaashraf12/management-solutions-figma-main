import Web3 from "web3";
import busdABI from "../busdContractABI.json";
const sendBUSDDesktop = async (
  recipientWalletAddress: string,
  amount: string | number,
  senderWalletAddress: string | null,
  web3: Web3 | null
): Promise<string | null> => {
  try {
    if (!web3) {
      alert("web3 in sendBUSD not avaialable");
      console.error("Web3 instance  not found!");
      return null;
    }
    if (!senderWalletAddress) {
      alert("senderWalletAddress in sendBUSD not avaialable");
      console.error(" sender address not found!");
      return null;
    } else {
      alert(`Sender Wallet Address ${senderWalletAddress}`);
    }

    // Convert amount to the correct decimals (usually 18 for BUSD)
    const amountInWei = web3.utils.toWei(amount.toString(), "ether");

    const busdContractAddress = "0x8516Fc284AEEaa0374E66037BD2309349FF728eA";
    const busdContractInstance = new web3.eth.Contract(
      busdABI,
      busdContractAddress
    );

    const tx = await busdContractInstance.methods
      .transfer(recipientWalletAddress, amountInWei)
      .send({ from: senderWalletAddress });

    console.log("Transaction Successful:", tx);
    if (tx.transactionHash) {
      alert(`transaction Hash ${tx.transactionHash}`);
    } else {
      alert(`error while generating transaction hash `);
    }
    return tx.transactionHash;
  } catch (error) {
    alert(`error in sendBUSD ${error}`);
    console.error("Transaction Failed:", error);
    return null;
  }
};

export default sendBUSDDesktop;
