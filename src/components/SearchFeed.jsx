import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchVideos } from '../utils/fetchApi';
import { Videos } from './';

function SearchFeed() {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchVideos(`/search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: '100px' }}
      >
        Search Results for{' '}
        <span style={{ color: '#c00' }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        {videos && <Videos videos={videos} />}
      </Box>
    </Box>
  );
}

export default SearchFeed;
