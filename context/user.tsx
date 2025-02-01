import { createContext, useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { Address } from "viem";
import { useUserInfo } from "@/hooks/use-contract";
import { UserInfo } from "@/types";

interface UserContextType {
  userInfo: UserInfo | undefined;
  isLoading: boolean;
  error: Error | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { address, isConnected } = useAccount();
  const { data: userInfo, isLoading, error } = useUserInfo(address as Address);

  useEffect(() => {
    console.log({ userInfo, isLoading, isConnected });
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
    <UserContext.Provider value={{ userInfo, isLoading, error }}>
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
