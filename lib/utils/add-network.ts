// utils/addNetwork.ts

import { notification } from "@/utils/scaffold-eth";
import { opBNB } from "viem/chains";

export const addOpBNBNetwork = async (): Promise<void> => {
    if (typeof window.ethereum === "undefined") {
        notification.error(
            "Web3 wallet not found. Please install MetaMask or another Web3 wallet.",
        );
        return;
    }

    try {
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: "0xcc",
                    chainName: "opBNB Mainnet",
                    nativeCurrency: {
                        name: "OPBNB",
                        symbol: "BNB",
                        decimals: 18,
                    },
                    rpcUrls: ["https://opbnb-mainnet-rpc.bnbchain.org"],
                    blockExplorerUrls: ["https://opbnb.bscscan.com"],
                },
            ],
        });
        notification.success("opBNB Mainnet added successfully!");
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            notification.error("Error: " + error.message);
        }
    }
};

export const addSupportedNetwork = async (walletClient: any): Promise<void> => {
    try {
        if (!walletClient)
            throw new Error(
                "Web3 wallet not found. Please install MetaMask or another Web3 wallet.",
            );
        await walletClient.addChain({
            chain: opBNB,
        });
        notification.success("opBNB Mainnet added successfully!");
    } catch (error: any) {
        notification.error(
            "Error: " + error?.message || error || "An error occurred",
        );
    }
};
