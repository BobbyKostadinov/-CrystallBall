import React, { Component } from 'react';

export default class QueryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activity: "",
      activity: ""
    }
  }

  renderActivitySelector() {
    return (
      <select
        className="form-control"
        onChange={(event) => this.setState({activity: event.target.value})}>
          <option value="barbeque">barbeque dude</option>
          <option value="party!">Partey wee!</option>
      </select>
    );
  };

  renderTimeSelector() {
    const today = new Date();
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

    return (
      <select
        id="query-form-action"
        className="form-control"
        onChange={(event) => this.setState({time: event.target.value})}>
          <option value={today.getTime()}>Hurry! It is TODAY!</option>
          <option value={tomorrow.getTime()}>Chill, no rush ... tomorrow</option>
      </select>
    );
  }
  render() {
    return (
      <form className="query-form">
        <div className="row form-group">
          <div className="col-md-6">
            <label for="query-form-action">What are you up to?</label>
            {this.renderActivitySelector()}
          </div>
          <div className="col-md-6">
            <label for="query-form-action">When ?</label>
            {this.renderTimeSelector()}
          </div>
        </div>
        <div className="row query-form-submit-row">
          <button type="button" className="btn btn-secondary">Oh heavens tell me what to do! </button>
        </div>
      </form>
    );
  }
}
