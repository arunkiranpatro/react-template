import React from "react";
import { connect } from "react-redux";
import { setComponent } from "../../store/actions/ajaxAction";

class AjaxContainer extends React.Component {
  componentDidMount() {
    const Component = this.props.initial;
    this.props.setComponent(Component);
  }
  render() {
    const { component: Component } = this.props.ajaxContainer;
    let body = "";
    if (Object.keys(Component).length > 0) {
      body = Component;
    }
    return <div className="ajax-container">{body}</div>;
  }
}

const mapStateToProps = state => {
  return {
    ajaxContainer: state.ajaxContainer
  };
};

export default connect(mapStateToProps, { setComponent })(AjaxContainer);
