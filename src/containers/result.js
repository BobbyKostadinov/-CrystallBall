import React, { Component } from 'react';
import { connect } from 'react-redux'

class Result extends Component {
  render() {
    if (!this.props.location) {
      return (
        <div>Well ... submit the form first</div>
      );
    }
    return (
      <div>Form submited; Location: {this.props.location}; Good for you</div>
    );
  }
}

const mapStateToProps = ( {result} ) => {
  if (!result) {
    return {};
  }

  return {
    location: result.city.name,
  }
}

export default connect(
  mapStateToProps
)(Result);
