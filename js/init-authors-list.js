import {authors} from './mock.js';
import {mainLetter} from './elements.js';
import {createAuthorsListItems} from './create-authors-list-items.js';

const initMainPageAuthorsList = () => {
  const {key} = authors[0];
  const firstLetterAuthorsData = authors[0].items;
  mainLetter.textContent = key;
  mainLetter.id = key;
  createAuthorsListItems(firstLetterAuthorsData);
};

export {initMainPageAuthorsList};
