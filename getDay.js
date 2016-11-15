const assert = require('assert')
  var getDay = function(today){
  var today = new Date();
var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
var results = weekDays[today.getDay()];
console.log(results);
  return results;
};
assert.equal(getDay('2016-11-15'), 'Tuesday');
