import React from "react";

const TabLinks = props => {
  const { activeId, handleClick, children } = props;
  const links = React.Children.map(children, child => {
    return React.cloneElement(child, {
      activeId,
      handleClick
    });
  });

  return <ul className="tab-links">{links}</ul>;
};
export default TabLinks;
