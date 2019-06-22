import React, { Component } from 'react'
import HelloWorld from './HelloWorld'

class StocksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: props.current_user,
      ticker: "",
      qty: "",
      stockData: {}
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://cloud.iexapis.com/stable/stock/${this.state.ticker}/quote?token=pk_b1a1b59742544768ba38683c68c5337b`)
      .then((res) => { return res.json() })
      .then((data) => { return this.setState(
        {...this.state, stockData:
          {current_price: data.latestPrice,
          open_price: data.open}
        }
      ); }
    )
      .catch((err) => { console.log(err, "HELLO!") })
  }

  componentDidUpdate = (previousProps, previousState) => {
    if (previousState.stockData !== this.state.stockData) {
      fetch('/stocks',
        {method: "POST",
        headers: {"Content-Type": "application/json",
        "Accept": "application/json",
        'X-CSRF-Token': this.props.token
        },
        body: JSON.stringify(this.state)
      })
    }
    return null;
  }

  render(){
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="ticker" placeholder="Ticker" value={this.state.ticker} onChange={event => this.handleChange(event)} />
          <input type="text" name="qty" placeholder="Qty" value={this.state.qty} onChange={event => this.handleChange(event)} />

          <input type="submit" value="submit"/>
        </form>
        <HelloWorld greeting="hello"/>

      </div>
    )
  }

}

export default StocksForm;
