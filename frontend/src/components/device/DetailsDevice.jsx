import React from 'react';
import Box from '@material-ui/core/Box';
import { PageHeader, Button } from '../lib';

const DetailsDevice = () => (
  <>
    <PageHeader headerText="Device Details" />
    <Box mb={1.25}>Device Name: HP Laptop</Box>
    <Box>
      <Button
        label="Edit"
        color="primary"
        variant="contained"
        onClick={() => console.log('employee edit')}
      />
    </Box>
  </>
);

export default DetailsDevice;
