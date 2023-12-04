import {authors} from './mock.js';
import {authorsFirstSection} from './elements.js';
import {createAuthorsSection} from './create-authors-section.js';

const initMainPageAuthorsList = () => {
  const receivedAuthors = authors.map((letter) => createAuthorsSection(letter)).join('');
  authorsFirstSection.innerHTML = '';
  authorsFirstSection.insertAdjacentHTML('afterbegin', receivedAuthors);
};

export {initMainPageAuthorsList};
