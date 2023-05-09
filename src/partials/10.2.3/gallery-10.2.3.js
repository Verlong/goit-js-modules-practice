// 3. У цій задачі потрібно написати скрипт, який дозволить шукати фотографії за запитом, використовуючи API Unsplash. Вам необхідно зробити запит на сервер API Unsplash зі словом, введеним користувачем у вікно пошуку. Результати повинні виводитися в галереї зображень. Використовуй класовий підхід для створення запитів.
// Використовуй html з файлу infinite_scroll.html.
// Коли користувач вводить запит для пошуку та натискає кнопку пошуку, скрипт робить запит до API Unsplash та отримує список зображень. Якщо з користувач нічого не ввів і намагається зробити запит виводь Notify.warning("Enter some data!")
// Кожне зображення повинно бути виведене в HTML розмітці як окремий елемент списку зображень.
// Коли користувач натискає кнопку "load more", скрипт повинен зробити запит на сервер API Unsplash для наступної сторінки результатів пошуку та додати нові зображення до списку.
// Якщо запит не повертає результатів, скрипт повинен вивести повідомлення про те, що не знайдено жодного зображення: Notify.warning("Sorry no images were found");
// Коли були завантажені всі сторінки результатів пошуку, кнопка "load more" повинна бути прихована (додати клас Єis-hidden") і показати поп ап Notify.warning("The end!");
//https://unsplash.com/documentation

class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  #page;
  #searchQuery;
  #totalPage;

  #searchParams = new URLSearchParams({
    per_page: 30,
    client_id: this.#API_KEY,
    color: 'black',
    orientation: 'portrait',
  });

  constructor() {
    this.#page = 1;
    this.#searchQuery = '';
  }

  getImages() {
    return fetch(
      `${this.#BASE_URL}?${this.#searchParams}&page=${this.#page}&query=${
        this.#searchQuery
      }`
    ).then(r => r.json());
  }

  updadePage() {}

  get page() {}

  set page(newPage) {}

  set searchQuery(newQuery) {
    this.#searchQuery = newQuery;
  }
  get searchQuery() {
    return this.#searchQuery;
  }
}

const refs = {
  form: document.querySelector('.js-search-form'),
  list: document.querySelector('.js-gallery'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};
const { form, list, loadMoreBtn } = refs;

const unsplashApi = new UnsplashAPI();

function handleSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.query.value.trim();
  console.log(query);
  if (!query) return;
  list.innerHTML = '';
  unsplashApi.page = 1;
  unsplashApi.searchQuery = query;
  unsplashApi.getImages().then(data => {
    list.insertAdjacentHTML('beforeend', createGalleryCards(data.results));
    loadMoreBtn.classList.remove('.is-hidden');
  });
}

function handleClickLoadMore() {
  unsplashApi.page++;
  unsplashApi.getImages().then(data => {
    list.insertAdjacentHTML('beforeend', createGalleryCards(data.results));
  });
}

function createGalleryCards(images) {
  return images
    .map(
      ({ urls, alt_description }) => `<li class="gallery__item">
      <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
  </li>`
    )
    .join('');
}
