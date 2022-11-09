import { useEffect, useState } from "react";
import { getPortfolios } from "../services/portfolioService";
import { Portfolio } from "../components/Portfolio/Portfolio";
import { IPortfolio } from "../types/portfolio.types";
import "./views.scss";

export const PortfolioView = () => {
  const [portfolios, setPortfolios] = useState<IPortfolio[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // User can have multiple portfolios
  useEffect(() => {
    setIsMounted(true);

    const getPortfoliosData = async () => {
      const userId = 1; // TODO: Later on, get this from logged in user's data
      const data = await getPortfolios(userId);
      setPortfolios(data);
    };

    getPortfoliosData().catch((err) => console.error(err));

    setIsMounted(false);
  }, [isMounted]);

  return (
    <div className="viewContainer">
      {portfolios.map((portfolio) => (
        <Portfolio key={portfolio.portfolioName} data={portfolio} />
      ))}
    </div>
  );
};
