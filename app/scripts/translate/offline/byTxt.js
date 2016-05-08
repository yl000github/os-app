//读取txt，转换为json，查找，效率倒是一个问题
var ByTxt=function(){
	this.filePath="app/res/dic-json.txt";
	this.jsonData;
	this.read();
}
ByTxt.prototype.read=function(){
//	nodeRequire("fs");
	var fs=nodeRequire("fs");
	//异步读取
	//fs的当前路径指的是项目跟目录
	fs.readFile(this.filePath, function (err, data) {
		if (err) {
			return console.error(err);
		}
		ByTxt.jsonData=JSON.parse(data.toString());
		console.log("数据加载完成");
		console.dir(ByTxt.jsonData);
		console.dir(ByTxt);
//	 console.log(data.toString());
	});
}
ByTxt.prototype.find=function(en){
	var data=ByTxt.jsonData;
	if(!data) return "数据没有读取完成";
	for(var i=0;i<data.length;i++){
		if(data[i].en.indexOf(en)!=-1){
			return data[i].ch;
		}
	}
	return "未找到翻译";
}
module.exports=ByTxt;
