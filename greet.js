const assert = require('assert');
var greet = function(name){
  console.log('hi,' + name)
  return 'Hi,' + name;
};
assert.equal(greet('Azola'), 'Hi,' + 'Azola');
