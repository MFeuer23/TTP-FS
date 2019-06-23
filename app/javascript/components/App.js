import React, { Component } from 'react'
import './App.css';
import StocksForm from './StocksForm';
import StocksContainer from './StocksContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
          <StocksContainer current_user={this.props.current_user} token={this.props.token}/>
      </div>
    );
  }
}

export default App;
