import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

function Loader({ where }) {
  return (
    // need to make this box in the center of the page
    <Box
      minHeight="95vh"
      sx={{
        margin: '0 auto',
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="80vh"
        className="fuck-box"
      >
        <CircularProgress />
      </Stack>
    </Box>
  );
}

export default Loader;
