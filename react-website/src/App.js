import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom' 

function App() {
  return (
    // <div className="App">
    //   <h1>Hullo</h1>
    // </div>

    <Router>
      <NavBar />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>

  );
}

export default App;
