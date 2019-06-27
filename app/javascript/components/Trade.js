import React from 'react';

const Trade = props => {

  return (
    <div className="transaction" >
      BUY ({props.ticker.toUpperCase()}) - {props.qty} {props.pluralize(props.qty)} @ {props.price.toFixed(2)}
    </div>
  )
}

export default Trade;
