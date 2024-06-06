import { parse } from 'csv-parse/browser/esm/sync';
import dayjs from 'dayjs';
import { OfxSecurityCreationDto, SecurityPriceDto, SecurityTransactionCreationDto } from './ofx-security-stocks';


export class Pa529CsvTransformer {

  static convertCsvToOfxCreationDto(csvRaw: string): OfxSecurityCreationDto {
    let splits = csvRaw.replace(/\n{3,}/g, "\n\n").split("\n\n");
    let holdingsSectionOfCsv = splits[0];
    let transactionsSectionOfCsv = splits[1];

    let holdings = this.getCsvHoldings(holdingsSectionOfCsv);
    let transactions = this.getTransactions(transactionsSectionOfCsv);

    let accountNumbers = new Set<string>();
    let dtoTransactions: SecurityTransactionCreationDto[] = [];
    transactions.forEach(singleTran => {
      accountNumbers.add(singleTran.accountNumber);

      let dto: SecurityTransactionCreationDto = {
        tradeDate: singleTran.tradeDate,
        transactionId: `${dayjs(singleTran.tradeDate).format("YYYYMMDD")}${singleTran.investmentName}`.replace(/ /g, ""),
        memo: `${singleTran.transactionType} - ${singleTran.investmentName}`,
        securityId: this.getSecurityIdFromTran(singleTran),
        dollarTotal: -singleTran.grossAmount,
        pricePerShare: singleTran.sharePrice,
        shares: singleTran.shares,
      }

      dtoTransactions.push(dto);
    })


    let securityInfo: SecurityPriceDto[] = holdings.map(singleHolding => {
      let holding: SecurityPriceDto = {
        fiid: "PA529",
        securityUid: this.getSecurityIdFromHolding(singleHolding),
        securityName: "PA529 - " + singleHolding.fundName,
        ticker: "",
        pricePerShare: singleHolding.price,
      }
      return holding;
    })


    if (accountNumbers.size !== 1)
      throw new Error("Incorrect number of accounts listed. 1 and only 1 account number must be listed.");

    let [accountNumber] = accountNumbers;
    let startEndDates = this.getStartEndDates(transactions);

    let config: OfxSecurityCreationDto = {
      updateDateTime: new Date(),
      accountId: accountNumber,
      brokerId: "PA529",
      startDate: startEndDates[0],
      endDate: startEndDates[1],
      mutualFundTransactions: dtoTransactions,
      securityPriceInfo: securityInfo,
    }


    return config;
  }


  private static getSecurityIdFromTran(singleTran: Pa529Transaction): string {
    return "PA529 " + singleTran.investmentName;
  }


  private static getSecurityIdFromHolding(singleHolding: Pa529Holdings): string {
    return "PA529 " + singleHolding.fundName;
  }


  private static getStartEndDates(transactions: Pa529Transaction[]): [Date, Date] {
    let start: Date;
    let end: Date;
    transactions.forEach(single => {
      if (!start || start > single.tradeDate)
        start = single.tradeDate;

      if (!end || end < single.tradeDate)
        end = single.tradeDate;
    })

    return [start, end]
  }


  private static getTransactions(transactionsSectionOfCsv: string): Pa529Transaction[] {
    let transactionsAndHeader: string[][] = parse(transactionsSectionOfCsv);
    this.checkTransactionColumnNames(transactionsAndHeader[0])
    let transactionsRows = transactionsAndHeader.slice(1) // remove first row which is just headers
    return this.convertCsvRowsToTransactions(transactionsRows);
  }


  private static getCsvHoldings(holdingsSectionOfCsv: string): Pa529Holdings[] {
    let holdingsAndHeaders: string[][] = parse(holdingsSectionOfCsv);
    this.checkHoldingColumnNames(holdingsAndHeaders[0])
    let holdingRows = holdingsAndHeaders.slice(1) // remove first row which is just headers
    return this.convertCsvRowsToHoldings(holdingRows);
  }


  private static convertCsvRowsToHoldings(rows: string[][]): Pa529Holdings[] {
    return rows.map(singleRow => {
      let holdings: Pa529Holdings = {
        accountNumber: singleRow[Pa529HoldingColumns.FUND_ACCOUNT_NUMBER],
        fundName: singleRow[Pa529HoldingColumns.FUND_NAME],
        price: this.convertDollarStringToNumber(singleRow[Pa529HoldingColumns.PRICE]),
        shares: +singleRow[Pa529HoldingColumns.SHARES],
        totalValue: this.convertDollarStringToNumber(singleRow[Pa529HoldingColumns.TOTAL_VALUE]),
      }

      return holdings;
    })
  }


  private static convertCsvRowsToTransactions(rows: string[][]): Pa529Transaction[] {
    return rows.map(singleRow => {
      let tran: Pa529Transaction = {
        accountNumber: singleRow[Pa529TransactionColumns.ACCOUNT_NUMBER],
        tradeDate: this.convertMdyToDate(singleRow[Pa529TransactionColumns.TRADE_DATE]),
        transactionType: singleRow[Pa529TransactionColumns.TRANSACTION_TYPE],
        investmentName: singleRow[Pa529TransactionColumns.INVESTMENT_NAME],
        sharePrice: this.convertDollarStringToNumber(singleRow[Pa529TransactionColumns.SHARE_PRICE]),
        shares: +singleRow[Pa529TransactionColumns.SHARES],
        grossAmount: this.convertDollarStringToNumber(singleRow[Pa529TransactionColumns.GROSS_AMOUNT]),
        netAmount: this.convertDollarStringToNumber(singleRow[Pa529TransactionColumns.NET_AMOUNT]),
      }

      return tran;
    })
  }


  private static convertMdyToDate(dateString: string): Date {
    return dayjs(dateString, "MM/DD/YYYY").toDate();
  }


  private static convertDollarStringToNumber(dollarString: string): number {
    return +dollarString.replace(/\$/g, '');
  }


  private static checkHoldingColumnNames(columns: string[]): void {
    this.checkColumn(columns, Pa529HoldingColumns.FUND_ACCOUNT_NUMBER, "Fund Account Number");
    this.checkColumn(columns, Pa529HoldingColumns.FUND_NAME, "Fund Name");
    this.checkColumn(columns, Pa529HoldingColumns.PRICE, "Price");
    this.checkColumn(columns, Pa529HoldingColumns.SHARES, "Shares");
    this.checkColumn(columns, Pa529HoldingColumns.TOTAL_VALUE, "Total Value");
  }

  private static checkTransactionColumnNames(columns: string[]): void {
    this.checkColumn(columns, Pa529TransactionColumns.ACCOUNT_NUMBER, "Account Number");
    this.checkColumn(columns, Pa529TransactionColumns.TRADE_DATE, "Trade Date");
    this.checkColumn(columns, Pa529TransactionColumns.PROCESS_DATE, "Process Date");
    this.checkColumn(columns, Pa529TransactionColumns.TRANSACTION_TYPE, "Transaction Type");
    this.checkColumn(columns, Pa529TransactionColumns.TRANSACTION_DESCRIPTION, "Transaction Description");
    this.checkColumn(columns, Pa529TransactionColumns.INVESTMENT_NAME, "Investment Name");
    this.checkColumn(columns, Pa529TransactionColumns.SHARE_PRICE, "Share Price");
    this.checkColumn(columns, Pa529TransactionColumns.SHARES, "Shares");
    this.checkColumn(columns, Pa529TransactionColumns.GROSS_AMOUNT, "Gross Amount");
    this.checkColumn(columns, Pa529TransactionColumns.NET_AMOUNT, "Net Amount");
  }


  private static checkColumn(columns: string[], columnNumber: number, expected: string): void {
    if (columns[columnNumber] !== expected)
      throw new Error(`Expected column ${columnNumber + 1} to be "${expected}", but found "${columns[columnNumber]}"`)
  }
}




enum Pa529TransactionColumns {
  ACCOUNT_NUMBER = 0,
  TRADE_DATE = 1,
  PROCESS_DATE = 2,
  TRANSACTION_TYPE = 3,
  TRANSACTION_DESCRIPTION = 4,
  INVESTMENT_NAME = 5,
  SHARE_PRICE = 6,
  SHARES = 7,
  GROSS_AMOUNT = 8,
  NET_AMOUNT = 9,
}


interface Pa529Transaction {
  accountNumber: string;
  tradeDate: Date;
  transactionType: string;
  investmentName: string;
  sharePrice: number;
  shares: number;
  grossAmount: number;
  netAmount: number;
}



enum Pa529HoldingColumns {
  FUND_ACCOUNT_NUMBER = 0,
  FUND_NAME = 1,
  PRICE = 2,
  SHARES = 3,
  TOTAL_VALUE = 4,
}


interface Pa529Holdings {
  accountNumber: string;
  fundName: string;
  price: number;
  shares: number;
  totalValue: number;
}