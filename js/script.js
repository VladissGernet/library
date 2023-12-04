import {createAlphabet} from './create-alphabet.js';
import {initAlphabetLetterLinkListener} from './alphabet-letter-link.js';
import {initMainPageAuthorsList} from './init-full-authors-list.js';
import {addMainPageAssistance} from './main-page-assistance.js';
import {initAuthorNameClickListener} from './author-name-click-listener.js';
import {authors} from './mock.js';
import {initShowMore} from './init-show-more.js';

createAlphabet();
initMainPageAuthorsList();
addMainPageAssistance();
initAlphabetLetterLinkListener();
initAuthorNameClickListener(authors);
initShowMore();
