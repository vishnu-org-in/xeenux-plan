// 'use client'

// import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
// import { Web3Modal } from '@web3modal/react'
// import { configureChains, createConfig, WagmiConfig } from 'wagmi'
// import { bsc, bscTestnet } from 'wagmi/chains'

// const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''

// const chains = [bsc, bscTestnet]
// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, chains }),
//   publicClient
// })

// const ethereumClient = new EthereumClient(wagmiConfig, chains)

// export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <WagmiConfig config={wagmiConfig}>
//         {children}
//       </WagmiConfig>
//       <Web3Modal
//         projectId={projectId}
//         ethereumClient={ethereumClient}
//         themeMode="dark"
//         themeVariables={{
//           '--w3m-font-family': 'Inter, sans-serif',
//           '--w3m-accent-color': '#8B5CF6',
//           '--w3m-background-color': '#1a0329',
//           '--w3m-overlay-background-color': 'rgba(26, 3, 41, 0.8)'
//         }}
//       />
//     </>
//   )
// }