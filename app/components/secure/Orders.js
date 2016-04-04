import React from 'react';

var ref = require('../../config/constants.js').firebase_ref;
import Firebase from 'firebase';
import ReactFire from 'ReactFire';
import Griddle from 'griddle-react';

var Orders = React.createClass({
  mixins: [ReactFire],
  getInitialState: function() {
    return {
      orders: {}
    };
  },
  componentWillMount: function() {
    var fb = new Firebase(ref + 'orders/');
    this.bindAsObject(fb, 'orders');
  },
  renderOrdersItem: function() {
    var data = [];
    for (var k in this.state.orders) {
      if (typeof this.state.orders[k] === 'object') {
        data.push(
          {
            "Product Name": this.state.orders[k].productName,
            "Product Id": this.state.orders[k].id,
            "Customer Name": this.state.orders[k].name + " " + this.state.orders[k].surname,
            "Phone Number": this.state.orders[k].mobile,
            "Address": this.state.orders[k].address
          }
        );
      }
    }

    return data;
  },
  render: function(){
    return (
      <div>
        {this.renderOrdersItem().length > 0 ?
          <Griddle results={this.renderOrdersItem()} showFilter={true}/> : <h4>Loading ...</h4>}
      </div>
    );
  }
});

module.exports = Orders;
