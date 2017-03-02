//const assert = require ('assert');
var regCheck = function(registrationNumber, location){
  var results = registrationNumber.endsWith(location);
  console.log(results);
  return results;
};
//assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
//assert.equal(regCheck('DV 23 LP GP', 'MP'),false);
