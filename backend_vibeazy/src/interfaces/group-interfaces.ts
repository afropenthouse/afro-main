
export interface ICreateNewGroupBody {
    name:string
    groupLogo?:string   
}

export interface IAddUserToGroup{
    username:string
    groupId:string
}

export interface IJoinWithLink{
    sharableLink: string
}

export interface IDepositOrWithdrawInGroupWallet{
    amount: number
    groupId: string
    username:string
}
export interface IWithdrawFromGroup{
    amount: number
    groupId: string
    bankCode:string,
    accountNumber:string
    accountName: string
    pin:string
}