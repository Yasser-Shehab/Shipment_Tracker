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
  const [isLoading, setIsLoading] = useState(false);
  const [trackCode, setTrackCode] = useState('');
  const trackCodeRef: any = useRef(null);

  const fetchData = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (!data.error) {
        dispatch(storeData(data));
      } else {
        dispatch(storeError(data));
      }
    } catch (error) {
      dispatch(storeError(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    const trackValue = trackCodeRef.current.value;
    if (!trackCodeRef && trackValue === '') return;
    setTrackCode(trackValue);
    fetchData(`${API}${trackValue}`);
  };
  return (
    <section className='main-container'>
      <h4 className='header-section'>تتبع شحنتك</h4>

      <div className='search-container'>
        <input type='text' placeholder='رقم التتبع' className='search-input' ref={trackCodeRef} />
        <button className='search-button' onClick={handleSubmit}>
          <img src={searchIcon} alt='Search Icon' />
        </button>
      </div>

      {isLoading ? <Loading /> : null}

      {(shipmentData || shipmentError) && !isLoading ? <Shipment trackCode={trackCode} /> : null}
    </section>
  );
};

export default Main;
