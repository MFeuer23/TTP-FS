import React, { Component } from 'react'
import Stock from './Stock'
import StocksForm from './StocksForm'

class StocksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      cash: 0,
      errors: "",
      portfolio_value: 0
    }
  }

  componentDidMount = () => {
    this.fetchStocks();
    this.fetchUserCash();
  }

  fetchStocks = () => {
    fetch('/stocks', {"Accept": "application/json"})
      .then((res) => { return res.json() })
      .then((data) => { this.setState({...this.state, stocks: data}) })
      .catch((err) => { console.log(err) })
  }

  fetchUserCash = () => {
    fetch(`/users/${this.props.current_user.id}`, {"Accept": "application/json"})
      .then((res) => { return res.json() })
      .then((data) => { this.setState({...this.state, cash: data }) })
      .catch((err) => { console.log(err) })
  }

  updateUserCash = () => {
    fetch(`/users/${this.props.current_user.id}`,
      {method: "PUT",
      headers: {"Content-Type": "application/json",
      "Accept": "application/json",
      'X-CSRF-Token': this.props.token
      },
      body: JSON.stringify({cash: this.state.cash})
    })
    .catch((err) => { console.log(err) })
  }


  toArray = (stocks) => {
    let array = []
    for (let stock in stocks) {
      array.push([stock, stocks[stock]])
    }
    return array;
  }

  cashUpdate = (price) => {
    if (this.state.cash >= (price)) {
      this.setState({...this.state, cash: (this.state.cash - price) })
      this.updateUserCash(price);

    } else {
      this.setState({...this.state, errors: "not enough money"})
    }
  }

  portfolioValue = (total) => {
    this.setState({portfolio_value: this.state.portfolio_value += total})
  }


  render(){
    return (
      <div>
        <div className="error">
          {this.state.errors}
        </div>
        <div className="right">
          <div className="cash">
            <h2>Cash: ${this.state.cash.toFixed(2)}</h2>
          </div>
          <StocksForm current_user={this.props.current_user} token={this.props.token} fetchStocks={this.fetchStocks} cashUpdate={this.cashUpdate} />
        </div>
        <div className="left">
          <h2>Portfolio (${this.state.portfolio_value.toFixed(2)})</h2>
          {this.toArray(this.state.stocks).map((stock, i) =>
            <Stock key={i} ticker={stock[0]} qty={stock[1]} portfolioValue={this.portfolioValue} />
          )}
        </div>
    </div>
    )
  }

}

export default StocksContainer;
