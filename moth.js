var monthAgo = function(1sMonth, 2nMonth){
  var date1 = new Date(1stMonth);
  var date2 = new Date(2nMonth);
  var results = date1.getMonth() - date2.getMonth();
  console.log(results);
  return results;
};
monthAgo('2016-03-01', '2016-10-01');
