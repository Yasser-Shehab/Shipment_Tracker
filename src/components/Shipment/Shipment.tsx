import './Shipment.scss';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { Order } from '../../data/translate';
import Bar from '../../Shared/Bar/Bar';
import { ShipmentState as statusArray } from '../../data/translate';
import alert from '../../assets/Images/Warning.svg';
import { Errors } from '../../data/translate';
import 'dayjs/locale/ar';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const Shipment = (props: any) => {
  dayjs.locale('ar');
  dayjs.extend(relativeTime);

  console.log(dayjs.locale());
  console.log(dayjs('2018-05-05').format('MMM'));
  const dateToFormat = '1976-04-19T12:59-0500';
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
    const { TrackingNumber, CurrentStatus: state } = shipmentData;
    const shipmentState = state.state;
    const shipmentDate = state.timestamp;

    return (
      <section className='shipment-section'>
        <p className='shipment__header'>رقم الشحنة {TrackingNumber}</p>
        <span className='display-xl'>{Order[shipmentState]}</span>
        <div className='progress-bars'>
          {statusArray[shipmentState].map((item: string, index: number) => {
            return <Bar barClass={item} key={index} />;
          })}
        </div>
        <div></div>
        <div className='tracking__details'>اخر تحديث من {dayjs(shipmentDate).fromNow()} مضت</div>
      </section>
    );
  } else {
    return null;
  }
};

export default Shipment;
