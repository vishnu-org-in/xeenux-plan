export class WalletNotConnectedException extends Error {
    constructor() {
        super('Wallet not connected');
    }
}
