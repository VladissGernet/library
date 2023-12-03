import {showedAuthorsData} from './create-authors-list-items.js';
import {authorList, books} from './elements.js';

const initAuthorNameClickListener = () => {
  const onAuthorNameClick = (evt) => {
    const selectedAuthorLink = evt.target.closest('a');
    if (selectedAuthorLink === null) {
      return;
    }
    const authorName = selectedAuthorLink.dataset.value;
    const authorBooks = showedAuthorsData.find((element) => element.author === authorName).books;
    books.innerHTML = '';
    const createItemLayout = authorBooks.map(({img, title, year, price, summary}) => `
      <li class="book-item">
        <article class="book">
          <img src="img/${img}" width="95" height="130" alt="${title}">
          <div class="title-wrapper">
            <h3>${title}</h3>
            <p class="year">${year}</p>
          </div>
          <p class="price">${price} <a class="cart" href="#">Купить</a></p>
          <p class="description">${summary}</p>
          <a class="more" href="#">Скрыть описание</a>
        </article>
      </li>
    `).join('');
    const booksList = `
    <h2>${authorName}</h2>
    <ul class="book-list">
      ${createItemLayout}
    </ul>
`;
    books.insertAdjacentHTML('afterbegin', booksList);
  };
  authorList.addEventListener('click', onAuthorNameClick);
};

export {initAuthorNameClickListener};