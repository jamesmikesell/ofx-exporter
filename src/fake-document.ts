import { AccountInfoParent } from "./account-info";
import { Transaction } from "./transaction";

let mockTransactions: Transaction[] = [
  {
    type: "PURCHASE",
    status: "POSTED",
    description: "AMAZON MARKETPLACE SEATTLE WA",
    createdDate: "2024-05-07T12:00:00-05:00",
    postedDate: "2024-05-07T12:00:00-05:00",
    amount: "12.02",
    currencyCode: "840",
    identifiers: [{
      id: "zxcnvjvnoqisnva;sldkvjz;vhalsdkfalsdfkjaksdjf",
      idType: "ID"
    }],
    transactionInfo: {
      skuReferenceDetails: ["some item"],
      transactionId: "123412341",
    },
  },
  {
    type: "PURCHASE",
    status: "POSTED",
    description: "AMAZON DIGITAL SEATTLE WA",
    createdDate: "2024-05-07T12:00:00-05:00",
    postedDate: "2024-05-07T12:00:00-05:00",
    amount: "12.02",
    currencyCode: "840",
    identifiers: [{
      id: "bsnbnhaobn[o[asnbxkzcjvzlasfalknaklsdvnasdv",
      idType: "ID"
    }], transactionInfo: {
      skuReferenceDetails: [""],
      transactionId: "123412764574657",
    },
  },
  {
    type: "ADJUSTMENT",
    status: "POSTED",
    description: "YOUR STORE CARD STATEMENT CREDIT",
    createdDate: null,
    postedDate: "2024-05-02T12:00:00-05:00",
    amount: "-36.67",
    currencyCode: "840",
    identifiers: [{
      id: "asdfzxcasdflkjbgonblzxcnvoawepfijv",
      idType: "ID"
    }],
    transactionInfo: {
      skuReferenceDetails: null,
      transactionId: "000000000000000",
    },
  },
]


let mockAccountInfo: AccountInfoParent = {
  accountInfo: {
    accountLast4: "0604",
  },
  credit: {
    annualPercentageRate: "29.99",
    availableCredit: "8169.00",
    creditLimit: "10000.00",
    currentBalance: "1795.15",
  }
}



let fakeDoc = {
  "some object": {
    parent: {
      child: 1,
      child2: 2,
    },
    aunt: {
      noChildren: true,
    },
    "random family history": {
      "things you didn't want to know": [
        {
          "the meaning": {
            ofLife: 42
          },
          another: "value to find",
          "the other stuff": "goes here",
          bigBang: new Date(),
          "the last place you'll look": {
            seek: true,
            "you will find": "it",
            transactions: mockTransactions,
            accountInfo: mockAccountInfo,
          },
        },
        ["side", "quest"]
      ]
    }
  },
} as any as Document;



export { fakeDoc };

