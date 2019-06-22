import React, { Component } from 'react'

class TradesContainer extends Component {
  constructor() {
    super();
    this.state = {
      trades: []
    }
  }

  componentDidMount = () => {
    fetch('/trades', {"Accept": "application/json"})
      .then((res) => { return res.json() })
      .then((data) => { this.setState({trades: data}) })
      .catch((err) => { console.log(err) })
  }



  render(){
    return (
        "what"
    )
  }

}

export default TradesContainer;
