import React, { Component } from 'react'

class Stock extends Component {
  constructor() {
    super();
    this.state = {
      open_price: 0,
      current_price: 0
    }
  }

  componentDidMount = () => {
    fetch(`https://cloud.iexapis.com/stable/stock/${this.props.ticker}/quote?token=pk_b1a1b59742544768ba38683c68c5337b`)
      .then((res) => { return res.json() })
      .then((data) => { return this.setState(

          {current_price: data.latestPrice,
          open_price: data.open}

      ); }
    )
      .catch((err) => { console.log(err) })
  }

  stockColor = () => {
    if (this.state.open_price > this.state.current_price) {
      return "red"
    } else if (this.state.open_price < this.state.current_price) {
      return "green"
    } else {
      return "grey"
    }
  }

  render(){
    return (
      <div className={this.stockColor()}>
        {this.props.ticker.toUpperCase()} - {this.props.qty} Shares - ${this.state.qty * this.state.current_price}
      </div>
    )
  }

}

export default Stock;
