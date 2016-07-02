$(function(){
	
	$("#process").click(process);
	$("#filepath").on("change",function(){
		var f=document.getElementById("filepath");
//		console.dir(f);
		console.log(f.files[0].path);
		var filepath=f.files[0].path;
		console.log(filepath);
		var fs=nodeRequire("fs");
		fs.readFile(filepath, function (err, d) {
			if (err) {
				return console.error(err);
			}
			data=d.toString();
			console.log("数据加载完成");
		});
	})
})
var data;
function process(){
	if(!data) alert("请稍后，data没有加载好");
	var arr=data.split("\r\n");
	//标准化
	arr=arr.each(function(element,index){
		if(element.trim()=="") return null;
		var ss=element.split(" ");
		var mode,path;var index=0;
		for(var i=0;i<ss.length;i++){
			if(ss[i].trim()!=""){
				if(index==0){
					mode=ss[i];
				}else{
					path=ss[i];
				}
				index++;
			}
		}
		return mode+" "+path;
	});
	console.dir(arr);
	//删除
	arr=arr.each(function(element,index){
		if(element.trim()=="") return null;
		var del=element.substring(element.indexOf("svn"),element.lastIndexOf("server")+7);
		element=element.replace(del,"");
//		console.log(element);
		return element;
	});
	console.dir(arr);
	arr.sort(function(a,b){
		var obA=parseLine(a);
		var obB=parseLine(b);
//		console.log(JSON.stringify(obA))
//		console.log(JSON.stringify(obB))
//		console.log(obA.path>obB.path)
		if(obA.path==obB.path) return 0;
		if(obA.path>obB.path){
			return 1;
		}else{
			return -1;
		}
	})
	console.dir(arr);
	var curType="";
	//显示
	var color;
	var html=arr.fold(function(line){
		var ob=parseLine(line);
		if(line.indexOf(".")==-1){
			var type=line.substring(2,line.length);
		}else{
			var type=line.substring(2,line.lastIndexOf("/"));
		}
		if(type!=curType){
			color=(color=="green"?"black":"green");
		}
		curType=type;
//		switch (ob.mode) {
//			case "M":
//				color="blue";
//				break;
//			case "A":
//				color="green";
//				break;
//			case "D":
//				color="red";
//				break;
//			default:
//				color="black";
//				break;
//		}
		return "<h4 style=\"color: "+color+";\">"+line+"</h2>";
	});
	$("#display").html(html);
}
function parseLine(line){
	var mode=line.substring(0,1);
	var path=line.substring(2);
	return {
		mode:mode,
		path:path
	};
}
function strContains(str,arr){
	for(var i=0;i<arr.length;i++){
		if(str.indexOf(arr[i])!=-1) return true;
	}
	return false;
}