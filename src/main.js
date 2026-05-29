import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  emptyQueryAlert,
  noImagesAlert,
  hideLoader,
  showLoader,
} from './js/render-functions';

const form = document.querySelector('form.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  var user_query = event.target.elements['search-text'].value.trim();
  if (user_query == '') {
    emptyQueryAlert();
    return;
  }

  console.debug('User query: ' + user_query);

  showLoader();
  clearGallery();
  getImagesByQuery(user_query)
    .then(images => {
      if (!images.length) {
        noImagesAlert();
      }
      createGallery(images);
    })
    .catch(() => {
      noImagesAlert();
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
});
