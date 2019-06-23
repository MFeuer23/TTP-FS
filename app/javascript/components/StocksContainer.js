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

  toArray = (stocks) => {
    let array = []
    for (let stock in stocks) {
      array.push([stock, stocks[stock]])
    }
    return array;
  }


  render(){
    return (
      <div>
        <StocksForm current_user={this.props.current_user} token={this.props.token}/>
        Portfolio
        {this.toArray(this.state.stocks).map((stock, i) =>
          <Stock key={i} ticker={stock[0]} qty={stock[1]}/>)}
      </div>
    )
  }

}

export default StocksContainer;
