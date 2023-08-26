import axios from 'axios';

const AUTH_TOKEN = '38178261-5d1780438eb32c09ef72874ba';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchQuery = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: AUTH_TOKEN,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });

  return response.data;
};
