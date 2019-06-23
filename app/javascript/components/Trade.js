import React from 'react';

const Trade = props => {
  debugger;
  return (
    <div>
      BUY ({props.ticker.toUpperCase()}) - {props.qty} Shares @ {props.price}
    </div>
  )
}

export default Trade;
