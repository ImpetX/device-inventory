import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import makeStyles from '@material-ui/styles/makeStyles';
import { containerSpacing } from '../../../tokens';
import { convertToRem } from '../../../utils';
import Button from '../Button';

const PageHeader = forwardRef((props, ref) => {
  const useStyles = makeStyles({
    PageHeader: {
      borderBottom: `.0625rem solid ${grey[400]}`,
      display: 'flex',
      flexWrap: 'nowrap',
      overflow: 'hidden',
      paddingTop: `${convertToRem(containerSpacing.vertical)}`,
      paddingBottom: `${convertToRem(containerSpacing.vertical)}`,
      marginBottom: `${convertToRem(containerSpacing.vertical)}`,
    },

    PageHeader__left: {
      flex: 1,
    },
  });

  const classes = useStyles();

  const {
    checked,
    onSwitchChange,
    switchLabel,
    buttonLabel,
    buttonIcon,
    buttonVariant,
    headerText,
    onButtonClick,
  } = props;

  return (
    <div className={classes.PageHeader} ref={ref} id="PageHeader">
      <div className={classes.PageHeader__left}>
        <Typography variant="h4" component="h2">
          {headerText}
        </Typography>
      </div>
      <div>
        {switchLabel && (
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={e => onSwitchChange(e)}
                color="primary"
              />
            }
            label={switchLabel}
          />
        )}

        {buttonLabel && (
          <Button
            color="primary"
            icon={buttonIcon}
            label={buttonLabel}
            variant={buttonVariant}
            onClick={e => onButtonClick(e)}
          />
        )}
      </div>
    </div>
  );
});

PageHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  buttonIcon: PropTypes.element,
  buttonVariant: PropTypes.oneOf(['outlined', 'contained']),
  onButtonClick: PropTypes.func,
  switchLabel: PropTypes.string,
  checked: PropTypes.bool,
  onSwitchChange: PropTypes.func,
};

PageHeader.defaultProps = {
  buttonLabel: '',
  buttonIcon: null,
  buttonVariant: 'contained',
  onButtonClick: () => {},
  switchLabel: '',
  checked: false,
  onSwitchChange: () => {},
};

export default PageHeader;
