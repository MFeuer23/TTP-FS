import React, { Component } from 'react'


class StocksForm extends Component {
  constructor() {
    super();
    this.state = {
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
    fetch(`https://cloud.iexapis.com/stable/stock/${this.state.ticker}/quote?token=pk_b1a1b59742544768ba38683c68c5337b`)
      .then((res) => { return res.json() })
      .then((data) => { return this.setState(
        {...this.state, stockData:
          {current_price: data.latestPrice,
          open_price: data.open}
        }
      ); }
    ).then(() => this.props.cashUpdate(this.state.qty * this.state.stockData.current_price))
    .then(() => this.setState({...this.state, ticker: "", qty: ""}))
      .catch((err) => { this.setState({...this.state, errors: "Ticker Symbol Not Found"}), console.log(err) })

  }

  componentDidUpdate = (previousProps, previousState) => {
    if (previousState.stockData !== this.state.stockData) {
      fetch('/trades',
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
      <div className="form">

        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="ticker" placeholder="Ticker" value={this.state.ticker} onChange={event => this.handleChange(event)} required />
          <br />
          <input type="number" min="1" step="1" name="qty" placeholder="Qty" value={this.state.qty} onChange={event => this.handleChange(event)} required />
          <br />
          <input className="button" type="submit" value="submit"/>
        </form>
        <div className="error">
          {this.state.errors}
        </div>

      </div>
    )
  }

}

export default StocksForm;
