import React from 'react';
import TextField from '@material-ui/core/TextField';
import { PageHeader } from './lib';

const AddEmployee = () => (
  <>
    <PageHeader headerText="Add Employee" />
    <form>
      <TextField required id="name" name="name" label="Name" fullWidth />
    </form>
  </>
);

export default AddEmployee;
