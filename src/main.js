import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  emptyQueryAlert,
  noImagesAlert,
  hideLoader,
  showLoader,
  hideLoadMoreButton,
  showLoadMoreButton,
  noMoreImagesAlert,
} from './js/render-functions';

const form = document.querySelector('form.form');
const loadMoreButton = document.querySelector('#load-more-button');

var user_query;

form.addEventListener('submit', async event => {
  event.preventDefault();

  user_query = event.target.elements['search-text'].value.trim();
  if (user_query == '') {
    emptyQueryAlert();
    return;
  }

  console.debug('User query: ' + user_query);

  showLoader();
  clearGallery();

  const images = await getImagesByQuery(user_query);

  hideLoader();
  if (!images.length) {
    noImagesAlert();
    return;
  }
  createGallery(images);
  showLoadMoreButton();

  form.reset();
});

loadMoreButton.addEventListener('click', async event => {
  const images = await getImagesByQuery(user_query);

  createGallery(images);
  if (!images.length) {
    noMoreImagesAlert();
    hideLoadMoreButton();
  }
});
