import React, { Suspense } from "react";
import { connect } from "react-redux";
import {
  setComponent,
  setComponentByStore
} from "../../store/actions/DCActions";
import Loading from "./Loading";

class MultipleDC extends React.Component {
  componentDidMount() {
    const Component = this.props.initial;
    this.props.setComponent(Component);
  }
  static loadComponent(Component) {
    Component = <Suspense fallback={<Loading />}>{Component}</Suspense>;
    setComponentByStore(Component);
  }
  render() {
    const { component: Component } = this.props.multipleDC;
    let body = "";
    if (Object.keys(Component).length > 0) {
      body = Component;
    }
    return <div className="ajax-container">{body}</div>;
  }
}

const mapStateToProps = state => {
  return {
    multipleDC: state.multipleDC
  };
};

export default connect(mapStateToProps, { setComponent })(MultipleDC);
