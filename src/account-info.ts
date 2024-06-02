
export interface AccountInfoParent {
  accountInfo: {
    accountLast4: string;
  },
  credit: {
    annualPercentageRate: string;
    availableCredit: string;
    creditLimit: string;
    currentBalance: string;
  }
}



export function accountInfoCheck(object: any): object is AccountInfoParent {
  return object
    && typeof object == "object"
    && 'accountInfo' in object
    && 'accountLast4' in object.accountInfo
    && 'credit' in object
    && 'annualPercentageRate' in object.credit
    && 'availableCredit' in object.credit
    && 'creditLimit' in object.credit
    && 'currentBalance' in object.credit
}


export function accountInfoFetcher(item: AccountInfoParent): any {
  return item.accountInfo.accountLast4;
}
