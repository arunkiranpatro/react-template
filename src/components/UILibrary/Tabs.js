import React, { useState } from "react";

function Tabs(props) {
  let defaultActive = props.defaultActive || "0";
  const [activeId, setActiveId] = useState(defaultActive);
  function handleClick(id) {
    setActiveId(id);
  }
  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      activeId: activeId,
      handleClick: handleClick
    });
  });

  return <div className="tab-container">{children}</div>;
}
export default Tabs;
