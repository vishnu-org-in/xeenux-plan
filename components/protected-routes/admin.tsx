"use client";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/user";
import { Loader } from "../ui/loader";
import { useAppKitAccount } from "@reown/appkit/react";
import { useIsAdmin } from "@/hooks/use-admin";
import { Address } from "viem";

export function AdminRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isConnected, isConnecting, isDisconnected } = useAccount();
  const { address } = useAppKitAccount();
  const {
    data: isAdmin,
    isLoading: isLoadingAdmin,
    isPending,
  } = useIsAdmin(address as Address);

  useEffect(() => {
    console.log({
      isConnected,
      isAdmin,
      isLoadingAdmin,
      isConnecting,
      isPending,
      isDisconnected,
    });
    if (!isLoadingAdmin && !isConnecting && !isPending) {
      if (!isConnected || !isAdmin || isDisconnected) {
        console.log("redirecting", { isConnected, isAdmin });
        router.push("/");
      }
    }
  }, [
    isConnected,
    isAdmin,
    isLoadingAdmin,
    isConnecting,
    isPending,
    isDisconnected,
  ]);

  if (isLoadingAdmin || isConnecting) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}
