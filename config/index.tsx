import { cookieStorage, createStorage } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { bsc, defineChain, bscTestnet, AppKitNetwork } from "@reown/appkit/networks";

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// defineChain
const localNetwork = defineChain({
  id: parseInt(process.env.NEXT_PUBLIC_LOCAL_CHAIN_ID || "31337", 10),
  name: process.env.NEXT_PUBLIC_LOCAL_CHAIN_NAME || "Local Chain",
  nativeCurrency: {
    name: process.env.NEXT_PUBLIC_LOCAL_NATIVE_CURRENCY_NAME || "ETH",
    symbol: process.env.NEXT_PUBLIC_LOCAL_NATIVE_CURRENCY_SYMBOL || "ETH",
    decimals: 18,
  },
  caipNetworkId: `eip155:${parseInt(
    process.env.NEXT_PUBLIC_LOCAL_CHAIN_ID || "31337",
    10
  )}`,
  chainNamespace: "eip155",
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_LOCAL_RPC_URL || "http://localhost:8545"],
      webSocket: [
        process.env.NEXT_PUBLIC_LOCAL_WS_RPC_URL || "ws://localhost:8545",
      ],
    },
  },
  testnet: true,
});

// const createLocalNetwork = (config: Chain) => {
//   return defineChain({
//     id: config.id,
//     caipNetworkId: `eip155:${config.id}`,
//     chainNamespace: 'eip155',
//     name: 'Local Network',
//     nativeCurrency: {
//       decimals: 18,
//       name: 'Ether',
//       symbol: 'ETH',
//     },
//     rpcUrls: {
//       default: {
//         http: [config.rpcUrl],
//         webSocket: [config.wsRpcUrl],
//       },
//     },
//     blockExplorers: {
//       default: {
//         name: 'Local Explorer',
//         url: config.explorerUrl,
//       },
//     },
//     contracts: {
//       // Add your local contracts here
//     },
//   });
// };

// const networks = {
//   mainnet: bsc,
//   testnet: bscTestnet,
//   local: getLocalNetworkConfig(),
// };

// Get the appropriate network based on environment
export const getSupportedNetworks = ():[AppKitNetwork, ...AppKitNetwork[]] => {
  const networkEnv = process.env.NEXT_PUBLIC_NETWORK_ENV || "local";
  console.log({ networkEnv });
  switch (networkEnv) {
    case "mainnet":
      return [bsc];
    case "testnet":
      return [bscTestnet];
    case "local":
      return [localNetwork];
    default:
      return [localNetwork];
  }
};

//Set up the Wagmi Adapter (Config)
export const networks = getSupportedNetworks();
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks: networks,
});

export const config = wagmiAdapter.wagmiConfig;
