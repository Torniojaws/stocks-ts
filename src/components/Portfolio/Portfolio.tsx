import { useState } from "react";
import { PortfolioHeader } from "./PortfolioHeader";
import { PortfolioRow } from "./PortfolioRow";
import {
  IPortfolio,
  IStockSortKeys,
  ISortObject,
} from "../../types/portfolio.types";
import { sortItems } from "../../helpers/sorting";

interface IParams {
  data: IPortfolio;
}

export const Portfolio = ({ data }: IParams) => {
  const [portfolioData, setPortfolioData] = useState<IPortfolio>(data);
  const [previousSort, setPreviousSort] = useState<ISortObject | undefined>(
    undefined
  );

  const clickedHeader = (value: string) => {
    const deepCopy: IPortfolio = JSON.parse(JSON.stringify(data));
    // Sort by the column user clicked on
    const sortKey = value as IStockSortKeys;
    // If already sorted once by the same key, reverse the sort
    if (
      previousSort &&
      previousSort.key === sortKey &&
      previousSort.sortDirection === "asc"
    ) {
      sortItems(deepCopy, sortKey, "desc");
      setPreviousSort({ key: sortKey, sortDirection: "desc" });
    } else {
      sortItems(deepCopy, sortKey, "asc");
      setPreviousSort({ key: sortKey, sortDirection: "asc" });
    }
    setPortfolioData(deepCopy);
  };

  return (
    <div>
      <h2>{data.portfolioName}</h2>
      {portfolioData.stocks.length && (
        <PortfolioHeader clicked={clickedHeader} />
      )}
      {portfolioData.stocks.map((stock) => (
        <PortfolioRow key={stock.ticker} stock={stock} />
      ))}
    </div>
  );
};
