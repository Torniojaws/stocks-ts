import { sortItems } from "./sorting";
import { IPortfolio, IStockSortKeys } from "../types/portfolio.types";

const data: IPortfolio = {
  portfolioName: "My example portfolio",
  stocks: [
    {
      ticker: "SAMPO.HE",
      name: "Sampo",
      position: 9999,
      costAverage: 40.4,
      costAverageCurrency: "EUR",
      currency: "EUR",
      sharePrice: 45,
      changePercentage: 10,
    },
    {
      ticker: "FSR",
      name: "Fisker",
      position: 7777,
      costAverage: 6.66,
      costAverageCurrency: "EUR",
      currency: "USD",
      sharePrice: 7,
      changePercentage: 5,
    },
    {
      ticker: "EVO.ST",
      name: "Evolution",
      position: 5555,
      costAverage: 850,
      costAverageCurrency: "SEK",
      currency: "SEK",
      sharePrice: 800,
      changePercentage: -6,
    },
  ],
};

describe("Sorting", () => {
  describe("Sorting portfolio items", () => {
    it("sorts string data to ascending order", () => {
      const deepCopy = JSON.parse(JSON.stringify(data));
      const key = "ticker" as IStockSortKeys;
      const direction = "asc";
      sortItems(deepCopy, key, direction);

      expect(deepCopy.stocks).toMatchObject([
        { ticker: "EVO.ST" },
        { ticker: "FSR" },
        { ticker: "SAMPO.HE" },
      ]);
    });

    it("sorts string data to descending order", () => {
      const deepCopy = JSON.parse(JSON.stringify(data));
      const key = "ticker" as IStockSortKeys;
      const direction = "desc";
      sortItems(deepCopy, key, direction);

      expect(deepCopy.stocks).toMatchObject([
        { ticker: "SAMPO.HE" },
        { ticker: "FSR" },
        { ticker: "EVO.ST" },
      ]);
    });

    it("sorts numeric data to ascending order", () => {
      const deepCopy = JSON.parse(JSON.stringify(data));
      const key = "position" as IStockSortKeys;
      const direction = "asc";
      sortItems(deepCopy, key, direction);

      expect(deepCopy.stocks).toMatchObject([
        { ticker: "EVO.ST", position: 5555 },
        { ticker: "FSR", position: 7777 },
        { ticker: "SAMPO.HE", position: 9999 },
      ]);
    });

    it("sorts numeric data to descending order", () => {
      const deepCopy = JSON.parse(JSON.stringify(data));
      const key = "position" as IStockSortKeys;
      const direction = "desc";
      sortItems(deepCopy, key, direction);

      expect(deepCopy.stocks).toMatchObject([
        { ticker: "SAMPO.HE", position: 9999 },
        { ticker: "FSR", position: 7777 },
        { ticker: "EVO.ST", position: 5555 },
      ]);
    });
  });
});
