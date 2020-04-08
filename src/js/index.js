import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/* App Global State
ToDo - Search Obj
ToDo - Current recipe obj
ToDo - Shopping list obj
ToDo - Liked recipes
*/
const state = {};

const controlSearch = async () => {
  // ToDo - Get query
  const query = 'Pizza';
  //
  if (query) {
    // if there is a query create new search and add it to the global app state
    state.search = new Search(query);
    // prepare UI for results
    // search for recipes
    await state.search.getResults();
    // render results to UI
    console.log(state.search.result);
    console.log(state);
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
