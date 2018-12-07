var fs = require("fs");
//保存
exports.save = function(number,resultArr){
  fs.writeFile("./data/"+number+".txt",JSON.stringify(resultArr));
}
//读取
exports.read = function(number,callback){
  
  fs.readFile("./data/"+number+".txt",function(err,data){
    if(err){
      callback(-1);
      return;
    }
    callback(JSON.parse(data))
  })
}
