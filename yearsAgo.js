const assert = require('assert');
var yearAgo = function(year, fullYear){
  var results = year.split(fullYear);
  console.log(results);
  return results.length;
}
assert.equal(yearAgo('2016', '360days'),1);
