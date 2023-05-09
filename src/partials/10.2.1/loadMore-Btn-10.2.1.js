// ==============================================================================================
const fetchPostsBtn = document.querySelector('.btn');
const userList = document.querySelector('.posts');
const alertPopup = document.querySelector('.alert');

let isAlertVisible = false;

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const END_POINT = '/posts';
const LIMIT = 20;
let PAGE = 1;
const TOTAL_PAGES = Math.ceil(100 / LIMIT);
// const PARAMS = new URLSearchParams({ _limit: LIMIT, _page: PAGE });

fetchPostsBtn.addEventListener('click', handleClick);

function handleClick() {
  fetchPosts().then(data => {
    const markup = renderPosts(data);
    userList.insertAdjacentHTML('beforeend', markup);
  });
  if (PAGE === TOTAL_PAGES) {
    fetchPostsBtn.style.display = 'none';
    toggleAlertPopup();
  } else {
    fetchPostsBtn.textContent = 'Load more';
    PAGE++;
  }
}

function fetchPosts() {
  const url = `${BASE_URL}${END_POINT}?_limit=${LIMIT}&_page=${PAGE}`;
  return fetch(url).then(res => res.json());
}

function renderPosts(data) {
  const markup = data
    .map(({ id, title, body, userId }) => {
      return `<li>
                <h2 class="post-title">${title.slice(0, 30)}</h2>
                <p><b>Post id</b>: ${id}</p>
                <p><b>Author id</b>: ${userId}</p>
                <p class="post-body">${body}</p>
            </li>`;
    })
    .join('');

  return markup;
}

function toggleAlertPopup() {
  if (isAlertVisible) {
    return;
  }
  isAlertVisible = true;
  alertPopup.classList.add('is-visible');
  setTimeout(() => {
    alertPopup.classList.remove('is-visible');
    isAlertVisible = false;
  }, 3000);
}

// ========================================================================================================
