"use client";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/user";
import { Loader } from "@/components/ui/loader";
import { Header } from "@/components/header";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { userInfo, isLoadingUserInfo, isPendingUserInfo } = useUser();

  useEffect(() => {
    if (!isLoadingUserInfo && !isPendingUserInfo) {
      if (!isConnected || !userInfo || Number(userInfo.id) != 0) {
        router.push("/user/dashboard");
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

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      {children}
    </div>
  );
}
