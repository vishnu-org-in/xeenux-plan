"use client";

import { ArrowUpRight, DollarSign, Wallet } from "lucide-react";
import { ReferralLinks } from "./referral-links";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
import { CountdownTimer } from "./ui/countdown-timer";
import { useState } from "react";
import { useContractData } from "@/context/contract";
import { bigIntToString, shortenAddress } from "@/lib/utils";
import { useAppKitAccount } from "@reown/appkit/react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { SwapSection } from "./swap-section";
import { useUser } from "@/context/user";
interface HeroProps {}

export function Hero({}: HeroProps) {
  const { tokensToBeBurnt, tokenInfo, nextPrice } = useContractData();
  const { address } = useAppKitAccount();
  const { userInfo, userTotalEarnings, userVolumes, userAvailableWithdraw } = useUser();
  const [amount, setAmount] = useState<number>(0);

  const scrollToPackage = () => {
    const packageElement = document.querySelector("#select-package-section");
    if (packageElement) {
      packageElement.scrollIntoView({ behavior: "smooth" });
      const toggleDropdown = packageElement.querySelector("button");
      toggleDropdown?.click();
    }
  };
  const handleWithdraw = async () => {
    if (amount === 0) return;
    // Handle withdraw logic here
    console.log(`${amount} XEENUX to withdraw`);
  };

  return (
    <div className="flex flex-col mb-6 space-y-4 w-full overflow-x-auto">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4c51ff]/20 rounded-full blur-3xl" />
      <div className="flex md:flex-row flex-col justify-between md:items-center">
        <h1 className="text-2xl">Dashboard</h1>
        <div className="flex gap-2 py-2 md:px-4 rounded-full">
          <span className="text-gray-500 text-xs sm:text-sm">
            Time of Registration:{" "}
            <span className="text-white font-bold">
              {new Date(Number(userInfo?.registeredAt) * 1000).toLocaleString()}
            </span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex w-full flex-colx glass-card items-center gap-4 px-4 py-2 rounded-xl">
          <div className="lg:p-2 p-2 rounded-full bg-blue-500/20">
            <Image
              src="/images/xeenux.png"
              alt="tether"
              width={20}
              height={20}
            />
          </div>
          <div className="w-full">
            <p className="text-sm lg:text-sm font-bold">
              {bigIntToString(
                tokensToBeBurnt || BigInt(0),
                Number(tokenInfo?.decimals || 0),
                0
              )}
            </p>
            <p className="text-[10px] md:text-xs text-gray-400">
              Xeenux tokens to be burned
            </p>
          </div>
        </div>
        <div className="flex w-full flex-colx glass-card items-center gap-4 px-4 py-2 rounded-xl">
          <div className="lg:p-2 p-2 rounded-full bg-blue-500/20">
            <Image
              src="/images/xeenux.png"
              alt="theter"
              width={20}
              height={20}
            />
          </div>
          <div className="w-full">
            <p className="text-sm lg:text-sm font-bold">
              {bigIntToString(nextPrice || BigInt(0), 18, 5)}
            </p>
            <p className="text-[10px] md:text-xs text-gray-400">
              Upcoming Xeenux price
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col glass-card items-center gap-4 px-2 py-2 rounded-xl">
          <p className="text-[10px] md:text-xs text-gray-400">
            Burning date timer
          </p>
          <div className="w-full">
            <CountdownTimer targetDate={new Date("2025-02-04")} />
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center w-full">
        <ReferralLinks userId={Number(userInfo?.id || 0)} />
      </div>

      <div className="p-4 md:p-10 w-full bg-[#4c51ff]/20 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:border-r border-b border-gray-400/50 w-full p-6">
          <div className="flex flex-col ">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-500/20">
                <Wallet className="lg:w-6 lg:h-6 w-4 h-4 text-purple-500" />
              </div>
              <p className="text-sm text-gray-200">My ID</p>
            </div>
            <div>
              {/* <p className="text-sm opacity-50 font-bold">
                {Number(userInfo?.id || 0).toString()}
              </p> */}
              <div className="text-center mt-5 border border-purple-500/30 py-3 px-5 rounded-xl w-full">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Name:</span>
                  <span>{userInfo?.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Email ID:</span>
                  <span>{userInfo?.email}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Wallet Address</span>
                  <span>{shortenAddress(userInfo?.acct || "")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:border-b md:border-r-0 border-b border-gray-400/50 w-full p-4  lg:p-4">
          <div className="flex md:flex-col items-start  lg:items-center gap-4">
            <div className="flex w-full flex-colx glass-card items-center gap-4 px-4 py-2 rounded-xl">
              <div className="lg:p-2 p-2 rounded-full bg-blue-500/20">
                <DollarSign className="lg:w-3 lg:h-3 w-2 h-2 text-blue-500" />
              </div>
              <div className="w-full">
                <p className="text-sm lg:text-sm font-bold">
                  {bigIntToString(
                    userTotalEarnings,
                    tokenInfo?.decimals || 0,
                    5
                  )}{" "}
                  {tokenInfo?.symbol}
                </p>
                <p className="text-[10px] md:text-xs text-gray-400">
                  Total Earnings
                </p>
              </div>
              {/* <p className="text-sm lg:text-sm font-bold">$ 0.0000</p>
                            <p className="text-xs text-gray-400">Total income</p> */}
            </div>

            <div className="flex w-full flex-colx glass-card items-center gap-4 px-4 py-2 rounded-xl">
              <div className="lg:p-2 p-2 rounded-full bg-blue-500/20">
                <DollarSign className="lg:w-3 lg:h-3 w-2 h-2 text-blue-500" />
              </div>
              <div className="w-full">
                <p className="text-sm lg:text-sm font-bold">
                  {bigIntToString(
                    userVolumes?.selfVolume || BigInt(0),
                    tokenInfo?.decimals || 0,
                    5
                  )}{" "}
                  {tokenInfo?.symbol}
                </p>
                <p className="text-[10px] md:text-xs text-gray-400">
                  Total Investment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:border-r border-b border-gray-400/50 gap-3 w-full p-6">
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex justify-between items-center">
              <span>Available Income:</span>{" "}
              <span className="text-sm font-bold">{bigIntToString(userAvailableWithdraw, tokenInfo?.decimals || 0, 5)}{" "}{tokenInfo?.symbol}</span>
            </div>
            <Input
              placeholder="Enter amount of XEENUX to withdraw"
              className="glass-input"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <Button
              className="w-full glass-button"
              onClick={handleWithdraw}
              disabled={amount === 0}
            >
              Withdraw XEENUX
            </Button>
          </div>
          <Button
            onClick={scrollToPackage}
            className="bg-transparent border border-purple-500/80 text-purple-500/80 rounded-xl w- h-12 font-semibold mx-auto w-full"
          >
            Invest or Buy package
          </Button>
          {/* <div className="flex flex-col items-start lg:items-center gap-4">
            <div className="flex px-2 w-full flex-col glass-card items-center gap-2 py-2 rounded-xl overflow-hidden">
              <div className="flex gap-2 items-center px-2 w-full">
                <Image
                  src="/images/tether.svg"
                  alt="usdt"
                  width={20}
                  height={20}
                />
                <p className="text-[10px] md:text-xs">USDT</p>
              </div>
              <div className="w-full">
                <p className="text-xs lg:text-sm font-bold">$ 0.00</p>
              </div>
              <div className="flex gap-2 w-full">
                <Button
                  onClick={() => showDepositInput("USDT")}
                  className="glass-button w-full"
                >
                  Deposit
                </Button>
                <Button
                  onClick={() => showWithdrawInput("USDT")}
                  className="glass-button w-full"
                >
                  Withdraw
                </Button>
              </div>
            </div>

            <div className="flex px-2 w-full flex-col glass-card items-center gap-2 py-2 rounded-xl overflow-hidden">
              <div className="flex gap-2 items-center px-2 w-full">
                <Image
                  src="/images/xeenux.png"
                  alt="xeenux"
                  width={20}
                  height={20}
                />
                <p className="text-[10px] md:text-xs">XEENUX</p>
              </div>
              <div className="w-full">
                <p className="text-xs lg:text-sm font-bold">0.00</p>
              </div>
              <div className="flex gap-2 w-full">
                <Button
                  onClick={() => showDepositInput("XEENUX")}
                  className="glass-button w-full"
                >
                  Deposit
                </Button>
                <Button
                  onClick={() => showWithdrawInput("XEENUX")}
                  className="glass-button w-full"
                >
                  Withdraw
                </Button>
              </div>
            </div>
          </div> */}

          {/* Dynamic Input Section */}
          {/* {selectedCurrency && (
            <div className="flex flex-col gap-2 mt-1">
              <Input
                placeholder={`Enter amount of ${selectedCurrency}`}
                className="glass-input"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Button
                className="w-full glass-button"
                onClick={handleTransaction}
              >
                {transactionType === "deposit"
                  ? `Deposit ${selectedCurrency}`
                  : `Withdraw ${selectedCurrency}`}
              </Button>
            </div>
          )} */}
          {/* Buy XEENUX Section */}
          {/* <div className="flex flex-col items-center gap-4 mt-6">
                <div className="flex gap-2 items-center w-full">
                    <Button onClick={() => showDepositInput('XEENUX')} className="glass-button w-full">
                        Buy XEENUX
                    </Button>
                </div>
                {selectedCurrency === 'XEENUX' && transactionType === 'deposit' && (
                    <div className="flex flex-col gap-2 mt-2">
                        <Input
                            placeholder="Enter amount of XEENUX to buy"
                            className="glass-input"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <Button className="w-full glass-button" onClick={handleTransaction}>
                            Buy XEENUX
                        </Button>
                    </div>
                )}
            </div> */}
        </div>

        <div className="md:border-b md:border-r-0 border-b border-gray-400/50 w-full p-4  lg:p-4">
          <div className="flex md:flex-col items-start  lg:items-center gap-4">
            <div className="flex w-full flex-colx glass-card items-center gap-4 px-4 py-2 rounded-xl">
              <div className="lg:p-2 p-2 rounded-full bg-blue-500/20">
                <DollarSign className="lg:w-3 lg:h-3 w-2 h-2 text-blue-500" />
              </div>
              <div className="w-full">
                <p className="text-sm lg:text-sm font-bold">{bigIntToString(userAvailableWithdraw, tokenInfo?.decimals || 0, 5)}{" "}{tokenInfo?.symbol}</p>
                <p className="text-[10px] md:text-xs text-gray-400">
                  Available withdraw
                </p>
              </div>
            </div>

            <div className="flex w-full flex-colx glass-card items-center gap-4 px-4 py-2 rounded-xl">
              <div className="lg:p-2 p-2 rounded-full bg-blue-500/20">
                <DollarSign className="lg:w-3 lg:h-3 w-2 h-2 text-blue-500" />
              </div>
              <div className="w-full">
                <p className="text-sm lg:text-sm font-bold">{bigIntToString(userAvailableWithdraw, tokenInfo?.decimals || 0, 5)}{" "}{tokenInfo?.symbol}</p>
                <p className="text-[10px] md:text-xs text-gray-400">
                  Total Withdraw
                </p>
              </div>
            </div>
            <Dialog>
              <DialogTrigger className="bg-transparent border border-purple-500/80 text-purple-500/80 rounded-xl w- h-12 font-semibold mx-auto w-full">
                {/* <Button
                      className="bg-transparent border border-purple-500/80 text-purple-500/80 rounded-xl w- h-12 font-semibold mx-auto w-48"
                      type="button"
                    > */}
                swap usdt to xee
                {/* </Button> */}
              </DialogTrigger>
              <DialogContent className="p-0 border-none">
                {/* <VisuallyHidden> */}
                <DialogTitle className="text-xl font-bold sr-only">
                  Swap USDT to XEE
                </DialogTitle>
                {/* </VisuallyHidden> */}
                <SwapSection />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
