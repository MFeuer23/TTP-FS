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
    //fetch from stocksController
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
