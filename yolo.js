var checkMonth = function(month){
  var date = new Date(month);
  var m = date.getMonth();
  console.log(m);
  return m;
};
checkMonth('june, 6, 2016');
