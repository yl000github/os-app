$(function(){
//	setTimeout("console.log(1)",1000);
//	setTimeout(function(){
//		console.log(2)
//	},2000);
//	console.log(3)
	$("#r").click(function(){
		reqRecord(20);
	});
	$("#sg").click(function(){
//		reqSGStart();
		reqReappear("d:/logs/sg.txt");
	});
	$("#run").click(function(){
		var path=$("#runPath").val();
		console.log(path)
		reqReappear(path);
	});
});
//var url="http://localhost:10000/javaservice";
var url="http://localhost:8083/javaservice";
var count=10;
var config=nodeRequire("../res/config.js");
var t=parseInt(config.qqStartTime);
var t1=parseInt(config.inputSGTime);
var intervalID;
function reqSGStart(){
	//TODO 开启qq
	reqReappear(config.qqStartPath);
//	//TODO 循环输入
	delay(function(){
		intervalID=setInterval('runSG()',t1);
	},t);
}
function runSG(){
	console.log("runSG")
	if(count-->0){
		reqReappear(config.inputSGPath);
	}else{
		clearInterval(intervalID);
	}
}
function delay(fn,time){
	setTimeout(fn,time);
}

function reqRecord(time){
	$.ax(
			url,
			{
				name:"record",
				param:time
			},
			function(res){
				console.log('reqRecord:'+res);
				$("#path").html(res);
			});
}

function reqReappear(path){
	$.ax(
			url,
			{
				name:"reappear",
				param:path
			},
			function(res){
				//TODO
			});
}

function findMaxTime(path){
	nodeRequire('fs');
}





















