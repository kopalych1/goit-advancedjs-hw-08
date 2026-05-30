import axios from 'axios';
import { API_KEY } from '../config.js';

export async function getImagesByQuery(query, page_number) {
  var URL =
    'https://pixabay.com/api/?key=' +
    API_KEY +
    `&q=${encodeURIComponent(query)}` +
    '&image_type=photo' +
    '&orientation=horizontal' +
    '&safesearch=true' +
    `&page=${page_number}` +
    '&per_page=15';

  try {
    const response = await axios.get(URL);
    return response.data.hits;
  } catch {
    return [];
  }
}
