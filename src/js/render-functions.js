import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const imagesGallery = document.querySelector('ul.gallery');
const loader = document.querySelector('div.loader');
const loadMoreButton = document.querySelector('#load-more-button');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryItem(image) {
  var webformatURL = image.webformatURL;
  var largeImageURL = image.largeImageURL;
  var tags = image.tags;
  var likes = image.likes;
  var views = image.views;
  var comments = image.comments;
  var downloads = image.downloads;

  return `
    <li class="gallery-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="gallery-stats">
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Likes</span>
          <span class="gallery-stats-value">${likes}</span>
        </div>
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Views</span>
          <span class="gallery-stats-value">${views}</span>
        </div>
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Comments</span>
          <span class="gallery-stats-value">${comments}</span>
        </div>
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Downloads</span>
          <span class="gallery-stats-value">${downloads}</span>
        </div>
      </div>
    </li>
  `;
}

export function clearGallery() {
  imagesGallery.innerHTML = '';
}

export function showLoader() {
  loader.style['display'] = 'block';
}
export function hideLoader() {
  loader.style['display'] = 'none';
}
export function showLoadMoreButton() {
  loadMoreButton.style['display'] = 'block';
}
export function hideLoadMoreButton() {
  loadMoreButton.style['display'] = 'none';
}

export function createGallery(images) {
  const items = images.map(createGalleryItem).join('');
  imagesGallery.insertAdjacentHTML('beforeend', items);
  lightbox.refresh();
}

export function noImagesAlert() {
  iziToast.error({
    title:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topCenter',
  });
}

export function emptyQueryAlert() {
  iziToast.error({
    title: 'Search string must not be empty',
    position: 'topCenter',
  });
}

export function noMoreImagesAlert() {
  iziToast.error({
    title: "We're sorry, but you've reached the end of search results.",
    position: 'topCenter',
  });
}
