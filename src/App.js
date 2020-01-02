import React from 'react';
import logo from './logo.svg';
import './App.css';
import BreweriesList from './components/breweriesList.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BreweriesList/>
      </header>
    </div>
  );
}

export default App;
