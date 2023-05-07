import React, { useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { categories } from '../utils/constants';

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { md: 'column' },
        height: { sx: 'auto', md: '95%' },
        overflowY: 'auto',
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            backgroundColor: category.name === selectedCategory ? '#c00' : '',
            color: '#fff',
          }}
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectedCategory ? '#fff' : '#c00',
              marginRight: '10px',
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? '1' : '.8' }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
