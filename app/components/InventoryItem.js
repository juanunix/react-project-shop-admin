var React = require('react');
var ref = require('../constants').firebase_ref;
var Firebase = require('firebase');

var InventoryItem = React.createClass({
  getInitialState: function() {
    return {
      url: this.props.url,
      title: this.props.title,
      cost: this.props.cost,
      summary: this.props.summary
    };
  },
  componentWillMount: function() {
    this.fb = new Firebase(ref + 'catalog/' + this.props.id);
  },
  handleDelete: function() {
    this.fb.remove();
  },
  render() {
    return (
      <li key={this.props.id} onClick={this.updateItem} className="inventoryItem">
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

module.exports = InventoryItem;
