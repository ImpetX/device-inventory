import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { enhancedTableCellPropTypes } from './TablePropTypes';
import EnhancedTableCell from './EnhancedTableCell';

const TableHeadCellRenderer = ({
  column,
  align,
  order,
  orderBy,
  onRequestSort,
}) => (
  <>
    {column.sortable ? (
      <EnhancedTableCell
        align={align}
        column={column}
        order={order}
        orderBy={orderBy}
        onRequestSort={(event, property) => onRequestSort(event, property)}
      />
    ) : (
      <TableCell
        key={column.id}
        align={align}
        style={{ minWidth: column.minWidth }}
      >
        {column.label}
      </TableCell>
    )}
  </>
);

TableHeadCellRenderer.propTypes = enhancedTableCellPropTypes;

export default TableHeadCellRenderer;
