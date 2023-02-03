import { useState } from 'react';
import svg from './assets/Images/LogoAr.svg';
import Main from './components/Main/Main';
import type { RootState } from './store/store';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';

import ShipmentTrack from './Pages/ShipmentTrack/ShipmentTrack';

function App() {
 
  const lang = useSelector((state: RootState) => state.language.language);

  return (
    <div className='container'>
      <ShipmentTrack />
    </div>
  );
}

export default App;
