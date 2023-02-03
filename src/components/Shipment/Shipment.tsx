import './Shipment.scss';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { Order } from '../../data/translate';
import Bar from '../../Shared/Bar/Bar';
import { ShipmentState as statusArray } from '../../data/translate';
import alert from '../../assets/Images/Warning.svg';
import { Errors } from '../../data/translate';

const Shipment = (props: any) => {
  const shipmentData = useSelector((state: RootState) => state.shipment.data);
  const shipmentError = useSelector((state: RootState) => state.shipment.error);

  console.log(shipmentError);
  if (shipmentError) {
    return (
      <section className='shipment-section'>
        <p className='shipment-header'>رقم الشحنة {props.trackCode}</p>
        <div className='shipment-notfound'>
          <span>
            <img src={alert} alt='Alert' />
          </span>
          <p>{Errors['ErrorAr']}</p>
        </div>
      </section>
    );
  } else if (shipmentData && !shipmentError) {
    const { TrackingNumber, CurrentStatus: state } = shipmentData;
    const shipmentState = state.state;
    return (
      <section className='shipment-section'>
        <p className='shipment-header'>رقم الشحنة {TrackingNumber}</p>
        <span className='display-xl'>{Order[shipmentState]}</span>
        <div className='progress-bars'>
          {statusArray[shipmentState].map((item: string, index: number) => {
            return <Bar barClass={item} key={index} />;
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Shipment;
