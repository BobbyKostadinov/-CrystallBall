import React, { Component } from "react";
import QueryForm from './../containers/query_form';
import Result from './../containers/result';

export default class Main extends Component {
  render() {
    return (
      <div>
        <QueryForm />
        <Result />
      </div>
    )
  }
}
