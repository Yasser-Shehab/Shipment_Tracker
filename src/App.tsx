import { useState } from 'react';
import svg from './assets/Images/LogoAr.svg';

function App() {
  const [count, setCount] = useState(0);

  return <img src={svg} alt='logo' style={{ height: 100 }} />;
}

export default App;
