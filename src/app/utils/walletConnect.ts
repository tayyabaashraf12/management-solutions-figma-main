import Web3 from "web3";
import EthereumProvider from "@walletconnect/ethereum-provider";

export const connectWallet = async (
  setWeb3: (web3: Web3 | null) => void,
  setAccount: (account: string | null) => void,
  setProvider: (provider: EthereumProvider | null) => void
) => {
  try {
    // Check if window.ethereum is available (Desktop connection)
    if (typeof window !== "undefined" && window.ethereum) {
      const web3Instance = new Web3(window.ethereum);

      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts: string[] = await web3Instance.eth.getAccounts();

      if (accounts.length > 0) {
        setWeb3(web3Instance);
        setAccount(accounts[0]);

        alert(`Connected Account on Desktop ${accounts[0]}`);
        console.log("Connected to MetaMask browser extension");
      } else {
        console.error("No accounts found.");
      }
    } else {
      // If window.ethereum is not available, initialize WalletConnect (Mobile connection)
      const newProvider = await EthereumProvider.init({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
        chains: [97], // BSC Testnet
        rpcMap: { 97: "https://data-seed-prebsc-1-s1.binance.org:8545/" },
        showQrModal: true,
      });

      if (!newProvider) {
        alert("Failed to initialize WalletConnect provider.");
        return;
      }

      await newProvider.connect();

      setProvider(newProvider);

      if (!newProvider.connected) {
        alert("Provider not connected.");
        return;
      } else {
        alert("Wallet connected successfully!");
      }

      const accounts: string[] = await newProvider.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) {
        setAccount(accounts[0]);

        console.log("Connected to WalletConnect on mobile");
        return;
      } else {
        alert("No accounts found.");
        return;
      }
    }
  } catch (error) {
    console.error("Wallet connection failed:", error);
    alert(`Error connecting wallet: ${error}`);
    return;
  }
};
