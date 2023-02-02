import React from 'react';

const Bar = (props: any) => {
  return <hr className={`bar bar-${props.barClass}`} />;
};

export default Bar;
