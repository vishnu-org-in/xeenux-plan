"use client";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/user";
import { Loader } from "../ui/loader";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { userInfo, isLoadingUserInfo, isPendingUserInfo } = useUser();

  useEffect(() => {
    if (!isLoadingUserInfo && !isPendingUserInfo) {
      if (!isConnected || !userInfo || Number(userInfo.id) === 0) {
        router.push("/");
      }
    }
  }, [isConnected, userInfo, isLoadingUserInfo, isPendingUserInfo, router]);

  if (isLoadingUserInfo) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}
