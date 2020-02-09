import React from "react";

const TableColumn = props => {
  const { children, id, onSort, sortable, arialabel } = props;
  let className = "table-col",
    onClick,
    ariaSort,
    sortIcon;
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
  let rest = {
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
