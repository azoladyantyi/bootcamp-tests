//const assert = require('assert');
function yearsAgo(year){
var today = new Date();
return today.getFullYear() - year;
}
console.log(yearsAgo(1995));
//assert.equal(yearsAgo(1995), '22');
