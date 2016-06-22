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
		for(var i=1;i<=bits;i++){
			r+=parseInt(Math.random()*10);
			if(i%2==0) r+=" ";
		}
		$("#longNumResult").html(r);
	});
	$("#show-result").click(function(){
		var filepath="../res/images/1.png";
		var num=$("#randNumResult").html();
		filepath=filepath.replace("1",num);
		$("#imgResult").attr("src",filepath);
	});
	$("#show-tip").click(function(){
		var r=$("#longNumResult").html();
		var numArr=r.split(" ");
		var html="";
		for(var i=0;i<numArr.length;i++){
			var n=numArr[i];
//			console.log(n);
			if(n.trim()=="") continue;
			if(n.indexOf("0")==0) n=n.substring(1,2);
			html+="<img class=\"pic\" src=\"../res/images/"+n+".png\" />";
		}
		$("#tip").html(html);
	});
})