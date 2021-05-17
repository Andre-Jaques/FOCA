import {BrowserRouter as Router} from'react-router-dom';
import Routes from '../src/pages/routes';
import Menu from './menu';
import React from 'react';




function App() {
  return (
    <>
      <Router>
        
        <Routes />
      </Router>
    </>
    
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
