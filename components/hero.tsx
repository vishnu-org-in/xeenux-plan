'use client'

import { ArrowUpRight, DollarSign, Wallet } from "lucide-react"
import { ReferralLinks } from "./referral-links"
import { Button } from "./ui/button"
import Image from "next/image"
import { Input } from "./ui/input"
import { CountdownTimer } from "./ui/countdown-timer"
// import { Card } from "./ui/card"

export function Hero() {
    return (
        <div className="flex flex-col mb-6 space-y-4 w-full overflow-x-auto">
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4c51ff,rgba(177,84,255,0.4),rgba(0,212,255,0.15),transparent_70%)]" /> */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4c51ff]/20 rounded-full blur-3xl" />
            <div className="flex md:flex-row flex-col justify-between md:items-center">
                <h1 className="text-2xl">Dashboard</h1>
                <div className="flex  gap-2  py-2 md:px-4 rounded-full">
                    <span className="text-gray-500">Time of Registration: <span className=" text-white font-bold "> December 29th 2024, 5:24pm</span></span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex w-full flex-colx glass-card items-center gap-4 px-4 py-2 rounded-xl">
                    <div className="lg:p-2 p-2 rounded-full bg-blue-500/20">
                        <Image src="/images/xeenux.png" alt="theter" width={20} height={20} />
                    </div>
                    <div className="w-full">
                        <p className="text-sm lg:text-sm font-bold">0.0000</p>
                        <p className="text-[10px] md:text-xs text-gray-400">Xeenux tokens to be burned</p>
                    </div>
                </div>
                <div className="flex w-full flex-colx glass-card items-center gap-4 px-4 py-2 rounded-xl">
                    <div className="lg:p-2 p-2 rounded-full bg-blue-500/20">
                        <Image src="/images/xeenux.png" alt="theter" width={20} height={20} />
                    </div>
                    <div className="w-full">
                        <p className="text-sm lg:text-sm font-bold">0.0000</p>
                        <p className="text-[10px] md:text-xs text-gray-400">Upcoming Xeenux price</p>
                    </div>
                </div>

                <div className="flex w-full flex-col glass-card items-center gap-4 px-2 py-2 rounded-xl">
                    <p className="text-[10px] md:text-xs text-gray-400">Burning date timer</p>
                    <div className="w-full">
                        <CountdownTimer targetDate={new Date("2025-02-04")} />
                    </div>

                </div>
            </div>

            <div className="flex gap-2 items-center w-full">
                <ReferralLinks />
            </div>

            <div className="p-4 md:p-10 w-full bg-[#4c51ff]/20  rounded-xl grid grid-cols-1 justify-start items-centerx md:grid-cols-2 overflow-x-auto">
                <div className="md:border-r border-b border-gray-400/50 w-full p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-purple-500/20">
                            <Wallet className="lg:w-6 lg:h-6 w-4 h-4 text-purple-500" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">My Id</p>
                            <p className="text-sm opacity-50 font-bold">0x1234...5678</p>
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
                                <p className="text-sm lg:text-sm font-bold">$ 0.0000</p>
                                <p className="text-[10px] md:text-xs text-gray-400">Total Earnings</p>
                            </div>
                            {/* <p className="text-sm lg:text-sm font-bold">$ 0.0000</p>
                            <p className="text-xs text-gray-400">Total income</p> */}
                        </div>

                        <div className="flex w-full flex-colx glass-card items-center gap-4 px-4 py-2 rounded-xl">
                            <div className="lg:p-2 p-2 rounded-full bg-blue-500/20">
                                <DollarSign className="lg:w-3 lg:h-3 w-2 h-2 text-blue-500" />
                            </div>
                            <div className="w-full">
                                <p className="text-sm lg:text-sm font-bold">$ 0.0000</p>
                                <p className="text-[10px] md:text-xs text-gray-400">Total Investment</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex-col md:border-r md:border-b-0 border-b border-r-gray-400/50 flex gap-3 w-full p-6">
                    <div className="flex flex-col items-start lg:items-center gap-4">

                        <div className="flex  px-2 w-full flex-colx glass-card items-center gap-2 py-2 rounded-xl overflow-hidden">
                            <div className="flex gap-2 items-center px-2 w-full">
                                <Image src="/images/tether.svg" alt="theter" width={20} height={20} />
                                <p className="text-[10px] md:text-xs ">USDT</p>
                            </div>

                            <div className="w-full">
                                <p className="text-xs lg:text-sm font-bold">$ 0.00</p>
                            </div>
                        </div>

                        <div className="flex  px-2 w-full flex-colx glass-card items-center gap-2 py-2 rounded-xl overflow-hidden">
                            <div className="flex gap-2 items-center px-2 w-full">
                                <Image src="/images/xeenux.png" alt="theter" width={20} height={20} />
                                <p className="text-[10px] md:text-xs ">XEENUX</p>
                            </div>

                            <div className="w-full">
                                <p className="text-xs lg:text-sm font-bold">0.00</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col gap-2 mt-1">
                        <Input
                            placeholder="amount"
                            className="glass-input"
                        />
                        <Button className="w-full glass-button" >Withdraw</Button>
                    </div>

                </div>

                <div className=" w-full p-4  lg:p-4">
                    <div className="flex md:flex-col items-start  lg:items-center gap-4">

                        <div className="flex w-full flex-colx glass-card items-center gap-4 px-4 py-2 rounded-xl">
                            <div className="lg:p-2 p-2 rounded-full bg-blue-500/20">
                                <DollarSign className="lg:w-3 lg:h-3 w-2 h-2 text-blue-500" />
                            </div>
                            <div className="w-full">
                                <p className="text-sm lg:text-sm font-bold">$ 0.0000</p>
                                <p className="text-[10px] md:text-xs text-gray-400">Available Withdraw</p>
                            </div>

                        </div>

                        <div className="flex w-full flex-colx glass-card items-center gap-4 px-4 py-2 rounded-xl">
                            <div className="lg:p-2 p-2 rounded-full bg-blue-500/20">
                                <DollarSign className="lg:w-3 lg:h-3 w-2 h-2 text-blue-500" />
                            </div>
                            <div className="w-full">
                                <p className="text-sm lg:text-sm font-bold">$ 0.0000</p>
                                <p className="text-[10px] md:text-xs text-gray-400">Total Withdraw</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}