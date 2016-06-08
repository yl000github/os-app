$(function(){
	$("#btn-compare").click(function(){
		var l=$("#l-content").val();
		var r=$("#r-content").val();
		var json1=JSON.parse(l);
		var json2=JSON.parse(r);
		var res=json1.normalize().compare(json2.normalize());
		$("#result").html(res);
	});
});
//格式混乱的比较
//思路，标准化，逐个递归比较
/**
 * 返回不同的地方，全部一致则返回ok
 */
Object.prototype.normalize=function(){
	return this;
}
Object.prototype.compare=function(json){
//	console.log("this:"+JSON.stringify(this));
//	console.log("param:"+JSON.stringify(json));
	json=json.normalize();
	var sss=com(this,json);
	return sss;
}
var t=100;
function com(l,r){
	var tl=typeof l;
	var tr=typeof r;
	if(tl!=tr) return log(l,r);
	if(tl=='number'||tl=='string'){
		if(l!=r){
			return log(l,r);
		}else{
			return "";
		}
	}
	var trs="";
	for(var k in l){
		if(t--<0) continue;
		if(k=='normalize'||k=='compare') continue;
//		console.log("k:"+k);
//		console.log("l:"+JSON.stringify(l)+"l[k]:"+l[k]);
//		console.log("r:"+JSON.stringify(r)+"r[k]:"+r[k]);
		var res=com(l[k],r[k]);
		trs+=res;
	}
	return trs;
}

function log(i1,i2){
	return "("+i1+","+i2+")";
}

















