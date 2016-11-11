const assert = require ('assert');
var isFrom = function(registrationNo, Province){
  var results = registrationNo.endsWith(Province);
console.log(results);
  return results;


};
 assert.equal(isFrom('CA182736, Western Cape'),false);
