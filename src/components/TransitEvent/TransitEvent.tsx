import { Transit } from '../../data/translate';
import dayjs from 'dayjs';
import './TransitEvent.scss';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

const TransitEvent = (props: any) => {
  const { shipmentEvents } = props;
  return (
    <>
      {shipmentEvents.map((item: any, index: number) => {
        return (
          <li key={index}>
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
                  <span className='hub'>{item.hub}</span>
                  <span className='log__date'>{`الساعة ${dayjs(item.timestamp).format(
                    'LT'
                  )}`}</span>
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
