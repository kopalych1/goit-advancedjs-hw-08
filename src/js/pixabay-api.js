import axios from 'axios';
import { API_KEY } from '../config.js';

export function getImagesByQuery(query) {
  var URL =
    'https://pixabay.com/api/?key=' +
    API_KEY +
    '&q=' +
    encodeURIComponent(query) +
    '&image_type=photo' +
    '&orientation=horizontal' +
    '&safesearch=true';

  return axios
    .get(URL)
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      console.error(error);
      return [];
    });
}
