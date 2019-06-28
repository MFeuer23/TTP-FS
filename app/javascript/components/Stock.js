import React, { Component } from 'react'

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open_price: 0,
      current_price: 0,
      qty: this.props.qty
    }
  }

  componentDidMount = () => {
    fetch(`https://cloud.iexapis.com/stable/stock/${this.props.ticker}/quote?token=pk_b1a1b59742544768ba38683c68c5337b`)
      .then((res) => { return res.json() })
      .then((data) => { return this.setState(

          {current_price: data.latestPrice,
          open_price: data.open}

      ); }
    ).then(() => this.props.portfolioValue(this.state.current_price * this.state.qty), console.log(this.state))
      .catch((err) => { console.log(err) })
  }

  componentDidUpdate = (previousProps, previousState) => {
    if (this.props.qty !== previousProps.qty) {
      this.props.portfolioValue(this.state.current_price * (this.props.qty - previousProps.qty))
    }
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
      <div className="stock">
        <div className={this.stockColor()}>
          {this.props.ticker.toUpperCase()} - {this.props.qty} Shares - ${(this.props.qty * this.state.current_price).toFixed(2)}
        </div>
      </div>
    )
  }

}

export default Stock;
