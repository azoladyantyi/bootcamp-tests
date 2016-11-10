const assert = require('assert');
  var dayToday = function(today){
  var results = today.endsWith('day');
  console.log(results);
  return results;

};
assert.equal(dayToday('Thursday'),true);
