import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';

const App = () => {
  const useStyles = makeStyles({
    container: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
  });

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.container}>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    </>
  );
};

export default App;
