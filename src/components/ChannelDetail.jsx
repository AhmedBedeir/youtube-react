import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchVideos } from '../utils/fetchApi';

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetchVideos(`/channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.items[0]);
    });
    fetchVideos(`/search?part=snippet&channelId=${id}`).then((data) => {
      setVideos(data.items);
    });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: '300px',
            background:
              'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
      </Box>
      {channelDetail && channelDetail.snippet && (
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      )}
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} where={'channel'} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
