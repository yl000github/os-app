$(function(){
	$("#gen-num").click(function(){
		var len=101;
		var n=parseInt(Math.random()*len);
		$("#randNumResult").html(n);
	});
	$("#gen-longnum").click(function(){
		//20位
		var bits=20;
		var r="";
		for(var i=0;i<bits;i++){
			r+=parseInt(Math.random()*10);
		}
		$("#longNumResult").html(r);
	});
	$("#show-result").click(function(){
		var filepath="../res/images/1.png";
		var num=$("#randNumResult").html();
		filepath=filepath.replace("1",num);
		$("#imgResult").attr("src",filepath);
	});
})