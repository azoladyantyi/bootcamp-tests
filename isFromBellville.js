const assert = require ('assert');
var isFromBellville = function(regNumber){
  var results = regNumber.startsWith('CY');
  return results;
};
assert.equal(isFromBellville('CY 123'), true);
