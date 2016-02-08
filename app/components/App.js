var React = require('react');
var Navbar = require('./Navbar');
var AddItem = require('./AddItem');

var App = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <AddItem />
        </div>
      </div>
    );
  }
});

module.exports = App;
