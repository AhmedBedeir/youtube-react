import React from 'react';
import { Box, Grid } from '@mui/material';
import { VideoCard, ChannelCard, Loader } from './';

function Videos({ videos, where, direction }) {
  if (!videos?.length) return <Loader where={where} />;
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        flexDirection: `${ direction || 'row'}`,
        flexWrap: 'wrap',
        
      }}
    >
      {videos.map((item, idx) => (
        <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ width: '100%' }}>
            {!item.id.videoId && !item.id.channelId && <></>}
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Videos;
