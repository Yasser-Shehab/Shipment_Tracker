import './Shipment.scss';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { Order } from '../../data/translate';
import alert from '../../assets/Images/Warning.svg';
import { Errors } from '../../data/translate';
import 'dayjs/locale/ar';
import dayjs from 'dayjs';
import Divider from '../../Shared/Divider/Divider';
import TransitEvent from '../TransitEvent/TransitEvent';
import ProgressBars from '../../Shared/ProgressBars/ProgressBars';

const Shipment = (props: any) => {
  const shipmentData = useSelector((state: RootState) => state.shipment.data);
  const shipmentError = useSelector((state: RootState) => state.shipment.error);

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
    const { TrackingNumber, CurrentStatus: state, TransitEvents } = shipmentData;
    const shipmentState = state.state;
    const shipmentDate = state.timestamp;
    console.log(TransitEvents);
    const shipmentEvents = TransitEvents.slice(0).reverse();
    return (
      <section className='shipment-section'>
        <p className='shipment__header'>رقم الشحنة {TrackingNumber}</p>
        <span className='display-xl'>{Order[shipmentState]}</span>
        <ProgressBars shipmentState={shipmentState} />
        <div></div>
        <div className='tracking__details'>{`(اخر تحديث من ${dayjs(
          shipmentDate
        ).fromNow()} مضت.)`}</div>
        <div>
          <Divider />
        </div>
        <div className='shipment--timeline'>
          <div className='timeline__title'>تفاصيل التتبع</div>
          <div className='timeline__logs'>
            <ul>
              <TransitEvent shipmentEvents={shipmentEvents} />
            </ul>
          </div>
        </div>
        <Divider />
      </section>
    );
  } else {
    return null;
  }
};

export default Shipment;
