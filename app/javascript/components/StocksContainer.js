import React, { Component } from 'react'
import Stock from './Stock'
import StocksForm from './StocksForm'

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
        <StocksForm current_user={this.props.current_user} token={this.props.token}/>
        Portfolio
        {this.state.stocks ? this.state.stocks.map((stock) =>
          <Stock key={stock.id} ticker={stock.ticker_symbol} qty={stock.qty}/>) : "buy some stocks" }
      </div>
    )
  }

}

export default StocksContainer;
