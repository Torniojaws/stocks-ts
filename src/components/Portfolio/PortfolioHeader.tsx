import "./portfolio.scss";

interface IParams {
  clicked: Function;
}

export const PortfolioHeader = ({ clicked }: IParams) => {
  return (
    <div className="portfolioHeaderContainer">
      <div className="portfolioHeader desktop">
        <div className="column desktop" onClick={() => clicked("ticker")}>
          Ticker
        </div>
        <div className="column desktop" onClick={() => clicked("name")}>
          Name
        </div>
        <div className="column desktop" onClick={() => clicked("position")}>
          Position
        </div>
        <div className="column desktop" onClick={() => clicked("costAverage")}>
          Cost average
        </div>
        <div className="column desktop" onClick={() => clicked("currency")}>
          Currency
        </div>
        <div className="column desktop" onClick={() => clicked("sharePrice")}>
          Share price
        </div>
        <div
          className="column desktop"
          onClick={() => clicked("changePercentage")}
        >
          Change-%
        </div>
      </div>
      <div className="portfolioHeader mobile">
        <div className="column mobile" onClick={() => clicked("ticker")}>
          Ticker
        </div>
        <div className="column mobile" onClick={() => clicked("position")}>
          Pos.
        </div>
        <div className="column mobile" onClick={() => clicked("costAverage")}>
          CostAvg
        </div>
        <div className="column mobile" onClick={() => clicked("sharePrice")}>
          Price
        </div>
        <div
          className="column mobile"
          onClick={() => clicked("changePercentage")}
        >
          Chg
        </div>
      </div>
    </div>
  );
};
