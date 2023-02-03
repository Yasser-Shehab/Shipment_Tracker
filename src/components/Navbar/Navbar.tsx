
import './Navbar.scss';
import LogoAr from '../../assets/Images/LogoAr.svg';
import LanguageChange from '../../Shared/LanguageChange/LanguageChange';
import { Logo } from '../../Shared/Logo/Logo';

const Navbar = () => {
  return (
    <nav className='nav'>
      <Logo logo={LogoAr}/>
      <LanguageChange />
    </nav>
  );
};

export default Navbar;
