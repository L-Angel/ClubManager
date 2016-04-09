$(function(){
	$("input").blur(function(){
//		var obj=$(this).val();
//		if(!isSpace(obj)){
//			if(obj.length<=6){
//				alert("The number of word must bigger than six!");
//			}
//		}
	});
	function isSpace(data){
		if(data==""||data==null) return true;
		return false;
	}
});