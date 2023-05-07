import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import logo from '../assets/logo.svg';
import SearchBar from './SearchBar';
function Navbar() {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link
        to="/"
        
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <img src={logo} alt="logo" height={45} />
        <Typography sx={{ color: '#c00', paddingLeft: 1 }} variant="h5">
          BEDEIR
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
