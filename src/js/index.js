import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader } from './views/base';

/* App Global State
ToDo - Search Obj
ToDo - Current recipe obj
ToDo - Shopping list obj
ToDo - Liked recipes
*/
const state = {};

const controlSearch = async () => {
  // ToDo - Get query
  const query = searchView.getInput();
  //
  if (query) {
    // if there is a query create new search and add it to the global app state
    state.search = new Search(query);
    // prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchResults);
    // search for recipes
    await state.search.getResults();
    // render results to UI
    searchView.renderResults(state.search.result);
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
