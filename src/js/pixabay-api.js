import axios from 'axios';
import { API_KEY } from '../config.js';

// Idealy would be a class static properties
let page_number = 1;
let user_query;

export async function getImagesByQuery(query) {
  if (user_query === encodeURIComponent(query)) page_number++;
  else {
    user_query = encodeURIComponent(query);
    page_number = 1;
  }

  var URL =
    'https://pixabay.com/api/?key=' +
    API_KEY +
    `&q=${user_query}` +
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
