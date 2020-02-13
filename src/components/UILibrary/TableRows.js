import React from 'react';

const TableRows = props => {
  const { children } = props;
  const links = React.Children.map(children, child => React.cloneElement(child, {}));

  return <tr>{links}</tr>;
};
export default TableRows;
