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
        <button className="btn btn-success" >Submit</button>
      </div>
    )
  }
});

var ModalBody = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      summary: '',
      cost: '',
      url: ''
    };
  },
  submitData: function(event) {
    event.preventDefault();
    this.props.catalog.push({
      title: this.state.title,
      summary:  this.state.summary,
      cost:  this.state.cost,
      url:  this.state.url
    });
    // this is for now
    alert("data saved");
  },
  handleTitleChange: function(event) {
    event.preventDefault();
    this.setState({
      title: event.target.value
    });
  },
  handleSummaryChange: function(event) {
    event.preventDefault();
    this.setState({
      summary: event.target.value
    });
  },
  handleUrlChange: function(event) {
    event.preventDefault();
    this.setState({
      url: event.target.value
    });
  },
  handleCostChange: function(event) {
    event.preventDefault();
    this.setState({
      cost: event.target.value
    });
  },
  render: function () {
    return (
      <form onSubmit={this.submitData}>
        <div className="modal-body">
          <div className="form-group">
            <label>Title</label>
            <input onChange={this.handleTitleChange} value={this.state.title}
              type="text" className="form-control" placeholder="Title" required/>
          </div>

          <div className="form-group">
            <label>Summary</label>
            <textarea rows="3" onChange={this.handleSummaryChange} value={this.state.summary}
              className="form-control" placeholder="Summary" required/>
          </div>

          <div className="form-group">
            <label>Url</label>
            <input onChange={this.handleUrlChange} value={this.state.url}
              type="url" className="form-control" placeholder="Url" required/>
          </div>

          <div className="form-group">
            <label>Cost</label>
            <input onChange={this.handleCostChange} value={this.state.cost}
              type="text" className="form-control" placeholder="Cost" required/>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-success" type="submit">Submit</button>
        </div>
      </form>
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
            <ModalBody catalog={this.props.catalog} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = AddItemModal;
