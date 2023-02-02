import './Shipment.scss';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { Order } from '../../data/translate';

const Shipment = () => {
  const shipmentData = useSelector((state: RootState) => state.shipment.data);
  const { TrackingNumber, CurrentStatus: state } = shipmentData;
  const shipmentState = state.state;

  return (
    <section className='shipment-section'>
      <p className='shipment-header'>رقم الشحنة {TrackingNumber}</p>
      <span className='display-xl'>{Order[shipmentState]}</span>

      <div className='progress-bars'>
        <hr className='bar' />
        <hr className='bar' />
        <hr className={shipmentState === 'DELIVERED_TO_SENDER' ? '' : 'bar'} />
      </div>
    </section>
  );
};

export default Shipment;
