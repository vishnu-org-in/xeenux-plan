// import { cookieStorage, createStorage } from "@wagmi/core";
// import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
// import {
//   bsc,
//   bscTestnet,
//   hardhat,
// } from "@reown/appkit/networks";

// // Get projectId from https://cloud.reown.com
// export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

// if (!projectId) {
//   throw new Error("Project ID is not defined");
// }

// // Get the appropriate network based on environment
// export const getSupportedNetworks = () => {
//   const networkEnv = process.env.NEXT_PUBLIC_NETWORK_ENV || "local";
//   console.log({ networkEnv });
//   switch (networkEnv) {
//     case "mainnet":
//       return [bsc] as const;
//     case "testnet":
//       return [bscTestnet] as const;
//     case "local":
//       return [hardhat] as const;
//     default:
//       return [hardhat] as const;
//   }
// };

// //Set up the Wagmi Adapter (Config)
// export const networks = getSupportedNetworks();
// export const wagmiAdapter = new WagmiAdapter({
//   storage: createStorage({
//     storage: cookieStorage,
//   }),
//   ssr: true,
//   projectId,
//   networks: networks,
// });

// export const config = wagmiAdapter.wagmiConfig;
