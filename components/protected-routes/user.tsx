"use client";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/user";
import { Loader } from "../ui/loader";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isConnected, isConnecting, isDisconnected } = useAccount();
  const { userInfo, isLoadingUserInfo, isPendingUserInfo } = useUser();

  useEffect(() => {
    if (!isLoadingUserInfo && !isPendingUserInfo && !isConnecting) {
      if (
        !isConnected ||
        !userInfo ||
        Number(userInfo.id) === 0 ||
        isDisconnected
      ) {
        router.push("/");
      }
    }
  }, [
    isConnected,
    userInfo,
    isLoadingUserInfo,
    isPendingUserInfo,
    isConnecting,
    isDisconnected,
  ]);

  if (isLoadingUserInfo) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}
