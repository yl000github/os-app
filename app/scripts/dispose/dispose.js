/**
 * 0 app
 * 1 omp
 */
$(function(){
	$("#app-process").click(function(){
		var dir=$("#app-dir").val();
		var result=taskList(0,dir);
		$("#app-result").html(result);
	});
	$("#omp-process").click(function(){
		var dir=$("#omp-dir").val();
		var result=taskList(1,dir);
		$("#omp-result").html(result);
	});
	
})
function taskList(type,dir){
	changeWebXml(type,dir);
	ignore(type,dir);
	jsProject(type,dir);
	rename(type,dir);
	copyWinder(type,dir);
	return "done";
}
function changeWebXml(type,dir){
	function change(path,repl){
		var f=new File(path);
		var data=f.find();
		var begin=data.indexOf("<param-value>")+13;
		var end=data.indexOf("</param-value>");
		var origin=data.substring(begin,end);
		console.log("需替换的变量："+origin);
		f.change(origin,repl);
	}
	if(type==0){
		change(conf.appWebXml,conf.appProjectPos);
	}else{
		change(conf.ompWebXml,conf.ompServerPos);
	}
	console.warn("修改xml成功");
//	var f=new File("d:/hhhh.txt");
//	f.create('1321421');
//	f.rename("d:/hhhhx.txt");
//	f.create('1321421');
////	f.del();
////	f.change('1','xx');
//	console.log(f.find());
//	console.log(f.find('人'));
}
function ignore(type,dir){
	//TODO  
}
function copyWinder(type,dir){
	//TODO  
	if(type==0){
		copyFolder(conf.appSrc_winder,conf.appProjectPos+"/winder");
		var f=new File(conf.appSrc_pos+"/lib/userAuth.js");f.copy(conf.appProjectPos+"/lib/userAuth.js");
	}else{
		copyFolder(conf.ompSrc_winder,conf.ompServerPos+"/winder");
		copyFolder(conf.ompSrc_pos+"/lib",conf.ompServerPos+"/lib");
	}
//	copyFolder("d:/pic111","d:/pic111copy");
}
function rename(type,dir){
	if(type==0){
		var f=new File(conf.appProjectPos+"/ymt_jsse_quartz.json");
		f.rename(conf.appProjectPos+"/ymt_jsse_quartz1.json");
	}else{
		var f=new File(conf.ompServerPos+"/ymt_jsse_quartz.json");
		f.rename(conf.ompServerPos+"/ymt_jsse_quartz1.json");
	}
}
function jsProject(type,dir){
	function copy(src,des){
		var f=new File(src);
		f.copy(des);
	}
	//新增几个文件
	if(type==0){
		copy(conf.appSrc_pro,conf.appDes_pro);
		copy(conf.appSrc_jsdt,conf.appDes_jsdt);
//		copy(appSrc_jsdt,appDes_jsdt);
	}else{
		copy(conf.ompSrc_pro,conf.ompDes_pro);
		copy(conf.ompSrc_jsdt,conf.ompDes_jsdt);
	}
	console.warn("更改项目配置成功");
}
//function ignore(type,dir){
//	
//}
