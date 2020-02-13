import React, { useState } from 'react';

function Tabs(props) {
  const defaultActive = props.defaultActive || '0';
  const [activeId, setActiveId] = useState(defaultActive);
  function handleClick(id) {
    setActiveId(id);
  }
  const children = React.Children.map(props.children, child => React.cloneElement(child, {
    activeId,
    handleClick
  }));

  return <div className="tab-container">{children}</div>;
}
export default Tabs;
