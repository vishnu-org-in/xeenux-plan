"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Share2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export function ReferralLinks({ userId }: { userId: number }) {
  const leftLink = `${window.location.origin}?ref=${userId}&position=left`;
  const rightLink = `${window.location.origin}?ref=${userId}&position=right`;
  const [copiedMessage, setCopiedMessage] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      // setCopiedMessage(true);
      toast.success("Referral link copied to clipboard");
      // setTimeout(() => setCopiedMessage(false), 3000); // Hide after 3 seconds
    })
    .catch(() => {
      // toast({
      //   title: "Error",
      //   description: "Failed to copy. Please try again.",
      //   variant: "destructive",
      // });
      toast.error("Failed to copy. Please try again.");
    });
  };

  return (
    <div className="flex  flex-col lg:flex-row  gap-4 w-full">
      <div className="glass-card py-2 w-full px-6 flex items-center">
        <div className="flex items-center w-full gap-2">
          <h3 className="text-xs font-semibold">Left Referral Link</h3>
          <input
            type="text"
            value={leftLink}
            readOnly
            className="flex-1 bg-black/20 rounded-lg px-4 py-2 text-sm"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => copyToClipboard(leftLink)}
          >
            <Copy className="w-4 h-4" />
          </Button>
          <div
            className={`absolute right-2 top-0 transform ${
              copiedMessage
                ? "translate-y-[-120%] opacity-100"
                : "translate-y-[-150%] opacity-0"
            } bg-[#F0B90B] text-black text-xs font-bold px-2 py-1 rounded-md shadow-md transition-all duration-300`}
          >
            Copied!
          </div>
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => {
            }}
          >
            <Share2 className="w-4 h-4" />
          </Button> */}
        </div>
      </div>

      <div className="glass-card py-2 px-6 w-full ">
        <div className="flex w-full items-center gap-2">
          <h3 className="text-sm font-semibold">Right Referral Link</h3>
          <input
            type="text"
            value={rightLink}
            readOnly
            className="flex-1 bg-black/20 rounded-lg px-4 py-2 text-sm"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => copyToClipboard(rightLink)}
          >
            <Copy className="w-4 h-4" />
          </Button>
          <div
            className={`absolute right-2 top-0 transform ${
              copiedMessage
                ? "translate-y-[-120%] opacity-100"
                : "translate-y-[-150%] opacity-0"
            } bg-[#F0B90B] text-black text-xs font-bold px-2 py-1 rounded-md shadow-md transition-all duration-300`}
          >
            Copied!
          </div>
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => {
            }}
          >
            <Share2 className="w-4 h-4" />
          </Button> */}
        </div>
      </div>
    </div>
  );
}
