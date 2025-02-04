import { createContext, useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { Address } from "viem";
import { UserInfo } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useUserDirectRefNo, useUserInfo } from "@/hooks/use-user";

interface UserContextType {
  userInfo: UserInfo | undefined;
  userDirectRefNo: bigint | undefined;
  isLoading: boolean;
  error: Error | null;
  invalidate: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { address, isConnected } = useAccount();
  const {
    data: userInfo,
    isLoading,
    error,
    queryKey,
  } = useUserInfo(address as Address);

  const { data: userDirectRefNo, isLoading: isLoadingDirectRefNo, isError: isErrorDirectRefNo } = useUserDirectRefNo(userInfo?.id || BigInt(0));

  useEffect(() => {
    // console.log({ userInfo, isLoading, isConnected });
    if (!isLoading && isConnected) {
      // @ts-ignore
      if (!userInfo || Number(userInfo.id) === 0) {
      } else {
        router.push("/user/dashboard");
      }
    }
  }, [userInfo, isLoading, isConnected, router]);

  return (
    // @ts-ignore
    <UserContext.Provider
      value={{
        userInfo,
        userDirectRefNo,
        isLoading,
        error,
        invalidate: () => queryClient.invalidateQueries({ queryKey }),
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
