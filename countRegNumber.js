const assert = require ('assert');
var countRegNumber = function(registrationNumber){
  var results =registrationNumber.split(',')
  console.log(results);
  return results.length;
};
assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
