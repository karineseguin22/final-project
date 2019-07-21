import React, { Component } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Component
import Home from './pages/Home';
import MerchantDashboard from './pages/MerchantDashboard';
import Deals from './pages/Deals';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Merchant from './pages/Merchant';

class App extends Component {
  constructor(props){
    super(props);
 this.state = {
   deals: [],
   merchant_deals: [],
   readydom: false
  }
}


  componentDidMount() {
    M.AutoInit();
    fetch('/deals')
    .then(res => res.json())
    .then(data => {
      this.setState({deals: data})
    })
    //for merchant to view their own deals
    //const { handle } = this.props.match.params
    console.log('Hello'); 
    console.log(this.props.match)  
    fetch(`/merchants/7`)
    .then(res => res.json())
    .then(data => {  
      this.setState({merchant_deals: data})
    })

    setTimeout(() =>{
      this.setState({readydom: true})
    },1000)
    
  }

  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/merchants/:id" render={() => <MerchantDashboard isready={this.state.readydom} deals={this.state.merchant_deals}/>}/> 
        <Route exact path="/deals" render={() => <Deals isready={this.state.readydom} deals={this.state.deals}/> } />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Registration} />
        <Route exact path="/register" component={Merchant} />
      </Router>
      </div>
    );
  }
}

export default App;
