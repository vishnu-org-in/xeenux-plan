import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { useBinaryTree } from "@/hooks/use-user";
import { useUser } from "@/context/user";
import { useContractData } from "@/context/contract";
import { bigIntToString, cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// Sample Data Structure (Replace with API Data)

export const BinaryTree = ({
  userId,
  isYou = false,
}: {
  userId: bigint;
  isYou?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState([false, false]);
  const [expandedTrees, setExpandedTrees] = useState<{
    [key: number]: boolean;
  }>({});

  const [rootDetailsExpanded, setRootDetailsExpanded] = useState(false);

  const { data: binaryTreeData } = useBinaryTree(userId);
  const { tokenInfo } = useContractData();

  return (
    <div className="flex flex-col items-center space-y-6 p-4 w-full">
      {/* 🟢 Top User Card */}
      <Card className="p-4 border max-w-1/2 min-w-1/3 max-w-md text-center border-primary-800 bg-primary-800 shadow-md flex flex-col items-center gap-2 rounded-xl">
        <div className="">
          <Image src="/images/xeenux.png" alt="xeenux" width={25} height={25} />
        </div>
        <h2 className="text-lg font-semibold text-purple-300">
          {binaryTreeData?.name}
          {isYou ? " (You)" : ""}
        </h2>
        <button
          className="text-xs text-purple-300 flex gap-1 bg-purple-500/20 !rounded-none px-2 py-1"
          onClick={() => setRootDetailsExpanded(!rootDetailsExpanded)}
        >
          <span>
            Team:{" "}
            {bigIntToString(binaryTreeData?.team.totalTeam || BigInt(0), 0, 0)}
          </span>
          <span className="text-xs text-gray-300"> |</span>
          <span>
            Volume:{" "}
            {bigIntToString(
              binaryTreeData?.team.totalBusiness || BigInt(0),
              Number(tokenInfo?.decimals || 0),
              0
            )}{" "}
            {tokenInfo?.symbol}
          </span>
          {/* <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              rootDetailsExpanded && "transform rotate-180"
            )}
          /> */}
        </button>
        {/* {rootDetailsExpanded && (
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              "text-sm space-y-2 px-4",
              isExpanded ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="flex justify-between font-light text-[10px] items-center">
              <span className="text-purple-200">Left count: {" "}</span>
              <span className="text-purple-300">
                {binaryTreeData?.team.totalTeam.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-betweenx font-light text-[10px] items-center">
              <span className="text-purple-200">Right count: </span>{" "}
              <span className="text-purple-300">
                {binaryTreeData?.team.totalTeam.toLocaleString()}
              </span>
            </div>
          </div>
        )} */}
      </Card>
      <div className="flex gap-4 justify-around w-full items-start">
        {[binaryTreeData?.leftTree, binaryTreeData?.rightTree].map(
          (tree, index) => {
            const treeTotalUsers =
              (tree?.reduce(
                (acc, curr) => acc + Number(curr.team.totalTeam),
                0
              ) || 0) + (tree?.length || 0);
            const treeTotalVolume = tree?.reduce(
              (acc, curr) =>
                acc +
                Number(
                  bigIntToString(
                    curr.team.totalBusiness || BigInt(0),
                    Number(tokenInfo?.decimals || 0),
                    0
                  )
                ),
              0
            );
            return (
              <Card className="p-4 border max-w-1/2 min-w-1/3 max-w-md text-center border-primary-800 bg-primary-800 shadow-md flex flex-col items-center gap-2 rounded-xl">
                <h2 className="text-lg font-semibold text-purple-300">
                  {index === 0 ? "Left Tree" : "Right Tree"}
                </h2>
                <div>
                  <p>Team: {treeTotalUsers}</p>
                  {/* <p>
                    Volume: {treeTotalVolume} {tokenInfo?.symbol}
                  </p> */}
                </div>
                <button
                  className="text-xs text-purple-300 flex gap-1 bg-purple-500/20 !rounded-none px-2 py-1"
                  onClick={() =>
                    setExpandedTrees((prev) => ({
                      ...prev,
                      [index]: !prev[index],
                    }))
                  }
                >
                  view users
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      rootDetailsExpanded && "transform rotate-180"
                    )}
                  />
                </button>
                {expandedTrees[index] && (
                  <div className="flex flex-col gap-1 text-purple-200 w-full">
                    {tree?.map((user, index) => {
                      return (
                        <div className="w-full flex items-center justify-around border-[0.5px] py-1 border-purple-500/50">
                          <div>{user.name}</div>
                          <div>{"-"}</div>
                          <div>{Number(user.team.totalTeam)}</div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </Card>
            );
          }
        )}
      </div>
    </div>
  );
};
