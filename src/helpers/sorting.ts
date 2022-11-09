import {
  IPortfolio,
  ISortObject,
  INumericValueSortKeys,
  IStockSortKeys,
} from "../types/portfolio.types";

export const sortItems = (
  object: IPortfolio,
  sortKey: IStockSortKeys,
  sortDirection: ISortObject["sortDirection"]
) => {
  // When sorting by numeric contents, a different sorting method is needed
  if (sortKey in INumericValueSortKeys) {
    object.stocks.sort((a, b) => {
      const numB: number = b[sortKey] as unknown as number;
      const numA: number = a[sortKey] as unknown as number;
      return sortDirection === "asc" ? numA - numB : numB - numA;
    });
  } else {
    // Sorting by string values
    object.stocks.sort((a, b) => {
      const stringA: string = a[sortKey] as unknown as string;
      const stringB: string = b[sortKey] as unknown as string;
      return sortDirection === "asc"
        ? stringA.localeCompare(stringB)
        : stringB.localeCompare(stringA);
    });
  }
};
