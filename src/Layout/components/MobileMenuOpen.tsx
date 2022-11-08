import { HamburgerButton } from '../../components/Buttons/HamburgerButton';
import { IMenuItems } from '../../types/layout.types';
import './mobileMenuOpen.scss';

const menuItems: IMenuItems[] = [
  {
    label: 'Portfolio',
    url: '/portfolio',
  },
  {
    label: 'Transactions',
    url: '/transactions',
  },
  {
    label: 'Dividends',
    url: '/dividends',
  },
  {
    label: 'Planning',
    url: '/planning',
  }
];

interface IParams {
  menuVisible: boolean;
  setMenuVisible: Function;
}

export const MobileMenuOpen = ({ menuVisible, setMenuVisible }: IParams) => {
  return (
    <div id='openedMobileMenuContainer'>
      <nav id='menuItems'>
        <HamburgerButton menuVisible={menuVisible} setMenuVisible={setMenuVisible}/>
        <ul id='siteMenuMobileLinks'>
        {menuItems.map(menuItem =>
          <li key={menuItem.label}><a href={menuItem.url}>{menuItem.label}</a></li>
        )}
        </ul>
      </nav>
      <div id='closeArea' onClick={() => setMenuVisible(false)}></div>
    </div>
  )
}
