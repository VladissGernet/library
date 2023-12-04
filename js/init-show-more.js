import {books} from './elements.js';
import {ShowMoreContent} from './constats.js';

const initShowMore = () => {
  books.addEventListener('click', (evt) => {
    const selectedShowMoreButton = evt.target.closest('.more');
    if (selectedShowMoreButton === null) {
      return;
    }
    const isShowMoreButtonActive = selectedShowMoreButton.previousElementSibling.classList.contains('short');
    selectedShowMoreButton.previousElementSibling.classList.toggle('short');
    if (isShowMoreButtonActive === false) {
      selectedShowMoreButton.textContent = ShowMoreContent.MORE;
    } else {
      selectedShowMoreButton.textContent = ShowMoreContent.HIDE;
    }
  });
};

export {initShowMore};
