import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 100,
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};
export const fetchVideos = async (url) => {
  const { data } = await axios.get(`${BASE_URL}${url}`, options);

  return data;
};
