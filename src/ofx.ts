import dayjs from "dayjs";
import X2JS from "x2js";


export class OfxGenerator {
  generateOfx(config: OfxCreationDto): string {
    const templateString = '<OFX><CREDITCARDMSGSRSV1><CCSTMTTRNRS><TRNUID>0</TRNUID><STATUS><CODE>0</CODE><SEVERITY>INFO</SEVERITY></STATUS><CCSTMTRS><CURDEF>USD</CURDEF><CCACCTFROM><ACCTID>${actId}</ACCTID></CCACCTFROM><BANKTRANLIST><DTSTART></DTSTART><DTEND></DTEND></BANKTRANLIST><LEDGERBAL><BALAMT>0</BALAMT><DTASOF></DTASOF></LEDGERBAL></CCSTMTRS></CCSTMTTRNRS></CREDITCARDMSGSRSV1></OFX>';
    const header = '<?xml version="1.0" encoding="UTF-8"?>\n<?OFX OFXHEADER="200" VERSION="220" SECURITY="NONE" OLDFILEUID="NONE" NEWFILEUID="NONE"?>\n';

    let transactions = config.transactions.map(single => this.createTransaction(single.amount, single.id, single.description, single.datePosted))

    var x2js = new X2JS();
    let js: OfxDocument = x2js.xml2js(templateString)
    js.OFX.CREDITCARDMSGSRSV1.CCSTMTTRNRS.CCSTMTRS.BANKTRANLIST.STMTTRN = transactions
    js.OFX.CREDITCARDMSGSRSV1.CCSTMTTRNRS.CCSTMTRS.BANKTRANLIST.DTSTART = this.formatDate(config.startDate)
    js.OFX.CREDITCARDMSGSRSV1.CCSTMTTRNRS.CCSTMTRS.BANKTRANLIST.DTEND = this.formatDate(config.endDate)
    js.OFX.CREDITCARDMSGSRSV1.CCSTMTTRNRS.CCSTMTRS.LEDGERBAL.DTASOF = this.formatDate(new Date())

    js.OFX.CREDITCARDMSGSRSV1.CCSTMTTRNRS.CCSTMTRS.LEDGERBAL.BALAMT = config.balance;

    var xmlBody = x2js.js2xml(js);
    var fileText = header + xmlBody;

    fileText = fileText.replace(/\$\{actId\}/g, config.accountNumber);

    return fileText;
  }


  private createTransaction(amount: number, transactionId: string, description: string, date: Date): OfxTransaction {
    var tran: OfxTransaction = {} as OfxTransaction;
    tran.TRNTYPE = amount >= 0 ? "CREDIT" : "DEBIT";
    tran.DTPOSTED = this.formatDate(date);
    tran.TRNAMT = amount;
    tran.FITID = transactionId;
    tran.NAME = description;

    return tran;
  }


  private formatDate(date: Date): string {
    return dayjs(date).format("YYYYMMDD");
  }

}



export class OfxCreationDto {
  startDate: Date;
  endDate: Date;
  transactions: OfxTransactionCreationDto[];
  balance: number;
  accountNumber: string;
}

export class OfxTransactionCreationDto {
  amount: number;
  id: string;
  datePosted: Date;
  description: string;
}


interface OfxTransaction {
  TRNTYPE: "CREDIT" | "DEBIT";
  DTPOSTED: string;
  TRNAMT: number;
  FITID: string;
  NAME: string;
}


interface OfxDocument {
  OFX: {
    CREDITCARDMSGSRSV1: {
      CCSTMTTRNRS: {
        CCSTMTRS: {
          LEDGERBAL: {
            BALAMT: number;
            DTASOF: string;
          }
          BANKTRANLIST: {
            STMTTRN: OfxTransaction[];
            DTSTART: string;
            DTEND: string;
          }
        }
      }
    }
  }
}
