import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/styles/makeStyles';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {
  ListEmployee,
  AddEmployee,
  DetailsEmployee,
  EditEmployee,
} from './components/employee';
import {
  ListDevice,
  AddDevice,
  DetailsDevice,
  EditDevice,
} from './components/device';
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
        <Redirect from="/" to="/devices" />
        <Route exact path="/devices">
          <ListDevice />
        </Route>
        <Route exact path="/device/add">
          <AddDevice />
        </Route>
        <Route exact path="/devices/:id">
          <DetailsDevice />
        </Route>
        <Route exact path="/devices/:id/edit">
          <EditDevice />
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
        <Route exact path="/employees/:id/edit">
          <EditEmployee />
        </Route>
      </div>
    </Router>
  );
};

export default App;
