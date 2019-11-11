import React from 'react';
import Box from '@material-ui/core/Box';
import { PageHeader, Button } from './lib';

const DetailsEmployee = () => (
  <>
    <PageHeader headerText="Employee Details" />
    <Box mb={1.25}>Name: Kamal Sharif</Box>
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

export default DetailsEmployee;
