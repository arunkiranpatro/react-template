import React from "react";

const Tab = props => {
  let className = "tab-body",
    body = "",
    renderBody = false;
  const { activeId, id, deferLoaded = false } = props;
  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {});
  });
  if (activeId === id) {
    className += " tab-active";
    renderBody = true;
  }
  if (deferLoaded) {
    renderBody && (body = children);
  } else {
    body = children;
  }

  return <div className={className}>{body}</div>;
};
export default Tab;
