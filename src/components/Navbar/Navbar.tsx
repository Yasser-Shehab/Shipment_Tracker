import React, { useState } from 'react';
import './Navbar.scss';
import LogoAr from '../../assets/Images/LogoAr.svg';
import type { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../store/language';
import arrow from '../../assets/Images/SmallArrow.svg';
import { Arabic, English } from '../../data/translate.js';

const Navbar = () => {
  const [showLang, setShowLang] = useState(false);
  const dispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.language.language);

  const handleLanguageChange = () => {
    if (lang === 'en') {
      dispatch(setLanguage('ar'));
    } else {
      dispatch(setLanguage('en'));
    }
  };

  const handleShowLang = () => {
    setShowLang(!showLang);
  };

  return (
    <nav className='nav'>
      <div>
        <div>
          <img src={LogoAr} alt='Bosta Logo' className='logo' />
        </div>
      </div>

      <div className='language'>
        <div className='language-change' onClick={handleShowLang}>
          <p>{lang === 'en' ? English['en'] : Arabic['ar']}</p>
          <span>
            <img src={arrow} alt='arrow' className='arrow-image' />
          </span>
        </div>
        {showLang ? (
          <ul>
            <li onClick={handleLanguageChange}>
              {lang === 'en' ? <p>English</p> : <p>اللغة العربية</p>}
            </li>
            <li onClick={handleLanguageChange}>
              {lang === 'en' ? <p>Arabic</p> : <p>اللغة الانجليزية</p>}
            </li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
