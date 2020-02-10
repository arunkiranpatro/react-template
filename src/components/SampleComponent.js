import React, { Component } from "react";
import Layout from "./UILibrary/Layout";
import ROD from "./UILibrary/ReadOnlyData";

export default class SampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  componentWillMount() {
    fetch("https://reqres.in/api/users/2")
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.data });
      });
  }
  render() {
    return (
      <Layout columns="1">
        {this.state.data && this.state.data.first_name && (
          <ROD label="name:" value={this.state.data.first_name} />
        )}
      </Layout>
    );
  }
}
