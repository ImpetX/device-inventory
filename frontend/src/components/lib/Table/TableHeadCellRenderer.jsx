import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import EnhancedTableCell from './EnhancedTableCell';
import { enhancedTableCellPropTypes } from './TablePropTypes';

const TableHeadCellRenderer = ({ column, order, orderBy, onRequestSort }) => (
  <>
    {column.sortable ? (
      <EnhancedTableCell
        column={column}
        order={order}
        orderBy={orderBy}
        onRequestSort={(event, property) => onRequestSort(event, property)}
      />
    ) : (
      <TableCell
        key={column.id}
        align={column.align}
        style={{ minWidth: column.minWidth }}
      >
        {column.label}
      </TableCell>
    )}
  </>
);

TableHeadCellRenderer.propTypes = enhancedTableCellPropTypes;

export default TableHeadCellRenderer;
