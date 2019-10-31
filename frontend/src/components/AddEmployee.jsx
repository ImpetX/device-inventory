import React from 'react';
import TextField from '@material-ui/core/TextField';
import { PageHeader, Form } from './lib';

const AddEmployee = () => (
  <>
    <PageHeader headerText="Add Employee" />
    <Form onSubmit={() => 'form submitted'}>
      <TextField required id="name" name="name" label="Name" fullWidth />
    </Form>
  </>
);

export default AddEmployee;
