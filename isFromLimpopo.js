const assert = require ('assert');
var isFromLimpompo = function(regNumber){
  var results = regNumber.startsWith('DRT 122 L');
  return results;
};
assert.equal(isFromLimpompo('DRT 122 L GP 100 '), true);
