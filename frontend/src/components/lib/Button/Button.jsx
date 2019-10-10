import MuiButton from '@material-ui/core/Button';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, color, icon, variant }) => (
  <MuiButton color={color} variant={variant} startIcon={icon}>
    {label}
  </MuiButton>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  icon: PropTypes.element,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
};

Button.defaultProps = {
  color: 'default',
  icon: null,
  variant: 'text',
};

export default Button;
