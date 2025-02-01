"use client";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/user";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { userInfo, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading) {
      if (!isConnected || !userInfo || Number(userInfo.id) === 0) {
        router.push("/");
      }
    }
  }, [isConnected, userInfo, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
