import { useState } from 'react';
import svg from './assets/Images/LogoAr.svg';
import Main from './components/Main/Main';
import type { RootState } from './store/store';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import preParsePostFormat from 'dayjs/plugin/preParsePostFormat';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';

function App() {
  dayjs.locale('ar');
  dayjs.extend(relativeTime);
  dayjs.extend(preParsePostFormat);
  dayjs.extend(localizedFormat);
  const lang = useSelector((state: RootState) => state.language.language);

  return (
    <div className='container'>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
