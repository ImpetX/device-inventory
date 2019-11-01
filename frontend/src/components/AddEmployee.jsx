import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import { PageHeader, Form } from './lib';

const genders = [
  {
    label: 'male',
    value: 'male',
  },

  {
    label: 'female',
    value: 'female',
  },
];

const AddEmployee = () => {
  const marginBottom = 1.25;

  return (
    <>
      <PageHeader headerText="Add Employee" />
      <Form onSubmit={() => 'form submitted'}>
        <Box mb={marginBottom}>
          <TextField
            required
            type="text"
            id="name"
            name="name"
            label="Name"
            fullWidth
          />
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
        <Box mb={marginBottom}>
          <TextField
            required
            type="date"
            id="bithdate"
            name="birthdate"
            label="Birthdate"
            fullWidth
          />
        </Box>
        <Box mb={marginBottom}>
          <TextField
            required
            select
            id="gender"
            name="gender"
            label="Gender"
            fullWidth
          >
            {genders.map(gender => (
              <MenuItem key={gender.label} value={gender.value}>
                {gender.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box mb={marginBottom}>
          <TextField
            required
            type="date"
            id="joiningDate"
            name="joiningdate"
            label="Joining Date"
            fullWidth
          />
        </Box>
      </Form>
    </>
  );
};

export default AddEmployee;
