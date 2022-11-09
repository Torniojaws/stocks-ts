import { Stock } from "../../types/portfolio.types";
import "./portfolio.scss";

interface IParams {
  stock: Stock;
}

export const PortfolioRow = ({ stock }: IParams) => {
  return (
    <div id="portfolioRowContainer">
      <div className="portfolioRow desktop">
        <div className="column desktop">{stock.ticker}</div>
        <div className="column desktop">{stock.name}</div>
        <div className="column desktop">{stock.position}</div>
        <div className="column desktop">
          {stock.costAverage} {stock.costAverageCurrency}
        </div>
        <div className="column desktop">{stock.costAverage}</div>
        <div className="column desktop">{stock.currency}</div>
        <div className="column desktop">{stock.sharePrice}</div>
        <div className="column desktop">{stock.changePercentage}</div>
      </div>
      <div className="portfolioRow mobile">
        <div className="column mobile">{stock.name}</div>
        <div className="column mobile">{stock.position}</div>
        <div className="column mobile">{stock.costAverage}</div>
        <div className="column mobile">{stock.sharePrice}</div>
        <div className="column mobile">{stock.changePercentage}%</div>
      </div>
    </div>
  );
};
