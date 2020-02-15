import React from 'react';
import PropTypes from 'prop-types';

const TableColumn = props => {
    const { children, id, onSort, sortable } = props;
    let className = 'table-col';
    let onClick;
    let ariaSort;
    let sortIcon;
    let rest;
    if (sortable) {
        className = 'table-col' + ' sortable';
        onClick = sortColumn;
        props.sortColumn === id
            ? props.sortDirection === 'desc'
                ? ((sortIcon = '\u2193'), (ariaSort = 'descending'))
                : ((sortIcon = '\u2191'), (ariaSort = 'ascending'))
            : (sortIcon = '');
    }
    function sortColumn(e) {
        onSort(e.target.id);
    }
    rest = {
        className,
        onClick,
        'aria-sort': ariaSort,
    };
    return (
      <th id={id} {...rest}>
        {children} 
        {' '}
        {sortIcon}
      </th>
    );
};
TableColumn.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    id: PropTypes.string.isRequired,
    onSort: PropTypes.func,
    sortable: PropTypes.bool,
    sortColumn: PropTypes.string,
    sortDirection: PropTypes.string,
};
export default TableColumn;
