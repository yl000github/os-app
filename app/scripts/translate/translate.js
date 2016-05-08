// var fs = require("fs");
// //异步读取
// fs.readFile('d:/hello.txt', function (err, data) {
// if (err) {
//     return console.error(err);
// }
// console.log(data.toString());
// });
//$(function(){
//});
//这个当前路径指的是html所在的地方。。
var ByTxt=nodeRequire("../scripts/translate/offline/byTxt.js");
var service=new ByTxt();
console.dir(service)
function c2e(){
	var en=$("#en").val();
	var res=service.find(en);
	$("#ch").val(res);
}