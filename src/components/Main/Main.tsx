import './Main.scss';
import searchIcon from '../../assets/Images/SearchIcon.svg';
import { useState, useRef } from 'react';
import type { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { storeData, storeError } from '../../store/shipment';
import Shipment from '../Shipment/Shipment';

const API = 'https://tracking.bosta.co/shipments/track/';

const Main = () => {
  const dispatch = useDispatch();
  const shipmentData = useSelector((state: RootState) => state.shipment.data);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [trackCode, setTrackCode] = useState('');
  console.log(isLoading);

  const fetchData = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!data.error) {
        dispatch(storeData(data));
      } else {
        dispatch(storeError(data));
      }
      console.log(data);
    } catch (error) {
      setError(error as Error | null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    fetchData(`${API}${trackCode}`);
  };
  return (
    <section className='main-container'>
      <h4 className='header-section'>تتبع شحنتك</h4>
      <div className='search-container'>
        <input
          type='text'
          placeholder='رقم التتبع'
          className='search-input'
          onChange={(e) => setTrackCode(e.target.value)}
        />
        <button className='search-button' onClick={handleSubmit}>
          <img src={searchIcon} alt='Search Icon' />
        </button>
      </div>
      {shipmentData ? <Shipment /> : null}
    </section>
  );
};

export default Main;
