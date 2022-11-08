import { ReactComponent as HamburgerIcon } from './hamburger.svg';
import './hamburgerButton.scss'

interface IParams {
  menuVisible: boolean;
  setMenuVisible: Function;
}

export const HamburgerButton = ({ menuVisible, setMenuVisible }: IParams) => {
  return (
    <div onClick={() => setMenuVisible(!menuVisible)}>
      <HamburgerIcon id='hamburgerButton' />
    </div>
  )
}