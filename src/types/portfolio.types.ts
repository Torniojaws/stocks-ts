type Currency = "EUR" | "USD" | "SEK" | "CAD" | "GBX" | "NOK";

export interface ISortObject {
  key: IStockSortKeys;
  sortDirection: "asc" | "desc";
}

export enum IStockSortKeys {
  ticker = "ticker",
  position = "position",
}

export enum INumericValueSortKeys {
  position = "position",
  costAverage = "costAverage",
  sharePrice = "sharePrice",
  changePercentage = "changePercentage",
}

export interface Stock {
  ticker: string;
  name: string;
  position: number;
  costAverage: number;
  currency: Currency;
  costAverageCurrency: Currency;
  sharePrice: number;
  changePercentage: number;
}

export interface IPortfolio {
  portfolioName: string;
  stocks: Stock[];
}
