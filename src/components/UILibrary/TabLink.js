import React from "react";

const TabLink = props => {
  const { id, handleClick, activeId, children } = props;
  let className = "tab-link",
    ariaSelected = "false";
  if (activeId === id) {
    className += " active-tab";
    ariaSelected = "true";
  }
  function selectTab() {
    handleClick(id);
  }
  return (
    <li
      onClick={selectTab}
      className={className}
      role="tab"
      aria-selected={ariaSelected}
      tabIndex="0"
    >
      {children}
    </li>
  );
};

export default TabLink;
