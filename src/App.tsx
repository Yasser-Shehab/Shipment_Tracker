import { useState } from 'react';
import svg from './assets/Images/LogoAr.svg';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
