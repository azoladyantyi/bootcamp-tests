const assert = require ('assert');
var sameWeekday = function(firstDate, secondDate){
var new Date('firstDate');
var new Date('secondDate');

  var results = new Date(firstDate) == new Date(secondDate);
  console.log(results);
  return results;
};
assert.equal(sameWeekday('2010-04-01', '2010-04-10'),false);
assert.equal(sameWeekday('2016-11-04', '2016-11-11'),false);
