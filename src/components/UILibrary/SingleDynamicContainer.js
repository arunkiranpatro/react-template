import React, { Suspense } from "react";
import Loading from "./Loading";

export default class DynamicContainer extends React.Component {
  constructor(props) {
    if (!!DynamicContainer.instance) {
      return DynamicContainer.instance;
    }
    super(props);
    this.state = {
      Component: null
    };
    DynamicContainer.instance = this;
  }

  componentDidMount() {
    const Component = this.props.initial;
    this.setState({ Component: Component });
  }

  static loadComponent(Component) {
    Component = <Suspense fallback={<Loading />}>{Component}</Suspense>;
    DynamicContainer.instance.setState({ Component: Component });
  }

  render() {
    const { Component } = this.state;
    let body = "";
    if (Component && Object.keys(Component).length > 0) {
      body = Component;
    }
    return <div className="dynamic-container">{body}</div>;
  }
}
