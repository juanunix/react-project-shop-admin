var React = require('react');
var Inventory = require('./Inventory');
var AddForm = require('./AddForm');

var AddCatalogItem = React.createClass({
  render() {
    return (
      <div className="row">
          <Inventory />
          <AddForm />
      </div>
    );
  }
});

module.exports = AddCatalogItem;
