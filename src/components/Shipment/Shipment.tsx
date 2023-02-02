import './Shipment.scss';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { Order } from '../../data/translate';
import Bar from '../../Shared/Bar/Bar';
import { ShipmentState as statusArray } from '../../data/translate';

const Shipment = () => {
  const shipmentData = useSelector((state: RootState) => state.shipment.data);
  const { TrackingNumber, CurrentStatus: state } = shipmentData;
  const shipmentState = state.state;

  return (
    <section className='shipment-section'>
      <p className='shipment-header'>رقم الشحنة {TrackingNumber}</p>
      <span className='display-xl'>{Order[shipmentState]}</span>

      <div className='progress-bars'>
        {statusArray[shipmentState].map((item: string) => {
          return <Bar barClass={item} />;
        })}
      </div>
    </section>
  );
};

export default Shipment;
