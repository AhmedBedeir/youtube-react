import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Totop } from './components';
import './App.css';
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from './components';

function App() {
  return (
    <BrowserRouter basename="/youtube-react">
      <Totop />
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
            <Route
              path="*"
              element={
                <h1 style={{ color: '#c00', fontFamily: 'monospace', height: '95vh' }}>
                  404 Not Found😂
                </h1>
              }
            />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
