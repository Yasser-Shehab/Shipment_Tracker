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
import preParsePostFormat from 'dayjs/plugin/preParsePostFormat';
import Divider from '../../Shared/Divider/Divider';
import 'dayjs/locale/ar';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
import { Transit } from '../../data/translate';

const Shipment = (props: any) => {
  dayjs.locale('ar');
  dayjs.extend(relativeTime);
  dayjs.extend(preParsePostFormat);
  dayjs.extend(localizedFormat);

  // console.log(dayjs('2018-05-05').format('MMM'));
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
    const { TrackingNumber, CurrentStatus: state, TransitEvents } = shipmentData;
    const shipmentState = state.state;
    const shipmentDate = state.timestamp;
    console.log(TransitEvents);
    const shipmentEvents = TransitEvents.slice(0).reverse();
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
              {shipmentEvents.map((item: any, index: number) => {
                return (
                  <li className='transit-event' key={index}>
                    <div className='log-card'>
                      <div className='timeline-connector'>
                        <div className='head'></div>
                        <div className='tail'></div>
                      </div>
                      <div className='log-content'>
                        <div className='log__heading'>
                          {`${dayjs(item.timestamp).locale('ar').format('dddd, DD MMM')}`}
                        </div>
                        <div className='log__body'>
                          <span>{Transit[item.state]}</span>
                          <span className='log__date'>{`الساعة ${dayjs(item.timestamp)
                            .locale('ar')
                            .format('LT')}`}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Shipment;
