const assert = require ('assert');
var isFromPaarl = function(regNumber){
  var results = regNumber.startsWith('CJ');
  return results;
};
assert.equal(isFromPaarl('CJ 512'), true);
