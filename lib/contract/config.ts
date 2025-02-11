import { Address } from "viem";
import { Tokens } from "@reown/appkit";

export const xeenuxContractAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_liq",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_xeenux",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_usdt",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amt",
				"type": "uint256"
			}
		],
		"name": "USDTtoXEENUX",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "activity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "mode",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "level",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "allIncomeLastDist",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "autoPoolFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "autoPoolMaxMembers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amt",
				"type": "uint256"
			}
		],
		"name": "burnXeenux",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_ref",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_package",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_position",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phone",
				"type": "string"
			}
		],
		"name": "buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"name": "changeXeenuxAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimAutoPoolIncome",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimBinaryIncome",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimLevelIncome",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimROIIncome",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "claimStuckTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimWeeklyIncome",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentDay",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "defaultRefer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "distributeIncome",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_userId",
				"type": "uint256"
			}
		],
		"name": "getAllLevelDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "level",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "userCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalAmount",
						"type": "uint256"
					}
				],
				"internalType": "struct xeenuxInvestment.LevelDetail[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllUsers",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "acct",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "ref",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sn",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "roiIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "levelIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "autopoolIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "binaryIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalWithdraw",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "refCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rank",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "position",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phone",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "registeredAt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "purchaseWallet",
						"type": "uint256"
					}
				],
				"internalType": "struct xeenuxInvestment.User[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getAutoPoolLevel",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_userId",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_mode",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_page",
				"type": "uint256"
			}
		],
		"name": "getFilteredActivities",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "mode",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "level",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct xeenuxInvestment.Activity[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_userId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_level",
				"type": "uint256"
			}
		],
		"name": "getLevelDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "userId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountEarned",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "userDeposit",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "userEmail",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userAddress",
						"type": "address"
					}
				],
				"internalType": "struct xeenuxInvestment.UserLevelDetail[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_index",
				"type": "uint8"
			}
		],
		"name": "getPackagePrice",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "usdt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "xee",
						"type": "uint256"
					}
				],
				"internalType": "struct xeenuxInvestment.PackagePrice",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_page",
				"type": "uint256"
			}
		],
		"name": "getRecentActivities",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "mode",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "level",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct xeenuxInvestment.Activity[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTokenInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "totalSupply",
						"type": "uint256"
					},
					{
						"internalType": "uint8",
						"name": "decimals",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "tokenAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					}
				],
				"internalType": "struct xeenuxInvestment.TokenData",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getUserActivitiesLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "userId",
				"type": "uint256"
			}
		],
		"name": "getUserBinaryTree",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "leftCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rightCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "leftCaryForward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rightCaryForward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "leftChildId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rightChildId",
						"type": "uint256"
					}
				],
				"internalType": "struct xeenuxInvestment.BinaryNode",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getUserClaims",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "roiIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "levelIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "autopoolIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "binaryIncome",
						"type": "uint256"
					}
				],
				"internalType": "struct xeenuxInvestment.UserClaim",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserDetail",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "acct",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "ref",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sn",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "roiIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "levelIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "autopoolIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "binaryIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalWithdraw",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "refCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rank",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "position",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phone",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "registeredAt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "purchaseWallet",
						"type": "uint256"
					}
				],
				"internalType": "struct xeenuxInvestment.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getUserInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "acct",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "ref",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sn",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "roiIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "levelIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "autopoolIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "binaryIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalWithdraw",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "refCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rank",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "position",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phone",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "registeredAt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "purchaseWallet",
						"type": "uint256"
					}
				],
				"internalType": "struct xeenuxInvestment.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getUserInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "acct",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "ref",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sn",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "roiIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "levelIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "autopoolIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "binaryIncome",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalWithdraw",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "refCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rank",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "position",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phone",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "registeredAt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "purchaseWallet",
						"type": "uint256"
					}
				],
				"internalType": "struct xeenuxInvestment.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "user",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_level",
				"type": "uint256"
			}
		],
		"name": "getUserLevelRefs",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "userId",
				"type": "uint256"
			}
		],
		"name": "getUserPackages",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "package",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "ceilingLimit",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "earned",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"internalType": "struct xeenuxInvestment.UserPackageInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_userId",
				"type": "uint256"
			}
		],
		"name": "getUserTeamStats",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "directTeam",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalTeam",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "directBusiness",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalBusiness",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "leftBusiness",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rightBusiness",
						"type": "uint256"
					}
				],
				"internalType": "struct xeenuxInvestment.TeamStats",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getUserVolumes",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "selfVolume",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "directVolume",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "leftVolume",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rightVolume",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "levelIncome",
						"type": "uint256"
					}
				],
				"internalType": "struct xeenuxInvestment.UserVolume",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "globalUsers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "id",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastBurnTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "levelIncomeFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "liqHolder",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "packages",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rewardUsers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_level",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "setLevelFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_level",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "setPackageFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_level",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "setPoolFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amt",
				"type": "uint256"
			}
		],
		"name": "setPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newRate",
				"type": "uint256"
			}
		],
		"name": "setSwapBurnRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "setSwapFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapBurnRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapUSDTLiquidity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amt",
				"type": "uint256"
			}
		],
		"name": "swapUSDTToXeenux",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapXeenuxLiquidity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amt",
				"type": "uint256"
			}
		],
		"name": "swapXeenuxToUSDT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "teams",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "teamsLeft",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "teamsRight",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTurnover",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalUsers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdtToken",
		"outputs": [
			{
				"internalType": "contract IERC20Metadata",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userActivities",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userBinaryTree",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "leftChildId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rightChildId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userPackages",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "package",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ceilingLimit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "earned",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usersBinary",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "leftVolume",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rightVolume",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usersClaim",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "roiIncome",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "levelIncome",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "autopoolIncome",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rewardIncome",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "binaryIncome",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usersDirectRefNo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usersDirectTeam",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "level",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usersInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "acct",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "ref",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "sn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "roiIncome",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "levelIncome",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "autopoolIncome",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rewardIncome",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "binaryIncome",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalWithdraw",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "refCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rank",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "position",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "registeredAt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "purchaseWallet",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usersOldBinary",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "leftVolume",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rightVolume",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usersRefNo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usersRefRankTotal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "usersVolume",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "selfVolume",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "directVolume",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "leftVolume",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rightVolume",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "levelIncome",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "weeklyLastDist",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "weeklyTurnover",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "xeenuxToBeBurned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "xeenuxToken",
		"outputs": [
			{
				"internalType": "contract IERC20Metadata",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] as const;

export type Addresses = { [key: string]: Address }
export const xeenuxContractAddresses = {
	'31337': '0xAD523115cd35a8d4E60B3C0953E0E0ac10418309', // local chain
	'97': '0xFA02E3EAb90b6E523515Ab70b6456F13485E450D', // testnet
} as Addresses;

export const usdtAddresses = {
	'31337': '0x5FbDB2315678afecb367f032d93F642f64180aa3', // local chain
	'97': '0x25ed48E0f7B9Be6024866A4eF4a3882333181517', // testnet
} as Addresses;

export const xeenuxTokenAddresses = {
	'31337': '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512', // local chain
	'97': '0x8445361C73Eda7EdD481905907fF4434401a0e35', // testnet
} as Addresses;

// TOKENS
export const tokens: Tokens = {
	"eip155:31337": {
		address: xeenuxTokenAddresses['31337'],
		image: 'token_image_url' //optional
	},
	"eip155:97": {
		address: xeenuxTokenAddresses['97'],
		image: 'token_image_url' //optional
	}
}
