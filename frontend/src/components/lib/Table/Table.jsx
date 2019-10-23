import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import makeStyles from '@material-ui/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TableHeadCellRenderer from './TableHeadCellRenderer';
import { convertToRem } from '../../../utils';
import { containerSpacing } from '../../../tokens';
import { columnsPropTypes } from './TablePropTypes';

const Table = ({ columns, rows, otherHeights, onRowEdit, onRowDelete }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [paginationElHeight, setPaginationElHeight] = useState(0);
  const paginationEl = useRef(null);

  useEffect(() => {
    setPaginationElHeight(paginationEl.current.offsetHeight);
  }, []);

  const useStyles = makeStyles({
    tableWrapper: {
      maxHeight: `calc(100vh - ${convertToRem(
        paginationElHeight + containerSpacing.vertical * 2 + otherHeights
      )})`,
      overflow: 'auto',
    },

    tableRowActions: {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <div className={classes.tableWrapper}>
        <MuiTable stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableHeadCellRenderer
                  key={column.id}
                  column={column}
                  order="desc"
                  orderBy="name"
                  onRequestSort={(event, property) =>
                    console.log('property', property)
                  }
                />
              ))}
              <TableCell align="center" style={{ minWidth: 170 }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.render(row)}
                      </TableCell>
                    );
                  })}
                  <TableCell align="center" style={{ minWidth: 170 }}>
                    <div className={classes.tableRowActions}>
                      <IconButton
                        color="primary"
                        aria-label="delete"
                        onClick={() => onRowEdit(row.name)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        aria-label="delete"
                        onClick={() => onRowDelete(row.name)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </MuiTable>
      </div>
      <TablePagination
        ref={paginationEl}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

Table.propTypes = {
  columns: columnsPropTypes.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ).isRequired,
  otherHeights: PropTypes.number.isRequired,
  onRowEdit: PropTypes.func.isRequired,
  onRowDelete: PropTypes.func.isRequired,
};

export default Table;
