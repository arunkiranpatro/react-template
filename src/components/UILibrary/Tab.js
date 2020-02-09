import React from "react";

const Tab = props => {
  const { activeId, id } = props;
  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {});
  });
  return <div className="tab-body">{activeId === id && children}</div>;
};
export default Tab;
