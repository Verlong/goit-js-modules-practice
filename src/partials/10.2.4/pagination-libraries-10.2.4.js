const form = document.querySelector('form');
const newsContainer = document.getElementById('news');

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '94e7350e65ba433baccbec406066c2bd';

function createNewsCardMarkup(newsArray) {
  const newsCards = newsArray.map(news => {
    return `
      <div class="news-card">
        <div class="news-card-image" style="background-image: url(${news.urlToImage})"></div>
        <div class="news-card-content">
          <h2 class="news-card-title">${news.title}</h2>
          <p class="news-card-description">${news.description}</p>
        </div>
      </div>
    `;
  });
  return newsCards.join('');
}

function fetchNews(event) {}

form.addEventListener('submit', fetchNews);
