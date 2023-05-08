// // import Notiflix from 'notiflix';

// // const reqw = fetch('https://pokeapi.co/api/v2/pocemon/2');
// // console.log(reqw);

// // fetch('https://pokeapi.co/api/v2/pocemon/2').then(data => {
// //   console.log(data);
// // });

// // ======================================HW====================================
// // const fetchCountries = fetch('https://restcountries.com/v3.1/name/{name}');
// // let country;
// // let capital;
// // let languages;

// // создать функцию получения названия из инпута и вставку в запрос

// // обнаружить окно ввода
// // повесить прослушиватель собітий
// // привести в нижний регистр
// // переадресовать в адрес запроса

// // Тобі потрібні тільки наступні властивості:

// // ==========================name.official - повна назва країни (
// //restcountries.com/v3.1/name/aruba?fullText=true)
// // https: country = fetch(
// //   'https://restcountries.com/v3.1/name/ukraine?fullText=true'
// // );
// // console.log(country);

// //

// // import countryCards from '/src/partials/country-cards.hbs';
// // const counryInfo = document.querySelector('country-info');
// //================================massive of countries================//
// fetch('https://restcountries.com/v3.1/all')
//   .then(response => {
//     return response.json();
//   })
//   .then(countries => {
//     console.log(countries);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// fetch('https://restcountries.com/v3.1/all?limit=10')
//   .then(response => {
//     return response.json();
//   })
//   .then(countries => {
//     console.log(countries);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// //===============================info about choused country====================//
// // fetch('https://restcountries.com/v3.1/name/canada?fullText=true')
// //   .then(response => {
// //     return response.json();
// //   })
// //   .then(country => {
// //     console.log(country);
// //     // const markup = countryCards(country);
// //     // console.log(markup);
// //     // counryInfo.innerHTML = markup;
// //   })
// //   .catch(error => {
// //     console.log(error);
// //   });
// //===============================info about choused country AFTER OPTIMIZATION====================//
// // import API from '../partials/api-service.js';
// const countryInfo = document.querySelector('.country-info');
// const searchCountry = document.querySelector('#search-box');

// searchCountry.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchName = form.elements.name.value;

//   fetchCountryName(searchName) //добавила АПИ после создания отдельного файла import API from '../partials/api-service.js'
//     .then(renderCountryCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
//   //   API.fetchCountryName(searchName) //добавила АПИ после создания отдельного файла import API from '../partials/api-service.js'
//   //     .then(renderCountryCard)
//   //     .catch(onFetchError)
//   //     .finally(() => form.reset());
// }

// // function fetchCountryName(countryName) {
// //   const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
// //   return fetch(url).then(response => {
// //     response.json();
// //   });
// // } // переносим в отдельній файл import API from '../partials/api-service.js'

// function renderCountryCard(country) {
//   const markup = `
// <div class="country-card">
//   <div class="flags"><img src="{{flags.svg}}" alt="{{name.common}}"></div>
//   <div class="body">
//     <h2 class="name">Name official: {{name.official}}</h2>
//     <h3 class="capital">capital: {{capital}}</h3>
//     <p class="population">population: {{population}}</p>
//     <p class="card-text">languages:</p>
//     {{#each languages}}
//     <ul class="language-group">
//       <li class="language-group-item">{{name}}</li>
//     </ul>
//     {{/each}}
//   </div>
// </div>
// `;
//   countryInfo.innerHTML = markup;
// }

// function onFetchError(error) {
//   console.log(error);
//   alert('Oops, there is no country with that name');
// }

// // ++++++++++++++++++++++++++++++++++++
// // const countryInfo = document.querySelector('.country-info');
// // const searchCountry = document.querySelector('#search-box');

// // searchCountry.addEventListener('submit', onSearch);

// // function onSearch(e) {
// //   e.preventDefault();

// //   const form = e.currentTarget;
// //   const searchName = form.elements.name.value;

// //   fetchCountryName(searchName)
// //     .then(renderCountryCard)
// //     .catch(error => console.log(error))
// //     .finally(() => form.reset());
// // }

// // function fetchCountryName(countryName) {
// //   return fetch(
// //     `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
// //   ).then(response => {
// //     return response.json();
// //   });
// // }

// // function renderCountryCard(country) {
// //   const markup = `
// // <div class="card">
// //   <div class="flags"><img src="${country.flags.svg}" alt="${
// //     country.name.common
// //   }"></div>
// //   <div class="body">
// //     <h2 class="name">Name official: ${country.name.official}</h2>
// //     <h3 class="capital">capital: ${country.capital}</h3>
// //     <p class="population">population: ${country.population}</p>
// //     <p class="card-text">languages:</p>
// //     ${country.languages
// //       .map(
// //         language => `
// //     <ul class="language-group">
// //       <li class="language-group-item">${language.name}</li>
// //     </ul>
// //     `
// //       )
// //       .join('')}
// //   </div>
// // </div>
// // `;
// //   countryInfo.innerHTML = markup;
// // }

// // +++++++++++++++++++++++++++++++++++++++

// // ==========================capital - столиця
// // capital = fetch('https://restcountries.com/v3.1/capital/london');
// // console.log(capital);

// // =====================population - населення
// // const population = fetch("");

// // ======================flags.svg - посилання на зображення прапора
// // const flags = fetch("");

// // ========================languages - масив мов
// // languages = fetch('https://restcountries.com/v3.1/lang/english');
// // console.log(languages);
