var React = require('react');
var Inventory = require('./Inventory');
var AddForm = require('./AddForm');

//var ref = require('../constants').firebase_ref;
var ref = 'https://zenleather.firebaseio.com/'
var Firebase = require('firebase');
var ReactFire = require('reactfire');

var AddCatalogItem = React.createClass({
  mixins: [ReactFire],
  getInitialState: function() {
    return {
      catalog: {}
    };
  },
  componentWillMount: function() {
    this.bindAsObject(new Firebase(ref + 'catalog/'), 'catalog');
  },
  render() {
    return (
      <div className="row">
          <Inventory catalog={this.state.catalog}/>
          <AddForm catalog={this.firebaseRefs.catalog}/>
      </div>
    );
  }
});

module.exports = AddCatalogItem;
