import { IMenuItems } from '../types/layout.types';
import './siteMenuDesktop.scss'

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

export const SiteMenuDesktop = () => {
  return (
    <nav id='siteMenuDesktop'>
      <ul id='siteMenuLinks'>
      {menuItems.map(menuItem =>
        <li key={menuItem.label}><a href={menuItem.url}>{menuItem.label}</a></li>
      )}
      </ul>
    </nav>
  )
}