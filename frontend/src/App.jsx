import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/styles/makeStyles';
// eslint-disable-next-line import/named
import { DetailsEmployee } from './components/employee';
import { containerSpacing } from './tokens';
import { convertToRem } from './utils';

const { vertical, horizontal } = containerSpacing;

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
        <DetailsEmployee />
      </div>
    </>
  );
};

export default App;
