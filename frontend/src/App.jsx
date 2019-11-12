import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/styles/makeStyles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  ListEmployee,
  AddEmployee,
  DetailsEmployee,
} from './components/employee';
import { ListDevice, AddDevice, DetailsDevice } from './components/device';
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
    <Router>
      <CssBaseline />
      <div className={classes.container}>
        <Route exact path="/devices">
          <ListDevice />
        </Route>
        <Route exact path="/device/add">
          <AddDevice />
        </Route>
        <Route exact path="/devices/:id">
          <DetailsDevice />
        </Route>
        <Route exact path="/employees">
          <ListEmployee />
        </Route>
        <Route exact path="/employee/add">
          <AddEmployee />
        </Route>
        <Route exact path="/employees/:id">
          <DetailsEmployee />
        </Route>
      </div>
    </Router>
  );
};

export default App;
