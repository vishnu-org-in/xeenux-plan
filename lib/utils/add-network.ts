// utils/addNetwork.ts

export const addOpBNBNetwork = async (): Promise<void> => {
    if (typeof window.ethereum === 'undefined') {
        alert('Web3 wallet not found. Please install MetaMask or another Web3 wallet.');
        return;
    }

    try {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: '0xcc',
                chainName: 'opBNB Mainnet',
                nativeCurrency: {
                    name: 'OPBNB',
                    symbol: 'BNB',
                    decimals: 18
                },
                rpcUrls: ['https://opbnb-mainnet-rpc.bnbchain.org'],
                blockExplorerUrls: ['https://opbnb.bscscan.com']
            }]
        });
        alert('opBNB Mainnet added successfully!');
    } catch (error) {
        if (error instanceof Error) {
            console.error(error);
            alert('Error: ' + error.message);
        }
    }
};