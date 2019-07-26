import React, { Component } from 'react';
import Nav from '../Component/Nav';
import MerchantComponent from '../Component/Merchant-register';
import Footer from '../Component/Footer';

export class Merchant extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <MerchantComponent />
      </div>
    );
  }
}

export default Merchant;