import 'date-fns';
import React from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { PageHeader, Form, Button } from '../lib';
import { genders, bloodGroups } from '../../data';

const AddDevice = () => {
  const history = useHistory();

  // The resultant gets multiplied with the base value 8
  const marginBottom = 15 / 8;

  return (
    <>
      <PageHeader headerText="Add Device" />
      <Form onSubmit={() => 'form submitted'}>
        <Box mb={3.13}>
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
              type="text"
              id="price"
              name="price"
              label="Price"
              fullWidth
            />
          </Box>
          <Box mb={marginBottom}>
            <MuiPickersUtilsProvider utils={DateFnUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="mm/dd/yyyy"
                id="dateOfPurchase"
                name="dateOfPurchase"
                label="Date Of Purchase"
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
              id="assignedTo"
              name="assignedTo"
              label="Assigned To"
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
                format="mm/dd/yyyy"
                id="assignedDate"
                name="assignedDate"
                label="Assigned Date"
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
              id="department"
              name="department"
              label="Department"
              fullWidth
            >
              {bloodGroups.map(bloodGroup => (
                <MenuItem key={bloodGroup.label} value={bloodGroup.value}>
                  {bloodGroup.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
        <Box>
          <Box component="span" mr={marginBottom}>
            <Button
              label="Save"
              color="primary"
              variant="contained"
              onClick={() => console.log('employee added')}
            />
          </Box>
          <Box component="span" mr={marginBottom}>
            <Button
              label="Cancel"
              variant="contained"
              onClick={() => console.log('employee canceled')}
            />
          </Box>
          <Box component="span">
            <Button
              label="Device List"
              variant="contained"
              onClick={() => history.push('/devices')}
            />
          </Box>
        </Box>
      </Form>
    </>
  );
};

export default AddDevice;
