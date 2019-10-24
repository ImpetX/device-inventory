import PropTypes from 'prop-types';

const columnPropTypes = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  minWidth: PropTypes.number,
  render: PropTypes.func,
});

const columnsPropTypes = PropTypes.arrayOf(columnPropTypes);

const enhancedTableCellPropTypes = {
  align: PropTypes.oneOf(['right', 'left', 'center']).isRequired,
  column: columnPropTypes.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

export { columnPropTypes, columnsPropTypes, enhancedTableCellPropTypes };
