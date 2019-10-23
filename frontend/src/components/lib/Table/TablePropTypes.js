import PropTypes from 'prop-types';

const columnPropTypes = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  minWidth: PropTypes.number,
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  render: PropTypes.func,
});

const columnsPropTypes = PropTypes.arrayOf(columnPropTypes);

const enhancedTableCellPropTypes = {
  column: columnPropTypes.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

export { columnPropTypes, columnsPropTypes, enhancedTableCellPropTypes };
