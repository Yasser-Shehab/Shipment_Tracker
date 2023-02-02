import React from 'react';
import './Navbar.scss';
import LogoAr from '../../assets/Images/LogoAr.svg';
import type { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../store/language';
import arrow from '../../assets/Images/SmallArrow.svg';
import { Arabic, English } from '../../data/translate.js';

const Navbar = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.language.language);
  console.log(lang);

  const handleLanguageChange = () => {
    if (lang === 'en') {
      dispatch(setLanguage('ar'));
    } else {
      dispatch(setLanguage('en'));
    }
  };

  return (
    <nav className='nav'>
      <div>
        <img src={LogoAr} alt='Bosta Logo' className='logo' />
      </div>
      <div className='language' onClick={handleLanguageChange}>
        <p>{lang === 'en' ? English['en'] : Arabic['ar']}</p>
        <span>
          <img src={arrow} alt='arrow' className='arrow-image' />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
