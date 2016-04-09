document.write("asdas");
document.write("<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">");
document.write("	<div class=\"container\">");
document.write("		<div class=\"collapse navbar-collapse\">");
document.write("			<ul class=\"nav navbar-nav\">");
document.write("				<li><a href=\"#\">test1</a></li>");
document.write("				<li><a href=\"#\">test2</a></li>");
document.write("				<li><a href=\"#\">test3</a></li>");
document.write("				<li><a href=\"#\">test4</a></li>");
document.write("				<li><a href=\"#\">test5</a></li>");
document.write("			</ul>");
document.write("			<ul class=\"nav navbar-nav navbar-right\">");
document.write("				<li><a href=\"register.jsp\">Register</a></li>");
document.write("				<li><a href=\"signin.jsp\">Sign In</a></li>");
document.write("			</ul>");
document.write("		</div>");
document.write("	</div>");
document.write("</nav>");

$(function(){
	$("ul:nth(0)>li").mouseover(function(){
		//alert("as");
		$(this).addClass("active");
	});
	$("ul>li").mouseout(function(){
		//alert("as");
		$("ul>li").removeClass("active");
	});
});
