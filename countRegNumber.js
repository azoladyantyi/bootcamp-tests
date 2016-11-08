const assert = require ('assert');
var countRegNumber = function(registrationNumber){
  var list = registrationNumber.split(',');
  var results = list.length;
  return results;
};
assert.equal(countRegNumber('CA 42665, AA 12 RT GP'),2);
