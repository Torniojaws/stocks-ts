import { useState } from 'react';
import { MobileMenuOpen } from './components/MobileMenuOpen';
import { HamburgerButton } from '../components/Buttons/HamburgerButton';
import './siteMenuMobile.scss';

export const SiteMenuMobile = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  
  return (
    <nav id='siteMenuMobileButtonOrMenu'>
      { menuVisible ? <MobileMenuOpen menuVisible={menuVisible} setMenuVisible={setMenuVisible}/> : <HamburgerButton menuVisible={menuVisible} setMenuVisible={setMenuVisible}/> }
    </nav>
  )
}