export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__field'),
  searchResults: document.querySelector('.results'),
  searchResultsList: document.querySelector('.results__list')
};

export const renderLoader = parent => {
  const loader = `
    <div className="loader">
      <svg>
        <use href="../../../dist/img/icons.svg#icon-cw"></use>
      </svg>
    </div>
  `;
  parent.insertAdjacentHTML('afterbegin', loader);
};
