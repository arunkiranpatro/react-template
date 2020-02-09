import React from "react";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: "0"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id) {
    this.setState({ activeId: id });
  }

  render() {
    const { activeId } = this.state;
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        activeId,
        handleClick: this.handleClick
      });
    });

    return <div className="tab-container">{children}</div>;
  }
}
export default Tabs;
