import { createContext, useContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { Address } from "viem";
import { UserInfo, UserPackageInfo, UserTeamStats } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import {
  useUserDirectRefNo,
  useUserInfo,
  useUserPackages,
  useUserTeamStats,
} from "@/hooks/use-user";

interface UserContextType {
  userInfo: UserInfo | undefined;
  userDirectRefNo: bigint | undefined;
  userPackages: readonly UserPackageInfo[] | undefined;
  userTeamStats: UserTeamStats | undefined;
  isLoadingUserInfo: boolean;
  userInfoError: Error | null;
  refreshUserData: (keys?: UserDataKeys[]) => void;
}
export enum UserDataKeys {
  USER_INFO = "USER_INFO",
  USER_DIRECT_REF_NO = "USER_DIRECT_REF_NO",
  USER_PACKAGES = "USER_PACKAGES",
  USER_TEAM_STATS = "USER_TEAM_STATS",
}
const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();

  const router = useRouter();
  const { address, isConnected } = useAccount();
  const {
    data: userInfo,
    isLoading: isLoadingUserInfo,
    error: userInfoError,
    queryKey: userInfoQueryKey,
  } = useUserInfo(address as Address);

  const {
    data: userDirectRefNo,
    isLoading: isLoadingDirectRefNo,
    isError: isErrorDirectRefNo,
    queryKey: userDirectRefNoQueryKey,
  } = useUserDirectRefNo(userInfo?.id || BigInt(0));
  const {
    data: userPackages,
    isLoading: isLoadingPackages,
    isError: isErrorPackages,
    queryKey: userPackagesQueryKey,
  } = useUserPackages(userInfo?.id || BigInt(0));
  const {
    data: userTeamStats,
    isLoading: isLoadingUserTeamStats,
    isError: isErrorUserTeamStats,
    queryKey: userTeamStatsQueryKey,
  } = useUserTeamStats(userInfo?.id || BigInt(0));
  useEffect(() => {
    // console.log({ userInfo, isLoading, isConnected });
    if (!isLoadingUserInfo && isConnected) {
      // @ts-ignore
      if (!userInfo || Number(userInfo.id) === 0) {
      } else {
        router.push("/user/dashboard");
      }
    }
  }, [userInfo, isLoadingUserInfo, isConnected, router]);

  const refreshUserData = (keys?: UserDataKeys[]) => {
    if (!keys || keys.length === 0) {
      // Refresh all data if no keys are specified
      queryClient.invalidateQueries({ queryKey: userInfoQueryKey });
      queryClient.invalidateQueries({ queryKey: userDirectRefNoQueryKey });
      queryClient.invalidateQueries({ queryKey: userPackagesQueryKey });
      queryClient.invalidateQueries({ queryKey: userTeamStatsQueryKey });
    } else {
      keys.forEach((key) => {
        switch (key) {
          case UserDataKeys.USER_INFO:
            queryClient.invalidateQueries({ queryKey: userInfoQueryKey });
            break;
          case UserDataKeys.USER_DIRECT_REF_NO:
            queryClient.invalidateQueries({
              queryKey: userDirectRefNoQueryKey,
            });
            break;
          case UserDataKeys.USER_PACKAGES:
            queryClient.invalidateQueries({ queryKey: userPackagesQueryKey });
            break;
          case UserDataKeys.USER_TEAM_STATS:
            queryClient.invalidateQueries({ queryKey: userTeamStatsQueryKey });
            break;
        }
      });
    }
  };
  return (
    // @ts-ignore
    <UserContext.Provider
      value={{
        userInfo,
        userDirectRefNo,
        userTeamStats,
        userPackages,
        isLoadingUserInfo,
        userInfoError,
        refreshUserData,
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
