import React, { Component } from 'react'
import Stock from './Stock'

class StocksContainer extends Component {
  constructor() {
    super();
    this.state = {
      stocks: []
    }
  }

  componentDidMount = () => {
    fetch('/stocks', {"Accept": "application/json"})
      .then((res) => { return res.json() })
      .then((data) => { this.setState({stocks: data}) })
      .catch((err) => { console.log(err) })
  }



  render(){
    return (
      <div>
        Portfolio
        {this.state.stocks ? this.state.stocks.map((stock) =>
          <Stock key={stock.id} ticker={stock.ticker_symbol} qty={stock.qty}/>) : "buy some stocks" }
      </div>
    )
  }

}

export default StocksContainer;
