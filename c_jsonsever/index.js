const Search = require('./database/search');
const tablelist = require('./database/table/list');
const tablelist1= require('./database/table/list1');
const openCity = require('./database/open_city');
const table = require('./database/table');
const table1 = require('./database/table1');
const table2 = require('./database/table2');
module.exports = () => {
  return { Search ,tablelist1,tablelist,openCity,table,table1,table2};
}