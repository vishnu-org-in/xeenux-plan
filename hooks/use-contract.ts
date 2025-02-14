import { useReadContract, useWriteContract } from 'wagmi';
import { useEffect, useState } from 'react';
import { xeenuxContractAbi } from '@/lib/contract/config';
import { Address, erc20Abi } from 'viem';
import { useAppKitAccount } from '@reown/appkit/react';
import { WalletNotConnectedException } from '@/lib/exceptions';
import { getSupportedNetworks } from '@/config';
import { usdtAddress, xeenuxContractAddress, xeenuxTokenAddress } from './values';


// Hook for 'getUserId' function
export function useUserId(userAddress: Address) {
    return useReadContract({
        address: xeenuxContractAddress,
        abi: xeenuxContractAbi,
        functionName: 'id',
        args: [userAddress],
    });
}

// Hook for 'getUserInfo' function
// export function useUserInfo(_id: BigInt) {
//     return useReadContract({
//         address: xeenuxContractAddress,
//         abi: contractsConfig.contract.abi,
//         functionName: 'getUserInfo',
//         args: [_id],
//     });
// }

// Hook for 'getUserInfo' function
export function useTokenInfo() {
    return useReadContract({
        address: xeenuxContractAddress,
        abi: xeenuxContractAbi,
        functionName: 'getTokenInfo',
    });
}
export function useSwapPrice() {
    return useReadContract({
        address: xeenuxContractAddress,
        abi: xeenuxContractAbi,
        functionName: 'swapPrice',
    });
}
export function useTokensToBeBurnt() {
    return useReadContract({
        address: xeenuxContractAddress,
        abi: xeenuxContractAbi,
        functionName: 'xeenuxToBeBurned',
    });
}

export function useXeeBalance() {
    const { address } = useAppKitAccount();
    return useReadContract({
        address: xeenuxTokenAddress,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [address as Address],
    });
}
export function useUsdtBalance() {
    const { address } = useAppKitAccount();
    return useReadContract({
        address: usdtAddress,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [address as Address],
    });
}

export function useNextPrice() {
    return useReadContract({
        address: xeenuxContractAddress,
        abi: xeenuxContractAbi,
        functionName: 'nextPrice',
    });
}

export function useLastBurnDate() {
    return useReadContract({
        address: xeenuxContractAddress,
        abi: xeenuxContractAbi,
        functionName: 'lastBurnTimestamp',
    });
}
