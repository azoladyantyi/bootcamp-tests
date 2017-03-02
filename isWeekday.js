//const assert = require ('assert');
var isWeekday = function(day){
  var results = !day.startsWith('S');
  console.log(results);
  return results;
};
//assert.equal(isWeekday('Tuesday'), true);
//assert.equal(isWeekday('Sunday'),false);
//assert.equal(isWeekday('Sunday'),false);
