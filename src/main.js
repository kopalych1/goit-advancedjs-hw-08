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
let page_number = 1;

form.addEventListener('submit', async event => {
  event.preventDefault();

  user_query = event.target.elements['search-text'].value.trim();
  if (user_query == '') {
    emptyQueryAlert();
    return;
  }
  page_number = 1;

  console.debug('User query: ' + user_query);

  showLoader();
  hideLoadMoreButton();
  clearGallery();

  try {
    const images = await getImagesByQuery(user_query, page_number);

    if (!images.length) {
      noImagesAlert();
      return;
    }
    createGallery(images);
    if (images.length == 15) showLoadMoreButton();
  } catch (error) {
    console.error(error);
    noImagesAlert();
  } finally {
    hideLoader();
    form.reset();
  }
});

loadMoreButton.addEventListener('click', async event => {
  try {
    const images = await getImagesByQuery(user_query, ++page_number);

    if (!images.length) {
      noMoreImagesAlert();
      hideLoadMoreButton();
      return;
    }
    createGallery(images);
  } catch (error) {
    console.error(error);
    noMoreImagesAlert();
    hideLoadMoreButton();
  }
});
