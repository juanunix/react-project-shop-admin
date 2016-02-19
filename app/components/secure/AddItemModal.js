// http://blog.revathskumar.com/2015/06/using-bootstrap-modal-with-react.html
import React from 'react';

var ModalHeader = React.createClass({
  render: function () {
    return (
      <div className="modal-header">
        {this.props.title}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
});

var ModalFooter = React.createClass({
  render: function () {
    return (
      <div className="modal-footer">

        Please give missed-call on this no: 9800000000 <br/>
        We will call you and ship this Item for you.

      </div>
    )
  }
});

var ModalBody = React.createClass({
  render: function () {
    return (
      <div className="modal-body">
        {this.props.content}
      </div>
    )
  }
});

var AddItemModal = React.createClass({
  render: function () {
    return (
      <div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalHeader title={this.props.title}/>
            <ModalBody content={this.props.content} />
            <ModalFooter />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = AddItemModal;
