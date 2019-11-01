import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { PageHeader, Form } from './lib';

const AddEmployee = () => {
  const marginBottom = 1.25;

  return (
    <>
      <PageHeader headerText="Add Employee" />
      <Form onSubmit={() => 'form submitted'}>
        <Box mb={marginBottom}>
          <TextField required id="name" name="name" label="Name" fullWidth />
        </Box>
        <Box mb={marginBottom}>
          <TextField
            required
            type="tel"
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
          />
        </Box>
      </Form>
    </>
  );
};

export default AddEmployee;
