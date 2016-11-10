const assert = require ('assert');
var regCheck = function(registrationNumber, check){
  var results = registrationNumber.endsWith(check);
  console.log(results);
  return results;
};
assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
assert.equal(regCheck('DV 23 LP GP', 'MP'),false);
