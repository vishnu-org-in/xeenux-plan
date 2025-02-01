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
}
