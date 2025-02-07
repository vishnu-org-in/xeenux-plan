"use client";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/user";
import { Loader } from "../ui/loader";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { userInfo, isLoadingUserInfo } = useUser();

  useEffect(() => {
    if (!isLoadingUserInfo) {
      if (!isConnected || !userInfo || Number(userInfo.id) === 0) {
        router.push("/");
      }
    }
  }, [isConnected, userInfo, isLoadingUserInfo, router]);

  if (isLoadingUserInfo) {
    return <div>
      <Loader />
    </div>;
  }

  return <>{children}</>;
}
