$(function(){
	setInterval('refresh()',1000);
})
var clipboard=nodeRequire('electron').clipboard;
var lastText,curText;
//lastText=clipboard.readText();
//curText=clipboard.readText();
function refresh(){
	var content=clipboard.readText();
	curText=content;
	if(curText!=lastText){
		lastText=curText;
		console.log(content);
		queue.enqueue(content);
		var html=queue.render();
		$("#list").html(html);
	}
}
//模拟队列
var Queue=function(){
	var data=new Array();
	var len=10;
	this.enqueue=function(a){
		data.push(a);
		if(data.length>len){
			this.dequeue();
		}
	};
	this.dequeue=function(){
		return data.shift();
	};
	this.render=function(){
		//获取渲染的html
//		data.each(function(element,index){
//			
//		});
		var html=data.fold(function(element){
			return '<h4>'+element+'</h4>';
		});
		return html;
	}
}
var queue=new Queue();