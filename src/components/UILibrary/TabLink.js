import React from "react";

const TabLink = props => {
  const { id, handleClick, activeId, children } = props;
  let className = "tab-link";
  if (activeId === id) {
    className += " active-tab";
  }
  function selectTab() {
    handleClick(id);
  }
  return (
    <li onClick={selectTab} className={className}>
      {children}
    </li>
  );
};

export default TabLink;
