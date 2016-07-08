$(function(){
	$("#insert-button").click(function(){
		var input=$("#insert-input").val();
		var output=input.split(",").each(function(element,index){
			return "@"+element;
		}).join(",");
		$("#insert-output").html(output);
	});
})