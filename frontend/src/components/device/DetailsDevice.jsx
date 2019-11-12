import React from 'react';
import Box from '@material-ui/core/Box';
import { useParams } from 'react-router-dom';
import { PageHeader, Button } from '../lib';

const DetailsDevice = () => {
  const { id } = useParams();

  return (
    <>
      <PageHeader headerText="Device Details" />
      <Box mb={1.25}>Device Id: {id}</Box>
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
};

export default DetailsDevice;
