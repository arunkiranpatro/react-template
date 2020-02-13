import React from 'react';

const TableColumns = props => {
  const { children, ...rest } = props;
  const links = React.Children.map(children, child => React.cloneElement(child, { ...rest }));
  return (
    <thead>
      <tr>{links}</tr>
    </thead>
  );
};
export default TableColumns;
