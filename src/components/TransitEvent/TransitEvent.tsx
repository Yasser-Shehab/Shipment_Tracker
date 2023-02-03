import { Transit } from '../../data/translate';
import dayjs from 'dayjs';

const TransitEvent = (props: any) => {
  const { shipmentEvents } = props;
  return (
    <>
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
    </>
  );
};

export default TransitEvent;
