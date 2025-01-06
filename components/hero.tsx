'use client'

import { ArrowUpRight, DollarSign, Wallet } from "lucide-react"
import { ReferralLinks } from "./referral-links"
import { Button } from "./ui/button"
// import { Card } from "./ui/card"

export function Hero() {
    return (
        <div className="flex flex-col mb-6 space-y-4 w-full">
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4c51ff,rgba(177,84,255,0.4),rgba(0,212,255,0.15),transparent_70%)]" /> */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4c51ff]/20 rounded-full blur-3xl" />
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">Dashboard</h1>
                <div className="flex gap-2  py-2 px-4 rounded-full">
                    <span className="text-gray-500">Time of Registration: <span className=" text-white font-bold "> December 29th 2024, 5:24pm</span></span>
                </div>
            </div>

            <div className="flex gap-2 items-center w-full">
                <ReferralLinks />
            </div>

            <div className="p-10 w-full bg-[#4c51ff]/20  rounded-xl flex gap-3">
                <div className=" border-r border-r-gray-400/50 w-full p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-purple-500/20">
                            <Wallet className="lg:w-6 lg:h-6 w-4 h-4 text-purple-500" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">My Id</p>
                            <p className="text-sm opacity-50 font-bold">0x1234...5678</p>
                        </div>
                    </div>
                </div>l

                <div className="border-r border-r-gray-400/50 w-full p-4 lg:p-6">
                    <div className="flex flex-col lg:flex-row items-start  lg:items-center gap-4">
                        <div className="lg:p-3 p-2 rounded-full bg-blue-500/20">
                            <DollarSign className="lg:w-6 lg:h-6 w-4 h-4 text-blue-500" />
                        </div>
                        <div>

                            <p className="text-smlg:text-2xl font-bold">$ 0.0000</p>
                            <p className="text-xs text-gray-400">Received Balance</p>
                        </div>
                    </div>
                </div>

                <div className="border-r border-r-gray-400/50 flex gap-3 w-full p-6">
                    <div className="p-3 rounded-full h-fit bg-green-500/20">
                        <ArrowUpRight className="lg:w-6 lg:h-6 w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex flex-col items-center  gap-2">

                        <div>

                            <p className="text-2xl font-bold">$ 0.0000</p>
                            <p className="text-xs text-gray-400">Total Withdraw</p>
                        </div>
                        <Button className="glass-button mx-auto my-" >
                            Withdraw
                        </Button>
                    </div>

                </div>

                <div className="w-full p-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-green-500/20">
                            <ArrowUpRight className="lg:w-6 lg:h-6 w-4 h-4 text-green-500" />
                        </div>
                        <div>

                            <p className="text-2xl font-bold">$ 0.0000</p>
                            <p className="text-xs text-gray-400">Withdraw $</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}