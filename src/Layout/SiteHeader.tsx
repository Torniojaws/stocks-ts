import { Link } from "react-router-dom";
import "./siteHeader.scss";

export const SiteHeader = () => {
  return (
    <header id="siteHeader">
      <Link to={"/"}>
        <h1>Stocks</h1>
      </Link>
    </header>
  );
};
