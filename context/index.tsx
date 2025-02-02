"use client";

import { wagmiAdapter, projectId, networks } from "@/config";
import { QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";
import { getQueryClient } from "@/lib/utils/query-client";
import { UserProvider } from "./user";
import { tokens } from "@/lib/contract/config";
import { ContractProvider } from "./contract";

// Set up queryClient
const queryClient = getQueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
  name: "XeeNux",
  description: "Decentralized Investment Platform",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://xeenux.com",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};
// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: networks,
  // defaultNetwork: bsc,
  metadata: metadata,
  features: {
    socials: false,
    email: false,
    walletFeaturesOrder: [],
  },
  tokens: tokens,
});

function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig as Config,
    cookies
  );

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig as Config}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>
        <ContractProvider>
          <UserProvider>{children}</UserProvider>
        </ContractProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default ContextProvider;
