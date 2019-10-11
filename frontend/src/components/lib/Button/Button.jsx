import MuiButton from '@material-ui/core/Button';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, color, icon, variant, onClick }) => (
  <MuiButton color={color} variant={variant} startIcon={icon} onClick={onClick}>
    {label}
  </MuiButton>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  icon: PropTypes.element,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'default',
  icon: null,
  variant: 'text',
};

export default Button;
