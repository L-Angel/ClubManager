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
	var $username=$("input[name='username']");
	var $password=$("input[name='password']");
	$("button[type='submit']").click(function(){
		alert(12);
	});
	$("button[type='reset']").click(function(){
		$username.val("");
		$password.val("");
	});
	function isSpace(data){
		if(data==""||data==null) return true;
		return false;
	}
});