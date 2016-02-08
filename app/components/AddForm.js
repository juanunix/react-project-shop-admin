var React = require('react');

var AddForm = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      summary: '',
      cost: '',
      url: ''
    };
  },
  handleClick: function(event) {
    event.preventDefault();
    this.props.catalog.push({
      title: this.state.title,
      summary:  this.state.summary,
      cost:  this.state.cost,
      url:  this.state.url
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
  render() {
    return (
      <div className="col-sm-4">
        <form onSubmit={this.handleClick}>
          <div className="form-group">
            <label>Title</label>
            <input
              onChange={this.handleTitleChange}
              value={this.state.title}
              type="text"
              className="form-control"
              placeholder="Title"
              required/>
          </div>
          <div className="form-group">
            <label>summary</label>
            <textarea
              onChange={this.handleSummaryChange}
              value={this.state.summary}
              className="form-control"
              placeholder="summary"
              rows="4"
              required/>
          </div>
          <div className="form-group">
            <label>Cost</label>
            <input
              onChange={this.handleCostChange}
              value={this.state.cost}
              type="text"
              className="form-control"
              placeholder="Cost"
              required/>
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              onChange={this.handleUrlChange}
              value={this.state.url}
              type="text"
              className="form-control"
              placeholder="Enter Image Url"
              required/>
          </div>
          <button
            type="submit"
            className="btn btn-default">
              Submit
          </button>
        </form>
      </div>
    );
  }
});

module.exports = AddForm;
