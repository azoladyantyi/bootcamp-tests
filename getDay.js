const assert = require ('assert');
var getDay = function(day){
  var results = day.startsWith('Th');
  console.log(results);
  return results;
};
assert.equal(getDay('Thursday'),true);
