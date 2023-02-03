import React from 'react';
import Main from '../../components/Main/Main';
import Navbar from '../../components/Navbar/Navbar';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import preParsePostFormat from 'dayjs/plugin/preParsePostFormat';
import * as localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.locale('ar');
dayjs.extend(relativeTime);
dayjs.extend(preParsePostFormat);
dayjs.extend(localizedFormat);

const ShipmentTrack = () => {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
};

export default ShipmentTrack;
