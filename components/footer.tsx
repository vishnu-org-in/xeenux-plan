'use client'

import { Facebook, Github, Instagram, Twitter, Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="glass-card mt-16 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/xeenux.png" 
                alt="Xeenux" 
                width={40} 
                height={40} 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold gradient-text">Xeenux</span>
            </div>
            <p className="text-gray-400">
              The world's first 100% decentralized investment platform powered by smart contracts
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 xeenux-glow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/user/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Rewards
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 xeenux-glow">Connect With Us</h3>
            <div className="grid grid-cols-2 space-y-3">
            <Link
                href="https://x.com/xeenuxinfo?t=eYwfJYDsNOxdjbhqzvKX-A&s=09"
                className=" rounded-full  transition-colors flex gap-2 items-center justify-start"
              >

                <Image src={require("../public/x.svg")} alt="refer" className="w-5 h-5 bg-white rounded-full p-1" />
                <p className=" text-muted/80">X</p>
              </Link>
              <Link
                href="https://t.me/xeenux"
                className=" rounded-full  transition-colors flex gap-2 items-center justify-start"
              >
                <Send className="w-5 h-5 text-blue-400" />
                <p className="text-sm text-muted/80">Telegram</p>
              </Link>
              <Link
                href="https://discord.gg/YyVBcdNK"
                className=" rounded-full  transition-colors flex gap-2 items-center justify-start"
              >
                <Image src={require("../public/images/discord.svg")} alt="refer" className="w-5 h-5" />
                <p className="text-sm text-muted/80">Discord</p>

              </Link>
             
              <Link
                href="https://www.facebook.com/profile.php?id=61569716469203&mibextid=ZbWKwL"
                className=" rounded-full  transition-colors flex gap-2 items-center justify-start"
              >
                <Facebook className="w-5 h-5 text-blue-500" />
                <p className="text-sm text-muted/80">Facebook</p>

              </Link>
              <Link
                href="https://www.instagram.com/xeenuxinfo?igsh=MWx3amRwMDRibDVvOQ=="
                className=" rounded-full  transition-colors flex gap-2 items-center justify-start"
              >
                <Instagram className="w-5 h-5 text-red-400 " />
                <p className="text-sm text-muted/80">Instagram</p>

              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Xeenux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}