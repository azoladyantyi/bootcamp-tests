const assert = require ('assert');
var isFromPaarl = function(regNumber){
  var results = regNumber.startsWith('CJ');
console.log(results);
  return results;
};
assert.equal(isFromPaarl('CJ 512'), true);
