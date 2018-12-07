var math = require("../models/math.js");
var file = require("../models/file.js");
exports.showIndex = function(req,res){
  res.render("index",{

  })
}
exports.showResult = function(req,res){

  var number = req.params.number;
  console.log(number);
  //先命领文件读取
  file.read(number,function(resultsArr){

    if(resultsArr ==  -1){
      //表示当前文件不存在
      //命令模型（小兵）来计算
      var resultsArr = math.calc(number);
      //写入文件
      file.save(number,resultsArr);
    }
    //呈递视图
    res.render("result",{
      "number":number,
      "resultsArr":resultsArr
    })
  })
}
