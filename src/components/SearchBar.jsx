import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  return (
    <Paper
      component="form"
      sx={{
        pl: 2,
        borderRadius: 10,
        boxShadow: 'none',
        border: '1px solid #e3e3e3',
        mr: { sm: 5 },
      }}
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
        setSearchTerm('');
      }}
    >
      <input
        type="text"
        className="search-bar"
        value={searchTerm}
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '8px', color: 'red' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
