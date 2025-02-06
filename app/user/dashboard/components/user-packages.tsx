import { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Card } from "@/components/ui/card";
import { ChevronUp } from "lucide-react";
import { UserPackageInfo } from "@/types";
import { Progress } from "@/components/ui/progress"; // Import the progress bar component
import { formatDistanceToNow } from "date-fns"; // To format timestamps
import { bigIntToString } from "@/lib/utils";
import { useContractData } from "@/context/contract";
import { packages } from "@/lib/data/packages";

interface UserPackagesProps {
  userPackages: readonly UserPackageInfo[] | undefined;
  withInactive?: boolean;
}

const UserPackages: React.FC<UserPackagesProps> = ({
  userPackages,
  withInactive = false,
}) => {
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // const activePackages = userPackages
  // const activePackages = userPackages.filter(
  //   (pkg) => pkg.earned < pkg.ceilingLimit
  // );
  // const inactivePackages = userPackages.filter(
  //   (pkg) => pkg.earned >= pkg.ceilingLimit
  // );
  const { tokenInfo } = useContractData();
  return (
    <div className="space-y-4">
      {/* <h2 className="text-lg font-bold text-white">📦 Active Packages</h2> */}

      {/* Table Headers */}
      {userPackages && userPackages.length > 0 ? (
        <div className="grid grid-cols-4 text-xs gap-1 font-semiboldx tracking-tight bg-purple-500/20 p-2 rounded-lg text-white">
          <span>Value</span>
          <span>Ceil. Limit</span>
          <span>Earned</span>
          {/* <span>Remaining</span> */}
          <span>Progress</span>
        </div>
      ) : (
        <p className="text-muted-foreground">No active packages</p>
      )}

      {/* Active Packages */}
      {userPackages && userPackages.map((pkg, index) => {
        if (!withInactive && pkg.isActive === false) return null;
        const percentageEarned =
          (Number(pkg.earned) / Number(pkg.ceilingLimit)) * 100;
        return (
          <Card
            key={index}
            className="p-3 rounded-lg flex flex-col bg-gray-800x relative border-purple-500/50"
          >
            <div className="grid grid-cols-4 gap-1 items-center text-white text-sm pb-2">
              <span className="font-bold">
                {packages.find((p) => p.value === Number(pkg.package))?.label}
              </span>
              <span className="text-yellow-400">
                {Number(
                  bigIntToString(
                    pkg.ceilingLimit,
                    Number(tokenInfo?.decimals || 0),0
                  )
                )}{" "}
                XEE
              </span>
              <span className="text-green-400">
                {Number(
                  bigIntToString(pkg.earned, Number(tokenInfo?.decimals || 0), 4)
                )}{" "}
                XEE
              </span>
              {/* <span className="text-red-400">
                {Number(
                  bigIntToString(
                    pkg.ceilingLimit - pkg.earned,
                    Number(tokenInfo?.decimals || 0),0
                  )
                )}{" "}
                XEE
              </span> */}
              <Progress
                value={percentageEarned <= 0 ? 1 : percentageEarned}
                className="h-2 bg-gray-700"
              />
            </div>
            <div className="text-xs text-center text-gray-400">
              Purchased{" "}
              {formatDistanceToNow(new Date(Number(pkg.timestamp) * 1000))} ago
            </div>
          </Card>
        );
      })}

      {/* Collapsible Inactive Packages */}
      {/* {inactivePackages.length > 0 && (
        <Collapsible open={isCollapsed} onOpenChange={setIsCollapsed}>
          <CollapsibleTrigger className="mt-4 flex justify-between text-sm text-gray-300 cursor-pointer">
            <span>⏳ Show Inactive Packages</span>
            <ChevronUp
              className={`w-4 h-4 transition-transform ${
                isCollapsed ? "rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="grid grid-cols-5 text-xs font-semibold bg-red-500/20 p-2 rounded-lg text-white mt-2">
              <span>Value</span>
              <span>Ceiling Limit</span>
              <span>Earned</span>
              <span>Remaining</span>
              <span>Progress</span>
            </div>

            {inactivePackages.map((pkg, index) => {
              const percentageEarned =
                (Number(pkg.earned) / Number(pkg.ceilingLimit)) * 100;
              return (
                <Card
                  key={index}
                  className="p-4 rounded-lg flex flex-col bg-gray-900 relative border-red-500/50"
                >
                  <div className="grid grid-cols-5 gap-3 items-center text-white text-sm pb-2">
                    <span className="font-bold">
                      {
                        packages.find((p) => p.value === Number(pkg.package))
                          ?.label
                      }
                    </span>
                    <span className="text-yellow-400">
                      {Number(
                        bigIntToString(
                          pkg.ceilingLimit,
                          Number(tokenInfo?.decimals || 0)
                        )
                      )}{" "}
                      XEE
                    </span>
                    <span className="text-green-400">
                      {Number(
                        bigIntToString(
                          pkg.earned,
                          Number(tokenInfo?.decimals || 0)
                        )
                      )}{" "}
                      XEE
                    </span>
                    <span className="text-red-400">
                      {Number(
                        bigIntToString(
                          pkg.ceilingLimit - pkg.earned,
                          Number(tokenInfo?.decimals || 0)
                        )
                      )}{" "}
                      XEE
                    </span>
                    <Progress
                      value={percentageEarned}
                      className="h-2 bg-gray-700"
                    />
                  </div>
                  <div className="text-xs text-center text-red-400">
                    🔥 Inactive - Purchased{" "}
                    {formatDistanceToNow(
                      new Date(Number(pkg.timestamp) * 1000)
                    )}{" "}
                    ago
                  </div>
                </Card>
              );
            })}
          </CollapsibleContent>
        </Collapsible>
      )} */}
    </div>
  );
};

export default UserPackages;
