import React, { Component } from 'react';
import { connect } from 'react-redux'
import formSubmit from './../actions/form_submit';

class QueryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activity: props.activity,
      activityDate: props.activityDate
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
        id="query-form-activity-date"
        className="form-control"
        onChange={(event) => this.setState({activityDate: event.target.value})}>
          <option value={today.getTime()}>Hurry! It is TODAY!</option>
          <option value={tomorrow.getTime()}>Chill, no rush ... tomorrow</option>
      </select>
    );
  }
  render() {
    return (
      <form className="query-form" onSubmit={ (event) => { event.preventDefault(); this.props.onSubmit(this.state);  }}>
        <div className="row form-group">
          <div className="col-md-6">
            <label for="query-form-activity">What are you up to?</label>
            {this.renderActivitySelector()}
          </div>
          <div className="col-md-6">
            <label for="query-form-activity-date">When ?</label>
            {this.renderTimeSelector()}
          </div>
        </div>
        <div className="row query-form-submit-row">
          <button type="submit" className="btn btn-secondary">Oh heavens tell me what to do! </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ( {queryForm} ) => {
  return {
    activity: queryForm.activity,
    activityDate: queryForm.activityDate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (state) => dispatch(formSubmit(state.activity, state.activityDate))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryForm);
