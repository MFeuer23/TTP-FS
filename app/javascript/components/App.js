import React, { Component } from 'react'
import './App.css';
import StocksForm from './StocksForm';
import NavBar from './NavBar'
import StocksContainer from './StocksContainer'
import TradesContainer from './TradesContainer'

class App extends Component {
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StocksForm current_user={this.props.current_user}/>
          <StocksContainer trades={this.state.trades}/>
          <TradesContainer trades={this.state.trades}/>
        </header>

      </div>
    );
  }
}

export default App;
