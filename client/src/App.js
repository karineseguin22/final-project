import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Component
import Home from './pages/Home';
import Merchant_dashboard from './pages/Merchant_dashboard';
import Deals from './pages/Deals';

class App extends Component {

 state = {text:'hello ll'}
  

  componentDidMount() {
    M.AutoInit();

  }
  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/deals" component={Deals} />
        <Route exact path="/merchants" component={Merchant_dashboard} /> 
      </Router>
      </div>
    );
  }
}

export default App;
