const assert = require ('assert')
const date = new Date('2010-04-01');
var yearsAgo = function(currentYear){
  var year = new Date(currentYear);
  var results = year.getFullYear() - date.getFullYear();
  console.log(results);
  return results;
};
assert.equal(yearsAgo('2016-01-25'),6);
