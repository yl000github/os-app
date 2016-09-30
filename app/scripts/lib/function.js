/**
 * 产生html代码
 * @param {Function} templateFn
 */
Array.prototype.fold=function(templateFn) {
  var len=this.length;
  var str=' ';
  for (var i=0 ; i<len ; i++)
        str+=templateFn(this[i]);
  return str;
};
/**
 * each操作
 * @param {Function} fn(element,index)
 */
Array.prototype.each = function(fn){
    fn = fn || Function.K;
     var a = [];
     var args = Array.prototype.slice.call(arguments, 1);
     for(var i = 0; i < this.length; i++){
         var res = fn.apply(this,[this[i],i].concat(args));
         if(res != null) a.push(res);
     }
     return a;
};
Array.prototype.find=function(ob){
	for(var i=0;i<this.length;i++){
//		log(this[i],ob);
		if(this[i]==ob){
//			log("array",this);
//			log("ob",ob);
			return i;
		}
	}
	return -1;
}
/**
 * 去重
 */
Array.prototype.uniquelize = function(){
     var ra = new Array();
     for(var i = 0; i < this.length; i ++){
         if(ra.indexOf(this[i])<0){
            ra.push(this[i]);
         }
     }
     return ra;
};
/**
 * 求积
 */
Array.prototype.product = function(){
	var ji=1;
	for(var i=0;i<this.length;i++){
		ji*=this[i];
	}
	return ji;
};
/**
 * 顺序执行
 * @param {Function} g
 */
Function.prototype.sequence=function(g) {
  var f=this;
  return function() {
    f();g();
  }
};
/**
 * 数字字符串大小比较
 */
String.prototype.numCompare=function(s1){
	return (parseFloat(this)-parseFloat(s1))>0;
};

function log(flag,obj){
	flag="========="+flag+"=========";
	var str="";
	try {
		if(obj instanceof Object){
			str=JSON.stringify(obj);
		}else{
			str=obj;
		}
	} catch (e) {
		str=obj;
	}
	console.log(flag+str);
}

















