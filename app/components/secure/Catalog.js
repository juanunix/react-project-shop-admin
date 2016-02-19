import React from 'react';
import ReactDOM from 'react-dom';

var ref = require('../../config/constants.js').firebase_ref;
import Firebase from 'firebase';
import ReactFire from 'ReactFire';

import CatalogItem from './CatalogItem'
import AddItemModal from './AddItemModal'

var Catalog = React.createClass({
  mixins: [ReactFire],
  getInitialState: function() {
    return {
      catalog: {},
      loaded: false
    };
  },
  componentWillMount: function() {
    var fb = new Firebase(ref + 'catalog/');
    this.bindAsObject(fb, 'catalog');
    fb.on('value', this.handleProductsLoaded);
  },
  handleProductsLoaded: function () {
    this.setState({
      loaded: true
    });
  },
  renderListItem: function() {
    if (this.state.catalog && Object.keys(this.state.catalog).length === 0) {
      return <h4>No items in store</h4>
    } else {
      var children = [];
      for (var k in this.state.catalog) {
        if (typeof this.state.catalog[k] === 'object') {
          children.push (
            <CatalogItem key={k}
              id={k}
              url={this.state.catalog[k].url}
              cost={this.state.catalog[k].cost}
              title={this.state.catalog[k].title}/>
          );
        }
      }
      return children;
    }
  },
  addItem: function() {
    $(ReactDOM.findDOMNode(this.refs.modal)).modal();
  },
  render: function(){
    return (
      <div>
        <button className="btn btn-success pull-right" onClick={this.addItem}>
          <i className="fa fa-plus"> Add</i>
        </button>

        <div className="row">
          <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
            <ul className="user-profiles-list-basic">
              {this.renderListItem()}
            </ul>
          </div>
        </div>

        <AddItemModal
          title="vikram"
          content="Jadhav"
          ref="modal"/>

      </div>
    )
  }
});

module.exports = Catalog;
