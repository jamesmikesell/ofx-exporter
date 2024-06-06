import dayjs from "dayjs";
import X2JS from "x2js";
// import xmlFormat from "xml-formatter"


export class OfxSecurityGenerator {

  static generateOfx(config: OfxSecurityCreationDto): string {
    this.checkTransactionSigns(config.mutualFundTransactions);

    var x2js = new X2JS({ selfClosingElements: false });
    let js: OfxSecurityDocument = x2js.xml2js(OFX_STOCK_TEMPLATE)

    js.OFX.INVSTMTMSGSRSV1.INVSTMTTRNRS.INVSTMTRS.INVACCTFROM.ACCTID = config.accountId;
    js.OFX.INVSTMTMSGSRSV1.INVSTMTTRNRS.INVSTMTRS.INVACCTFROM.BROKERID = config.brokerId;
    js.OFX.INVSTMTMSGSRSV1.INVSTMTTRNRS.INVSTMTRS.DTASOF = this.formatDate(config.updateDateTime);
    js.OFX.INVSTMTMSGSRSV1.INVSTMTTRNRS.INVSTMTRS.INVTRANLIST.DTSTART = this.formatDate(config.startDate);
    js.OFX.INVSTMTMSGSRSV1.INVSTMTTRNRS.INVSTMTRS.INVTRANLIST.DTEND = this.formatDate(config.endDate);

    let investmentTranList = js.OFX.INVSTMTMSGSRSV1.INVSTMTTRNRS.INVSTMTRS.INVTRANLIST;
    investmentTranList.BUYMF = [];
    investmentTranList.SELLMF = [];
    config.mutualFundTransactions.forEach(singleTran => {
      if (singleTran.shares >= 0)
        investmentTranList.BUYMF.push(this.createBuyTransaction(singleTran))
      else
        investmentTranList.SELLMF.push(this.createSellTransaction(singleTran))
    })

    js.OFX.SECLISTMSGSRSV1.SECLIST.MFINFO = config.securityPriceInfo.map(singleSecurity => {
      let mfInfo: OfxMfPriceInfo = {
        SECINFO: this.convertSecurityInfo(singleSecurity),
        MFTYPE: "OPENEND",
      }

      return mfInfo
    })

    if (investmentTranList.BUYMF.length === 0)
      delete investmentTranList.BUYMF
    if (investmentTranList.SELLMF.length === 0)
      delete investmentTranList.SELLMF
    if (js.OFX.SECLISTMSGSRSV1.SECLIST.MFINFO.length === 0)
      delete js.OFX.SECLISTMSGSRSV1.SECLIST.MFINFO

    var xmlBody = x2js.js2xml(js);
    var fileText = OFX_STOCK_HEADER + xmlBody;

    fileText = fileText.replace(/&#x27;/g, "'");
    fileText = fileText.replace(/&apos;/g, "'");
    fileText = fileText.replace(/&amp;/g, "&");
    fileText = fileText.replace(/&quot;/g, '"');

    return fileText;
    // return xmlFormat(fileText, { indentation: "  " });
  }


  private static checkTransactionSigns(mutualFundTransactions: SecurityTransactionCreationDto[]) {
    let incorrectSign = mutualFundTransactions.find(single => single.dollarTotal * single.shares > 0)
    if (incorrectSign)
      throw new Error("Incorrect sign on security transaction.  Buy transactions should have positive shares, negative dollars. Sales are opposite.");
  }


  private static createBuyTransaction(singleTran: SecurityTransactionCreationDto): OfxBuySecurityTransaction {
    let buy: OfxBuySecurityTransaction = {
      INVBUY: this.convertTransaction(singleTran),
      BUYTYPE: "BUY",
    }
    return buy;
  }


  private static createSellTransaction(singleTran: SecurityTransactionCreationDto): OfxSellSecurityTransaction {
    let sell: OfxSellSecurityTransaction = {
      INVSELL: this.convertTransaction(singleTran),
      SELLTYPE: "SELL",
    }
    return sell;
  }


  private static convertSecurityInfo(creationDto: SecurityPriceDto): OfxSecurityInfo {
    let ofxInfo: OfxSecurityInfo = {
      FIID: creationDto.fiid,
      SECID: {
        UNIQUEID: creationDto.securityUid,
        UNIQUEIDTYPE: "FUND_NAME",
      },
      SECNAME: creationDto.securityName,
      TICKER: creationDto.ticker,
      UNITPRICE: creationDto.pricePerShare,
    }

    return ofxInfo;
  }


  private static convertTransaction(config: SecurityTransactionCreationDto): OfxSecurityTransaction {
    return {
      INVTRAN: {
        DTSETTLE: this.formatDate(config.tradeDate),
        DTTRADE: this.formatDate(config.tradeDate),
        FITID: config.transactionId,
        MEMO: config.memo,
      },
      SECID: {
        UNIQUEID: config.securityId,
        UNIQUEIDTYPE: "FUND_NAME",
      },
      SUBACCTFUND: "CASH",
      SUBACCTSEC: "CASH",
      TOTAL: config.dollarTotal,
      UNITPRICE: config.pricePerShare,
      UNITS: config.shares,
    }
  }


  private static formatDate(date: Date): string {
    return dayjs(date).format("YYYYMMDD");
  }

}



export interface SecurityTransactionCreationDto {
  tradeDate: Date;
  transactionId: string;
  memo: string;
  securityId: string;
  dollarTotal: number;
  pricePerShare: number;
  shares: number;
}


export interface OfxSecurityCreationDto {
  updateDateTime: Date;
  startDate: Date;
  endDate: Date;
  accountId: string
  brokerId: string
  mutualFundTransactions: SecurityTransactionCreationDto[];

  securityPriceInfo: SecurityPriceDto[]
}


export interface SecurityPriceDto {
  fiid: string;
  securityUid: string;
  securityName: string;
  ticker: string;
  pricePerShare: number;
}



interface OfxSecurityDocument {
  OFX: {
    INVSTMTMSGSRSV1: {
      INVSTMTTRNRS: {
        INVSTMTRS: {
          DTASOF: string;
          INVACCTFROM: {
            BROKERID: string;
            ACCTID: string;
          };

          INVTRANLIST: {
            DTSTART: string;
            DTEND: string;
            BUYMF: OfxBuySecurityTransaction[];
            SELLMF: OfxSellSecurityTransaction[];
          }
        }
      }
    }
    SECLISTMSGSRSV1: OfxSecurityPrice
  }
}


interface OfxBuySecurityTransaction {
  INVBUY: OfxSecurityTransaction;
  BUYTYPE: "BUY"
}


interface OfxSellSecurityTransaction {
  INVSELL: OfxSecurityTransaction;
  SELLTYPE: "SELL"
}


interface OfxSecurityTransaction {
  INVTRAN: {
    FITID: string;
    DTTRADE: string;
    DTSETTLE: string;
    MEMO: string;
  };
  SECID: {
    UNIQUEID: string;
    UNIQUEIDTYPE: string;
  }
  UNITS: number;
  UNITPRICE: number;
  TOTAL: number;
  SUBACCTSEC: "CASH"
  SUBACCTFUND: "CASH"
}



interface OfxSecurityPrice {
  SECLIST: {
    MFINFO: OfxMfPriceInfo[],
  };
}


interface OfxMfPriceInfo {
  SECINFO: OfxSecurityInfo;
  MFTYPE: "OPENEND";
}


interface OfxSecurityInfo {
  SECID: {
    UNIQUEID: string;
    UNIQUEIDTYPE: string;
  };
  SECNAME: string;
  TICKER: string;
  FIID: string;
  UNITPRICE: number;
}


const OFX_STOCK_HEADER = `<?xml version="1.0" encoding="UTF-8"?>
<?OFX OFXHEADER="200" VERSION="220" SECURITY="NONE" OLDFILEUID="NONE" NEWFILEUID="NONE"?>
`

const OFX_STOCK_TEMPLATE = `<?xml version="1.0" encoding="UTF-8"?>
<?OFX OFXHEADER="200" VERSION="220" SECURITY="NONE" OLDFILEUID="NONE" NEWFILEUID="NONE"?>
<OFX>
  <INVSTMTMSGSRSV1>
    <INVSTMTTRNRS>
      <TRNUID>0</TRNUID>
      <STATUS>
        <CODE>0</CODE>
        <SEVERITY>INFO</SEVERITY>
      </STATUS>
      <INVSTMTRS>
        <DTASOF></DTASOF>
        <CURDEF>USD</CURDEF>
        <INVACCTFROM>
          <BROKERID></BROKERID>
          <ACCTID></ACCTID>
        </INVACCTFROM>
        <INVTRANLIST>
          <DTSTART></DTSTART>
          <DTEND></DTEND>
        </INVTRANLIST>
      </INVSTMTRS>
    </INVSTMTTRNRS>
  </INVSTMTMSGSRSV1>
  <SECLISTMSGSRSV1>
    <SECLIST>
    </SECLIST>
  </SECLISTMSGSRSV1>
</OFX>
`

