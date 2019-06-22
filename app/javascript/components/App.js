import React from 'react';
import './App.css';
import StocksForm from './StocksForm';
import NavBar from './NavBar'
import StocksContainer from './StocksContainer'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <StocksForm current_user={props.current_user}/>
        <StocksContainer />
      </header>

    </div>
  );
}

export default App;
