import { Address } from "viem";

export interface NavItem {
  label: string;
  href: string;
}

export interface CountdownTimer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ICOStats {
  usdtRaised: number;
  listingDate: string;
  holders: number;
  tokenPrice: number;
  tokensSold: number;
  nextPhaseIncrease: number;
}

export interface UserInfo {
  acct: Address;
  ref: bigint;
  id: bigint;
  sn: bigint;
  roiIncome: bigint;
  levelIncome: bigint;
  autopoolIncome: bigint;
  rewardIncome: bigint;
  binaryIncome: bigint;
  refCount: bigint;
  rank: bigint;
  position: bigint;
  name: string;
  email: string;
  phone: string;
  registeredAt: bigint;
  purchaseWallet: bigint;
  totalWithdraw: bigint;
}

export interface UserPackageInfo {
  package: bigint;
  ceilingLimit: bigint;
  amount: bigint;
  earned: bigint;
  timestamp: bigint;
  isActive: boolean;
};

export interface UserTeamStats {
  directTeam: bigint;
  totalTeam: bigint;
  directBusiness: bigint;
  totalBusiness: bigint;
}

export interface UserVolumes {
  selfVolume: bigint;
  directVolume: bigint;
  leftVolume: bigint;
  rightVolume: bigint;
  levelIncome: bigint;
}

export interface UserClaims {
  roiIncome: bigint;
  levelIncome: bigint;
  autopoolIncome: bigint;
  rewardIncome: bigint;
  binaryIncome: bigint;
}

export interface TeamStats {
  directTeam: bigint;
  totalTeam: bigint;
  directBusiness: bigint;
  totalBusiness: bigint;
  leftBusiness: bigint;
  rightBusiness: bigint;
}

export interface TreeNode {
  id: bigint;
  name: string;
  team: TeamStats;
}

export interface UserTree {
  id: bigint;
  name: string;
  team: TeamStats;
  leftTree: TreeNode[];
  rightTree: TreeNode[];
}
