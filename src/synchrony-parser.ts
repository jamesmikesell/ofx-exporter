import { AccountInfoParent, accountInfoCheck, accountInfoFetcher } from "./account-info";
import { ObjectFinder } from "./object-finder";
import { OfxCreationDto, OfxGenerator, OfxTransactionCreationDto } from "./ofx";
import { Transaction, transactionTypeCheck, transactionIdFetcher } from "./transaction";


export class SynchronyParser {
  parseToOfx(pageSearchRoot: any): string {
    let accountInfo = ObjectFinder
      .findObj<AccountInfoParent>(pageSearchRoot, accountInfoCheck, accountInfoFetcher)[0].object;

    let transactions = ObjectFinder.findObj<Transaction>(pageSearchRoot, transactionTypeCheck, transactionIdFetcher)
      .map(singleObjAndParents => singleObjAndParents.object);

    let dates = this.getStartEndDates(transactions);

    let config = new OfxCreationDto();
    config.startDate = new Date();
    config.endDate = new Date();
    config.accountNumber = accountInfo.accountInfo.accountLast4;
    config.balance = +accountInfo.credit.currentBalance;
    config.startDate = dates[0];
    config.endDate = dates[1];
    config.transactions = this.convertTransactionsToDtos(transactions);

    let ofxGenerator = new OfxGenerator();
    return ofxGenerator.generateOfx(config);
  }


  private getStartEndDates(transactions: Transaction[]): [Date, Date] {
    let start: Date;
    let end: Date;
    transactions.forEach(single => {
      let postDate = new Date(single.postedDate);
      if (!start || start > postDate)
        start = postDate;

      if (!end || end < postDate)
        end = postDate;
    })

    return [start, end]
  }


  private convertTransactionsToDtos(transactions: Transaction[]): OfxTransactionCreationDto[] {
    return transactions.map(single => {
      let tran = new OfxTransactionCreationDto();
      tran.amount = -single.amount;
      tran.datePosted = new Date(single.postedDate);
      tran.description = "Amazon - " + (single.transactionInfo.skuReferenceDetails?.join(";") || single.description);
      tran.id = single.identifiers.filter(id => id.idType === "ID")[0].id

      return tran;
    })
  }

}