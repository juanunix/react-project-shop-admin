var React = require('react');
var InventoryItem = require('./InventoryItem');

var Inventory = React.createClass({
  render() {
    return (
      <div className="col-sm-8">
        <InventoryItem data={this.props.catalog}/>
      </div>
    );
  }
});

module.exports = Inventory;
