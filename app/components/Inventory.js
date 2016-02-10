var React = require('react');
var InventoryItem = require('./InventoryItem');

var Inventory = React.createClass({
  renderListItem: function() {
    if (this.props.catalog && Object.keys(this.props.catalog).length === 0) {
      return <h4>No items in store</h4>
    } else {
      var children = [];
      for (var k in this.props.catalog) {
        if (typeof this.props.catalog[k] === 'object') {
          children.push (
            <InventoryItem
              key={k}
              id={k}
              url={this.props.catalog[k].url}
              title={this.props.catalog[k].title}
              cost={this.props.catalog[k].cost}/>
          );
        }
      }
      return children;
    }
  },
  render() {
    return (
      <div className="col-sm-8">
        <div>
          <ul className="user-profiles-list-basic">
            {this.renderListItem()}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Inventory;
