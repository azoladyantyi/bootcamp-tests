const assert = require ('assert');
const date = new Date('date');
var sameWeek = function(firstDate, secondDate){
  var results = firstDate.startsWith(secondDate);
  console.log(results);
  return results;
};
assert.equal(sameWeek('2010-04-01', '2010-04-10'),false);
assert.equal(sameWeek('2016-11-10', '2016-11-04'),false);
