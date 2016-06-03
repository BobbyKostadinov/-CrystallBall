import React, { Component } from 'react';
import { connect } from 'react-redux'

class Result extends Component {
  render() {
    if (!this.props.activityDate) {
      return (
        <div>Well ... submit the form first</div>
      );
    }
    return (
      <div>Form submited. Activity: {this.props.activity} and activity date: {this.props.activityDate}</div>
    );
  }
}

const mapStateToProps = ( {queryForm} ) => {
  return {
    activity: queryForm.activity,
    activityDate: queryForm.activityDate
  }
}

export default connect(
  mapStateToProps
)(Result);
