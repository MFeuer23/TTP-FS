import React, { Component } from 'react'
import HelloWorld from './HelloWorld'

class StocksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: props.current_user,
      ticker: "",
      qty: "",
      stockData: {},
      errors: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    fetch(`https://cloud.iexapis.com/stable/stock/${this.state.ticker}/quote?token=pk_b1a1b59742544768ba38683c68c5337b`)
      .then((res) => { return res.json() })
      .then((data) => { return this.setState(
        {...this.state, stockData:
          {current_price: data.latestPrice,
          open_price: data.open}
        }
      ); }
    ).then(() => this.props.cashUpdate(this.state))
    .then(() => this.setState({...this.state, ticker: "", qty: ""}))
      .catch(() => { this.setState({...this.state, errors: "Ticker Symbol Not Found"}) })

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
      }).then(() => this.props.fetchStocks())
      .catch((err) => { console.log(err) })
    }
  }

  render(){
    return (
      <div>
        {this.state.errors}
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="ticker" placeholder="Ticker" value={this.state.ticker} onChange={event => this.handleChange(event)} required />
          <input type="number" min="1" step="1" name="qty" placeholder="Qty" value={this.state.qty} onChange={event => this.handleChange(event)} required />

          <input type="submit" value="submit"/>
        </form>
        <HelloWorld greeting="hello"/>

      </div>
    )
  }

}

export default StocksForm;
