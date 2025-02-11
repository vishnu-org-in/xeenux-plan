import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useContractData } from "@/context/contract";
import { bigIntToString, shortenAddress } from "@/lib/utils";
import { UserLevelDetail } from "@/types";
import { useState } from "react";

// Type for a single user level
interface Level {
  level: bigint;
  userCount: bigint;
  totalAmount: bigint;
}

// Type for the cache object
interface LevelDetailsCache {
  [key: string]: UserLevelDetail[] | undefined;
}
export function LevelDetailsAccordion({
  userLevels,
  showLevels,
  getLevelDetails,
  userId,
}: {
  userId: number;
  userLevels: Level[];
  showLevels: boolean;
  getLevelDetails: (
    userId: number,
    level: number
  ) => Promise<UserLevelDetail[]>;
}) {
  const [levelDetailsCache, setLevelDetailsCache] = useState<LevelDetailsCache>(
    {}
  );
  const LevelRequiredReferrals = [5, 1, 1, 1, 1, 1, 5];
  const { tokenInfo } = useContractData();
  // Track loading states for each level
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );
  const handleLevelClick = async (levelId: string, level: Level) => {
    if (Number(level.userCount) === 0) return;
    if (levelDetailsCache[levelId]) return;

    setLoadingStates((prev) => ({ ...prev, [levelId]: true }));

    try {
      const details = await getLevelDetails(userId, Number(level.level));
      setLevelDetailsCache((prev) => ({
        ...prev,
        [levelId]: details,
      }));
    } catch (error) {
      console.error("Error fetching level details:", error);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [levelId]: false }));
    }
  };

  if (!showLevels) return null;
  return (
    <Accordion type="single" collapsible>
      {userLevels.length > 0 ? (
        userLevels.map((level, index) => {
          const levelId = `level-${index}`;
          return (
            <AccordionItem
              value={levelId}
              key={index}
              onClick={() => handleLevelClick(levelId, level)}
              className="flex flex-col gap-2 px-3 "
            >
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  <span className="text-sm font-medium">
                    Level {Number(level.level)}
                  </span>
                </div>
                <div className="text-sm font-medium">
                  {level.userCount.toString()} users
                </div>
                <div className="text-sm font-medium">
                  {bigIntToString(
                    level?.totalAmount,
                    Number(tokenInfo?.decimals || 0),
                    0
                  )}{" "}
                  {tokenInfo?.symbol}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 font-bold">
                {Number(level.userCount) === 0 ? (
                  <div className="flex flex-col gap-2">
                    <div className="text-sm text-gray-500">
                      No users in this level
                    </div>
                    {LevelRequiredReferrals[index] >
                      Number(level.userCount) && (
                      <span className="text-sm font-light text-orange-500">
                        you need minimum {LevelRequiredReferrals[index]} direct
                        referrals earn from this level
                      </span>
                    )}
                  </div>
                ) : loadingStates[levelId] ? (
                  <div className="text-sm">Loading...</div>
                ) : levelDetailsCache[levelId] ? (
                  <div className="space-y-2">
                    {levelDetailsCache[levelId].map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="text-sm flex gap-2 border-b border-gray-400 py-2"
                      >
                        <span>{detailIndex + 1}.</span>
                        <span className="">User-{Number(detail.userId)}</span>
                        <span>-</span>
                        <span className="">
                          {shortenAddress(detail.userEmail)} (
                          {shortenAddress(detail.userAddress)})
                        </span>
                        <span>-</span>
                        <span className="">
                          {bigIntToString(
                            detail.userDeposit,
                            Number(tokenInfo?.decimals || 0),
                            0
                          )}{" "}
                          {tokenInfo?.symbol}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm">Click to load details</div>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })
      ) : (
        <>
          <div className="text-sm text-gray-500">No levels available</div>
        </>
      )}
    </Accordion>
  );
}
