import React from "react";

const TableRow = props => {
  const { children } = props;
  return <td className="table-details">{children}</td>;
};

export default TableRow;
