import Search from './models/Search';

/* App Global State
ToDo - Search Obj
ToDo - Current recipe obj
ToDo - Shopping list obj
ToDo - Liked recipes
*/
const state = {};

const search = new Search('pizza');
console.log(search);
console.log(search.getResults());
