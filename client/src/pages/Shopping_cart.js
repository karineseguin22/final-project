import React, { Component } from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import MainShoppingCart from '../Component/Main-shopping-cart';

export class ShoppingCart extends Component {
  constructor(props){
    super(props);
    this.state = {
    };

  }

  render() {
    window.addEventListener("DOMContentLoaded", (event) => {
      const button =  document.querySelector('.StripeCheckout span');
      const 
      button.removeAttribute("style")
      button.setAttribute('class',"waves-effect  waves-light btn")
      console.log(button)
    });
 
    //button.setAttribute('class',"caca") // waves-effect  waves-light btn 
    return (
      <div>
        <Nav shoppingCart={this.props.shoppingcart}/> 
        <MainShoppingCart shoppingCart={this.props.shoppingcart}  deleteCartItem={this.props.deleteCartItem} removeOneCartItem={this.props.removeOneCartItem} addOneCartItem={this.props.addOneCartItem}/>
      </div>
    )
  }
}
  
export default ShoppingCart;