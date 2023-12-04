import {pluralize} from './util.js';
import {booksArrayToPluralize} from './constats.js';

const createAuthorsListItems = (items) => items.map((authorName) => {
  const {author, books} = authorName;
  return `
    <li class="author-item">
      <a class="author-link" data-value="${author}" href="#">
        <h3>${author}</h3>
        <p>${books.length} ${pluralize(books.length, booksArrayToPluralize)}</p>
      </a>
    </li>
    `;
}).join('');

export {createAuthorsListItems};
