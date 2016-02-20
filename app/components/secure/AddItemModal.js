import React from 'react';
var ReactDOM = require('react-dom');
var Dropzone = require('dropzone');

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

var ModalBody = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      summary: '',
      cost: '',
      url: '',
      submitState: 'disabled',
    };
  },
  componentDidMount: function() {
    var area = ReactDOM.findDOMNode(this.refs.dropzone);

    var myDropzone = new Dropzone(area, {
      uploadMultiple: false,
      acceptedFiles:'.jpg,.png,.jpeg',
      parallelUploads: 1,
      previewTemplate: "<div> <div>", // I dont want the preview image
      url: 'https://api.cloudinary.com/v1_1/dsn5h6o4x/image/upload'
    });

    myDropzone.on('sending', function (file, xhr, formData) {
      formData.append('api_key', 789239149354257);
      formData.append('upload_preset', 'doxaophb');
      this.setState({
        submitButtonText: 'Uploading...',
      });
    }.bind(this));

    myDropzone.on('success', function (file, response) {
      this.setState({
        url: response.url,
        submitState: '',
        submitButtonText: ''
      });
    }.bind(this));
  },
  submitData: function(event) {
    event.preventDefault();

    this.props.catalog.push({
      title: this.state.title,
      summary:  this.state.summary,
      cost:  this.state.cost,
      url:  this.state.url
    });

    this.setState({
      title: '',
      summary: '',
      cost: '',
      url: ''
    });
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
            <div className="btn btn-primary" ref="dropzone">{this.state.submitButtonText || 'Upload'}</div>
          </div>

          <div className="form-group">
            <label>Cost</label>
            <input onChange={this.handleCostChange} value={this.state.cost}
              type="text" className="form-control" placeholder="Cost" required/>
          </div>
        </div>
        <div className="modal-footer">
          <button className={"btn btn-success " + this.state.submitState} type="submit">Submit</button>
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
