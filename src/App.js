import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SiteHeader } from "./Layout/SiteHeader";
import { SiteMenuMobile } from "./Layout/SiteMenuMobile";
import { SiteMenuDesktop } from "./Layout/SiteMenuDesktop";
import { LandingView } from "./views/LandingView";
import { PortfolioView } from "./views/PortfolioView";
import { TransactionsView } from "./views/TransactionsView";
import { DividendView } from "./views/DividendView";
import { PlanningView } from "./views/PlanningView";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <SiteMenuMobile />
        <SiteHeader />
        <SiteMenuDesktop />
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path="/portfolio" element={<PortfolioView />} />
          <Route path="/transactions" element={<TransactionsView />} />
          <Route path="/dividends" element={<DividendView />} />
          <Route path="/planning" element={<PlanningView />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
