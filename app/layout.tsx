import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import { Web3ModalProvider } from '@/components/web3-modal'
import { Footer } from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import ContextProvider from "@/context";
import { headers } from "next/headers";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xeenux Investment Platform",
  description: "Decentralized Investment Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const headersObj = headers();
  // const cookies = headersObj.get("cookie");
  const cookies = null;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider>
            <main className="min-h-screen p-2 overflow-x-hidden">
              <ContextProvider cookies={cookies}>{children}</ContextProvider>
            </main>
            <Footer />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
