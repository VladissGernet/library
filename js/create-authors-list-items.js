import {pluralize} from './util.js';
import {booksArrayToPluralize} from './constats.js';
import {authorList} from './elements.js';

const createAuthorsListItems = (items) => {
  const selectedAuthorsList = items.map((authorName) => {
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
  authorList.innerHTML = '';
  authorList.insertAdjacentHTML('afterbegin', selectedAuthorsList);
};

export {createAuthorsListItems};
