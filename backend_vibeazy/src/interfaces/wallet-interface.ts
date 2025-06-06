export interface IWalletDepositBody{
    bvn: string
    pin:string
} 

export interface ISendToVibeEazyUser{
    username: string
    amount: number
    pin: string
}

export interface IWithdrawFromWallet{
    amount:number
    bankCode:string,
    accountNumber:string
}
export interface IWithdrawFromWalletCashwyre{
    amount:number
    bankCode:string,
    accountNumber:string
    accountName:string
    narration:string
    pin:string
}