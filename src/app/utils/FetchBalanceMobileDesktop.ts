import Web3 from "web3";

const fetchBalance = async (
  web3: Web3 | null,
  account: string | null
): Promise<string | null> => {
  try {
    if (!web3) {
      console.error("Web3 instance  not initialized.");
      return null;
    }
    if (!account) {
      console.error(" connected account not found.");
      return null;
    }

    const balanceWei = await web3.eth.getBalance(account);
    return web3.utils.fromWei(balanceWei, "ether");
  } catch (error) {
    console.error("Error fetching balance:", error);
    return null;
  }
};

export default fetchBalance;
