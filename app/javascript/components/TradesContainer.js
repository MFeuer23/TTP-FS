import React, { Component } from 'react'
import Trade from './Trade'

class TradesContainer extends Component {
  constructor() {
    super();
    this.state = {
      trades: []
    }
  }

  componentDidMount = () => {
    fetch('/trades', {"Accept": "application/json"})
      .then((res) => { return res.json() })
      .then((data) => { this.setState({trades: data}) })
      .catch((err) => { console.log(err) })
  }



  render(){
    return (
      <div>
      <h2>Transactions</h2>
        {this.state.trades.map((trade, i) =>
          <Trade key={i} ticker={trade.ticker} qty={trade.qty} price={trade.transaction_price * trade.qty}/>)}
      </div>
    )
  }

}

export default TradesContainer;
