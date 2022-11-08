type Currency = 'EUR' | 'USD' | 'SEK' | 'CAD' | 'GBX' | 'NOK';

export interface ISortObject {
  key: IStockSortKeys;
  sortDirection: 'asc' | 'desc';
}

export enum IStockSortKeys {
  ticker = 'ticker',
  position = 'position',
}

export enum INumericValueSortKeys {
  position = 'position',
  costAverage = 'costAverage'
}

export interface Stock {
  ticker: string;
  name: string;
  position: number;
  costAverage: number;
  currency: Currency;
  costAverageCurrency: Currency;
}

export interface IPortfolio {
  portfolioName: string;
  stocks: Stock[];
}
