const assert = require ('assert');
var isTuesday = function(Day){
  var results = Day.startsWith('Tu');
  console.log(results);
  return results;
};
assert.equal(isTuesday('Tuesday'), true);
assert.equal(isTuesday('Friday'), false);
