import PropTypes from 'prop-types';

const columnPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    minWidth: PropTypes.number,
    align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
    render: PropTypes.func,
  })
);

// eslint-disable-next-line
export { columnPropTypes };
