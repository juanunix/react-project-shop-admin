import React from 'react';

var Home = React.createClass({
  render: function(){
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>ZEN LEATHER ADMIN</h1>
          <p>This is a admin page used for managing the products on the store</p>
        </div>
      </div>
    );
  }
});

module.exports = Home;
