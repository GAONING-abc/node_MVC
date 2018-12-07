var express = require("express");
var app = express();
var controller = require("./controllers/controller.js")
//配置模板引擎

// set .html as the default extension
app.set('view engine', 'ejs');


app.get('/', controller.showIndex);
app.get("/:number",controller.showResult);
//配置静态文件
app.use(express.static("public"));
app.listen(3000);
