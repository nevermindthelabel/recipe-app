export const elements = {
  searchForm: document.querySelector('.search'),
  searchInput: document.querySelector('.search__field'),
  searchResultsList: document.querySelector('.results__list')
};

export const renderLoader = parent => {
  const loader = `
    <div className="loader">
      <svg>
        <use href="img/icons.svg#icon-cw" />
      </svg>
    </div>
  `;
  parent.insertAdjacentHTML('afterbegin', loader);
};
