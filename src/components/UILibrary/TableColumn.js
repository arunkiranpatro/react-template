import React from "react";

const TableColumn = props => {
  const { children, id, onSort, sortable } = props;
  let className = "table-col",
    onClick,
    ariaSort,
    sortIcon,
    rest;
  if (sortable) {
    className = "table-col" + " sortable";
    onClick = sortColumn;
    props.sortColumn === id
      ? props.sortDirection === "desc"
        ? ((sortIcon = "\u2193"), (ariaSort = "descending"))
        : ((sortIcon = "\u2191"), (ariaSort = "ascending"))
      : (sortIcon = "");
  }
  function sortColumn(e) {
    onSort(e.target.id);
  }
  rest = {
    className,
    onClick,
    "aria-sort": ariaSort
  };
  return (
    <th id={id} {...rest}>
      {children} {sortIcon}
    </th>
  );
};

export default TableColumn;
