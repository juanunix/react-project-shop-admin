import React from 'react';

var ref = require('../../config/constants.js').firebase_ref;
import Firebase from 'firebase';

var CatalogItem = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.title,
      url: this.props.url,
      cost: this.props.cost
    };
  },
  componentWillMount: function() {
    this.fb = new Firebase(ref + 'catalog/' + this.props.id);
  },
  handleDelete: function() {
    this.fb.remove();
  },
  updateItem: function(id) {
    console.log(id);
  },
  render() {
    return (
      <li key={this.props.id} onClick={this.updateItem.bind(null, this.props.id)} className="inventoryItem">
        <a className="user-avatar">
          <img src={this.state.url} width="80"/>
        </a>
        <p>
          <a>{this.state.title}</a>
          <span>{this.state.cost + ' Rs'}</span>
        </p>
        <a
          className="delete"
          onClick={this.handleDelete}>
          <i className="fa fa-close"></i>
        </a>
      </li>
    );
  }
});

module.exports = CatalogItem;
