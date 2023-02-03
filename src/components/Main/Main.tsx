import './Main.scss';
import searchIcon from '../../assets/Images/SearchIcon.svg';
import { useState, useRef } from 'react';
import type { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { storeData, storeError } from '../../store/shipment';
import Shipment from '../Shipment/Shipment';
import Loading from '../../Shared/Loading/Loading.js';

const API = 'https://tracking.bosta.co/shipments/track/';

const Main = () => {
  const dispatch = useDispatch();
  const shipmentData = useSelector((state: RootState) => state.shipment.data);
  const shipmentError = useSelector((state: RootState) => state.shipment.error);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [trackCode, setTrackCode] = useState('');

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
      <textarea value='9442984/1094442/6636234'></textarea>
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
      {isLoading ? <Loading /> : null}

      {shipmentData || shipmentError ? <Shipment /> : null}
    </section>
  );
};

export default Main;
