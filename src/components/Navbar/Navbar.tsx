import React, { useState } from 'react';
import './Navbar.scss';
import LogoAr from '../../assets/Images/LogoAr.svg';
import LanguageChange from '../../Shared/LanguageChange/LanguageChange';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div>
        <div>
          <img src={LogoAr} alt='Bosta Logo' className='logo' />
        </div>
      </div>
      <LanguageChange />
    </nav>
  );
};

export default Navbar;
