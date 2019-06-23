import React from 'react';

const Trade = props => {
  return (
    <div>
      BUY ({props.ticker.toUpperCase()}) - {props.qty} Shares @ {props.price}
    </div>
  )
}

export default Trade;
