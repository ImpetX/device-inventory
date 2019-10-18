import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/styles/makeStyles';
import { ListDevice } from './components';
import { containerPadding } from './tokens';
import { convertToRem } from './utils';

const { vertical, horizontal } = containerPadding;

const App = () => {
  const useStyles = makeStyles({
    container: {
      padding: `${convertToRem(vertical)} ${convertToRem(horizontal)}`,
    },
  });

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.container}>
        <ListDevice />
      </div>
    </>
  );
};

export default App;
