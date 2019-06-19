import React, { Component } from 'react'

class EventsForm extends Component {
  constructor() {
    super();
    this.state = {
      ticker: "",
      qty: ""
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
      .then((data) => { console.log(data); })
      .catch((err) => { console.log(err) })
  }

  render(){
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="ticker" placeholder="Ticker" value={this.state.ticker} onChange={event => this.handleChange(event)} />
          <input type="text" name="qty" placeholder="Qty" value={this.state.qty} onChange={event => this.handleChange(event)} />

          <input type="submit" value="submit"/>
        </form>

      </div>
    )
  }

}

export default EventsForm;
