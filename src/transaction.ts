

export interface Transaction {
  type: string;
  status: string;
  description: string;
  createdDate: string;
  postedDate: string;
  amount: string;
  currencyCode: string;

  transactionInfo: {
    skuReferenceDetails: string[];
    transactionId: string;
  }

  identifiers: {
    id: string;
    idType: string; // "ID"
  }[];
}



export function transactionIdFetcher(tran: Transaction): any {
  return tran.identifiers.filter(single => single.idType === "ID")[0].id;
}


export function transactionTypeCheck(object: any): object is Transaction {
  return object
    && typeof object == "object"
    && 'type' in object
    && 'status' in object
    && 'description' in object
    && 'createdDate' in object
    && 'postedDate' in object
    && 'amount' in object
    && 'currencyCode' in object
    && 'transactionInfo' in object
    && object.status === "POSTED"
    && 'skuReferenceDetails' in object.transactionInfo
}
