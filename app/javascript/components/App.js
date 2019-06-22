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


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StocksContainer current_user={this.props.current_user} token={this.props.token}/>
          <TradesContainer />
        </header>

      </div>
    );
  }
}

export default App;
