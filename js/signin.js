$(function(){
	$("ul:nth(0)").remove();
	$("input").blur(function(){
//		var obj=$(this).val();
//		if(!isSpace(obj)){
//			if(obj.length<=6){
//				alert("The number of word must bigger than six!");
//			}
//		}
	});
	$("button[type='submit']").click(function(){
		alert(12);
	});
	function isSpace(data){
		if(data==""||data==null) return true;
		return false;
	}
});