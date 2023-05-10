class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  #page;
  #searchQuery;
  #totalPages;

  #searchParams = new URLSearchParams({
    per_page: 30,
    client_id: this.#API_KEY,
    color: 'black',
    orientation: 'portrait',
  });

  constructor() {
    this.#page = 1;
    this.#searchQuery = '';
    this.#totalPages = 0;
  }

  getImages() {
    return fetch(
      `${this.#BASE_URL}?query=${this.#searchQuery}&page=${this.#page}&${
        this.#searchParams
      }`
    ).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.statusText);
    });
  }

  get page() {
    return this.#page;
  }

  set page(newPage) {
    this.#page = newPage;
  }

  set searchQuery(newQuery) {
    this.#searchQuery = newQuery;
  }

  get searchQuery() {
    return this.#searchQuery;
  }

  get totalPages() {
    return this.#totalPages;
  }
  set totalPages(totalPages) {
    this.#totalPages = totalPages;
  }
}

const refs = {
  form: document.querySelector('.js-search-form'),
  list: document.querySelector('.js-gallery'),
  loadMoreBlock: document.querySelector('.more'),
};

const { form, list, loadMoreBlock } = refs;

const unsplashApi = new UnsplashAPI();

function createGalleryCards(images) {
  return images
    .map(
      ({ urls, alt_description }) => `<li class="gallery__item">
        <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
    </li>`
    )
    .join('');
}

function loadMoreItems() {}

function handleSubmit() {}

form.addEventListener('submit', handleSubmit);
