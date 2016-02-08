var React = require('react');

var InventoryItem = React.createClass({
  renderListItem: function() {
    if (this.props.data && Object.keys(this.props.data).length === 0) {
      return <h4>No items in store</h4>
    } else {
      var children = [];
      for (var k in this.props.data) {
        if (typeof this.props.data[k] === 'object') {
          children.push (
            <li key={k}>
              <a href="#" className="user-avatar">
                <img src={this.props.data[k].url} width="80"/>
              </a>
              <p>
                <a href="#">{this.props.data[k].title}</a>
                <span>{this.props.data[k].summary}</span>
                <span>{this.props.data[k].cost + ' Rs'}</span>
              </p>
              <a className="delete" href="#"><i className="fa fa-close"></i></a>
            </li>
          );
        }
      }
      return children;
    }
  },
  render() {
    return (
      <div>
        <ul className="user-profiles-list-basic">
          {this.renderListItem()}
        </ul>
      </div>
    );
  }
});

module.exports = InventoryItem;
