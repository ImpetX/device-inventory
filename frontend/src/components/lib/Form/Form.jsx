import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import { convertToRem } from '../../../utils';

const Form = forwardRef((props, ref) => {
  const { children, onSubmit } = props;

  const useStyles = makeStyles({
    Form: {
      maxWidth: `${convertToRem(300)}`,
    },
  });

  const classes = useStyles();

  return (
    <form ref={ref} onSubmit={onSubmit} className={classes.Form}>
      {children}
    </form>
  );
});

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
