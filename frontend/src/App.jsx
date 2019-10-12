import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/styles/makeStyles';
import { PageHeader } from './components/lib';

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
        <PageHeader
          headerText="Device list"
          buttonLabel="Add Device"
          onButtonClick={e => console.log('button clicked', e.currentTarget)}
        />
      </div>
    </>
  );
};

export default App;
