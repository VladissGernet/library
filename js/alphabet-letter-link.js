import {authorsFirstSection, siteNavigation} from './elements.js';
import {authors} from './mock.js';
import {createAuthorsSection} from './create-authors-section.js';
import {initAuthorNameClickListener, onAuthorNameClick} from './author-name-click-listener.js';

const initAlphabetLetterLinkListener = () => {
  const onLinkClick = (evt) => {
    const link = evt.target.closest('a');
    if (link === null) {
      return;
    }
    const isHrefInLink = link.hasAttribute('href');
    if (isHrefInLink === false) {
      return;
    }
    const selectedAuthorsData = authors.find(({key}) => key === link.textContent);
    authorsFirstSection.removeEventListener('click', onAuthorNameClick);
    initAuthorNameClickListener([selectedAuthorsData]);
    authorsFirstSection.innerHTML = '';
    authorsFirstSection.insertAdjacentHTML('afterbegin', createAuthorsSection(selectedAuthorsData));
  };
  siteNavigation.addEventListener('click', (evt) => onLinkClick(evt));
};

export {initAlphabetLetterLinkListener};

