import Web3 from "web3";

const fetchBalance = async (
  web3: Web3 | null,
  provider: any,
  account: string | null,
  setBalance: (balance: string) => void
) => {
  try {
    let balanceWei;

    if (provider) {
      balanceWei = await provider.request({
        method: "eth_getBalance",
        params: [account, "latest"],
      });
    }

    if (web3 && account) {
      balanceWei = await web3.eth.getBalance(account);
    }

    const balanceEth = Web3.utils.fromWei(balanceWei, "ether");
    setBalance(balanceEth);
    alert(`Balance is ${balanceWei}`);
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
};

export default fetchBalance;
