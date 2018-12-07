exports.calc=function(number){
  //在这里计算
  var resultsArr =[];
  for (var i = 0; i <=number; i++) {
    if (number % i == 0) {
      resultsArr.push(i)
    }
  }
  return resultsArr;
}
