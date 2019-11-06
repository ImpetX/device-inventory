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
import { PageHeader, Form, Button } from './lib';
import { genders, bloodGroups } from '../data';

const AddEmployee = () => {
  // The resultant gets multiplied with the base value 8
  const marginBottom = 15 / 8;

  return (
    <>
      <PageHeader headerText="Add Employee" />
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
                format="mm/dd/yyyy"
                id="birthdate"
                name="birthdate"
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
                format="mm/dd/yyyy"
                id="joiningDate"
                name="joiningDate"
                label="Joining Date"
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
              multiline
              rows="3"
              type="text"
              id="presentAddress"
              name="presentAddress"
              label="Present Address"
              fullWidth
            />
          </Box>
          <Box mb={marginBottom}>
            <TextField
              required
              multiline
              rows="3"
              type="text"
              id="permanentAddress"
              name="permanentAddress"
              label="Permanent Address"
              fullWidth
            />
          </Box>
          <Box mb={marginBottom}>
            <TextField
              required
              type="text"
              id="nid"
              name="nid"
              label="National Identification Number (NID)"
              fullWidth
            />
          </Box>
          <Box mb={marginBottom}>
            <TextField
              required
              select
              id="bloodGroup"
              name="bloodGroup"
              label="Blood Group"
              fullWidth
            >
              {bloodGroups.map(bloodGroup => (
                <MenuItem key={bloodGroup.label} value={bloodGroup.value}>
                  {bloodGroup.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box mb={marginBottom}>
            <TextField
              required
              type="text"
              id="emergencyContactName"
              name="emergencyContactName"
              label="Emergency Contact Name"
              fullWidth
            />
          </Box>
          <Box mb={marginBottom}>
            <TextField
              required
              type="tel"
              id="emergencyContactNumber"
              name="emergencyContactNumber"
              label="Emergency Contact Number"
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              required
              type="text"
              id="emergencyContactRelation"
              name="emergencyContactRelation"
              label="Relation With The Emergency Contact"
              fullWidth
            />
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
              onClick={() => console.log('device list page')}
            />
          </Box>
        </Box>
      </Form>
    </>
  );
};

export default AddEmployee;
