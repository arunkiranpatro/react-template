import React, { useState } from "react";
import ArraySort from "array-sort";
import PropTypes from "prop-types";
const Table =function(props) {

  const { onSort= onSortDefault } = props;
  const [sortColumn,setSortColumn] = useState(props.sortColumn);
  const [sortDirection,setSortDirection] = useState(props.sortDirection);

    function onSortDefault(column) {
      let { data } = props;
      if (column === sortColumn) {
        const direction = sortDirection ==="desc"?"asc":"desc";
        const reverse = direction === "desc"? true:false;
        data = ArraySort(data, column, { reverse :reverse });
        setSortColumn(column);
        setSortDirection(direction);
      } else {
        data = ArraySort(data,column,{reverse:true});
        setSortColumn(column);
        setSortDirection("desc");
      }
     
    }
  
  const config={
      onSort ,
      sortColumn,
      sortDirection
  };
  
  return (
  
  <table className="table-container">
          {props.renderTableHeader(config)}
         <tbody>
          {props.renderTableBody(props.data)}
          </tbody>
   </table>);
}

Table.propTypes={

  sortColumn:PropTypes.string.isRequired,
  sortDirection:PropTypes.string.isRequired
}
export default Table;
