const assert = require('assert')
  var dayToday = function(){
    var today = new Date();
var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
var results = weekDays[today.getDay()];
console.log(results);
  return results;
};

assert.equal(dayToday('2016-08-01'));
