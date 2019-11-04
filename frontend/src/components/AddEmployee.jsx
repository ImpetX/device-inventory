import 'date-fns';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
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
  // The resultant gets multiplied with the base value 8
  const marginBottom = 15 / 8;

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
          <MuiPickersUtilsProvider utils={DateFnUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/DD/YYYY"
              id="birthdate"
              label="BirthDate"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              fullWidth
            />
          </MuiPickersUtilsProvider>
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
          <MuiPickersUtilsProvider utils={DateFnUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/DD/YYYY"
              id="joiningDate"
              label="Joining Date"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              fullWidth
            />
          </MuiPickersUtilsProvider>
        </Box>
      </Form>
    </>
  );
};

export default AddEmployee;
