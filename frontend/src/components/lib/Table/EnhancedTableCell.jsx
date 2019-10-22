import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { columnPropTypes } from './TablePropTypes';

const EnhancedTableCell = ({ cells, order, orderBy, onRequestSort }) => {
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <>
      {cells.map(cell => (
        <TableCell
          key={cell.id}
          align={cell.align}
          sortDirection={orderBy === cell.id ? order : false}
        >
          <TableSortLabel
            active={orderBy === cell.id}
            direction={order}
            onClick={createSortHandler(cell.id)}
          >
            {cell.label}
          </TableSortLabel>
        </TableCell>
      ))}
    </>
  );
};

EnhancedTableCell.propTypes = {
  cells: columnPropTypes.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

export default EnhancedTableCell;
