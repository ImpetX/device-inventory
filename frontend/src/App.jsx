import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/styles/makeStyles';
import { Button } from './components/lib';

const App = () => {
  const useStyles = makeStyles({
    container: {
      padding: '1.25rem',
    },
  });

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.container}>
        <Button variant="contained" color="primary" label="Hey!" />
      </div>
    </>
  );
};

export default App;
