import React, { Component } from 'react';
var moment = require('moment');
import ViewButton from './View_button';
import _ from 'lodash';


export class ViewRow extends Component {
  state = {
    toggle: false,
    message:"",
    data: [],
  }

  getOrders = async (userId) => {
    const request = await fetch(`/api/orders/user/${userId}`, {
      headers: {"authorization": localStorage.getItem('token')}})
      if(request.ok){
        let response = await request.json()
        this.setState({data: response})
        console.log('RESPONSE:', response)
      } else {
        let response = await request.json()
        this.setState({message: response.message})
      }
  }

  componentDidMount() {
    this.getOrders(localStorage.getItem('user_id'))
  }

  render() {

    let viewDeal = _(this.state.data).groupBy(dealview => dealview.order_number).map( (value, key)=> {
      return {
        order_number: key, deals: value
      }
    }).value()

    const orderDeal = viewDeal.map((order, index) => {
      let timeStamp = moment(order.deals[0].created_at).format('MMM Do, h:mm a');
      return (
        <tbody key={order.order_number}>
          <tr>
            <td>{order.order_number}</td>
            <td>${order.deals[0].total}</td>
            <td>{timeStamp}</td>
            <td>
              <a className="waves-effect waves-light btn" name={`button${index}`} onClick={() =>  this.state.toggle ? this.setState({toggle: false }) : this.setState({toggle:`button${index}`})}>View Order</a>
            </td>
          </tr>
          { this.state.toggle === `button${index}` ? <ViewButton deals={order.deals}/> : "" }
        </tbody>
      );
    });
    return orderDeal
  }
}
export default ViewRow;