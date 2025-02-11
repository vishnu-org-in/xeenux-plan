import { Address } from "viem";
import { useReadContract, useWriteContract } from "wagmi";
import { xeenuxContractAddress } from "./values";
import { xeenuxContractAbi } from "@/lib/contract/config";
import { useAppKitAccount } from "@reown/appkit/react";
import { useState } from "react";
import { WalletNotConnectedException } from "@/lib/exceptions";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "@/config";

