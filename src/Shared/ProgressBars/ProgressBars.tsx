import { ShipmentState as statusArray } from '../../data/translate';
import Bar from '../../Shared/Bar/Bar';

const ProgressBars = ({ shipmentState }: any) => {
  return (
    <div className='progress-bars'>
      {statusArray[shipmentState].map((item: string, index: number) => {
        return <Bar barClass={item} key={index} />;
      })}
    </div>
  );
};

export default ProgressBars;
