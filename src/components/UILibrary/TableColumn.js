import React from "react";
import PropTypes from "prop-types";

const TableColumn = props => {
  const { children, id, onSort, sortable } = props;
  let className = "table-col";
  let onClick;
  let ariaSort;
  let sortIcon;
  let rest;
  function sortColumn(e) {
    onSort(e.target.id);
  }
  if (sortable) {
    className += " sortable";
    onClick = sortColumn;
    if(props.sortColumn === id){
        sortIcon = props.sortDirection === "desc" ? "\u2193" : "\u2191";
        ariaSort = props.sortDirection === "desc" ? "descending" : "ascending";
    }
    else sortIcon="";     
  }

  rest = {
    className,
    onClick,
    "aria-sort": ariaSort
  };
  return (
    <th id={id} {...rest}>
      {children}
      {sortIcon}
    </th>
  );
};
TableColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  id: PropTypes.string.isRequired,
  onSort: PropTypes.func,
  sortable: PropTypes.bool,
  sortColumn: PropTypes.string,
  sortDirection: PropTypes.string
};
export default TableColumn;
