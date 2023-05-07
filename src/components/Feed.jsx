import React, { useState, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { Sidebar, Videos } from './index';
import { fetchVideos } from '../utils/fetchApi';
function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('Ted');
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos(`/search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright © {new Date().getFullYear()} Bedeir
        </Typography>
      </Box>

      <Box p={1} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: '#fff' }}
        >
          {selectedCategory} <span style={{ color: '#c00' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
