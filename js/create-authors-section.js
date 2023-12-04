import {createAuthorsListItems} from './create-authors-list-items.js';

const createAuthorsSection = (data) => {
  const {key, items} = data;
  return `<section class="authors-section">
        <h2 id="${key}">${key}</h2>
        <ul class="author-list">
          ${createAuthorsListItems(items)}
        </ul>
      </section>`;
};

export {createAuthorsSection};
