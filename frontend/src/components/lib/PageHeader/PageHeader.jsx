import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '../Button';

const PageHeader = ({ buttonLabel, buttonIcon, buttonVariant, headerText }) => (
  <div>
    <div>
      <Typography variant="h2">{headerText}</Typography>
    </div>
    <div>
      <Button
        color="primary"
        icon={buttonIcon}
        label={buttonLabel}
        variant={buttonVariant}
      />
    </div>
  </div>
);

PageHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonIcon: PropTypes.element,
  buttonVariant: PropTypes.oneOf(['outlined', 'contained']),
};

PageHeader.defaultProps = {
  buttonIcon: null,
  buttonVariant: 'contained',
};

export default PageHeader;
