import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { enhancedTableCellPropTypes } from './TablePropTypes';

const EnhancedTableCell = ({ column, order, orderBy, onRequestSort }) => {
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableCell
      key={column.id}
      align={column.align}
      sortDirection={orderBy === column.id ? order : false}
      style={{ minWidth: column.minWidth }}
    >
      <TableSortLabel
        active={orderBy === column.id}
        direction={order}
        onClick={createSortHandler(column.id)}
      >
        {column.label}
      </TableSortLabel>
    </TableCell>
  );
};

EnhancedTableCell.propTypes = enhancedTableCellPropTypes;

export default EnhancedTableCell;
