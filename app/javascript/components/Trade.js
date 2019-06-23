import React from 'react';

const Trade = props => {
  return (
    <div>
      BUY ({props.ticker.toUpperCase()}) - {props.qty} Shares @ {props.price.toFixed(2)}
    </div>
  )
}

export default Trade;
