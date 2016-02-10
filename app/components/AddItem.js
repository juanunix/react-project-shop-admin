var React = require('react');
var Inventory = require('./Inventory');
var AddForm = require('./AddForm');

var ref = require('../constants').firebase_ref;
var Firebase = require('firebase');
var ReactFire = require('reactfire');

var AddCatalogItem = React.createClass({
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
  render() {
    return (
      <div className="row">
        <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
          <Inventory catalog={this.state.catalog} />
        </div>
        <AddForm catalog={this.firebaseRefs.catalog}/>
      </div>
    );
  }
});

module.exports = AddCatalogItem;
