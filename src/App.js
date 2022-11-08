import './App.scss';
import { SiteHeader } from './Layout/SiteHeader';
import { SiteMenuMobile } from './Layout/SiteMenuMobile';
import { SiteMenuDesktop } from './Layout/SiteMenuDesktop';

const App = () => {
  return (
    <div className="App">
      <SiteMenuMobile />
      <SiteHeader />
      <SiteMenuDesktop />
    </div>
  );
}

export default App;
