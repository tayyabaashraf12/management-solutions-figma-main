import { http, createConfig } from "wagmi";
import { mainnet, sepolia, bscTestnet } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;
export const config = createConfig({
  chains: [mainnet, sepolia, bscTestnet],
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [bscTestnet.id]: http(),
  },
});
