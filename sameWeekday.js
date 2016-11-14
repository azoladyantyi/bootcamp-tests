const assert = require ('assert');
const weekdays = new Date('2016-11-08');
var sameWeekday = function(firstDate){
  var date = new Date(firstDate);
  var results = date.getDay() == weekdays.getDay();
  console.log(results);
  return results;
};
assert.equal(sameWeekday('2016-11-15'),1);
assert.equal(sameWeekday('2016-11-16'),0);
