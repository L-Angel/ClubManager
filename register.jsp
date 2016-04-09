<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>My JSP 'login.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<!-- 新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="css/bootstrap.min.css">

<!-- 可选的Bootstrap主题文件（一般不用引入） -->
<link rel="stylesheet" href="css/bootstrap-theme.min.css">
<link rel="stylesheet" href="css/signin.css">


<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="js/jquery.min.js"></script>

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="js/bootstrap.min.js"></script>
</head>

<body>
	<script language="javascript" src="js/common/header.js"></script>
	<div class="col-sm-2 signin bg-info">
		<h2 class="text-center">
			<label>注册</label>
		</h2>
		<form action="signin" method="post" class="form-line">
			<div class="form-group">
				<label>Username :</label> <input type="text" class="form-control"
					name="username" placeholder="Username" />
			</div>
			<div class="form-group">
				<label>Password :</label> <input type="password"
					class="form-control" name="password" placeholder="Password" />
			</div>
			<div class="form-group">
				<label>Repeat Password :</label> <input type="password"
					class="form-control" name="repassword"
					placeholder="Repeat Password" />
			</div>
			<div class="form-group">
				<label>Email :</label> <input type="text" class="form-control"
					name="email" placeholder="Email" />
			</div>
			<div class="m-btn-group">
				<button type="submit" class="btn btn-success">提交</button>
				<button type="reset" class="btn btn-warning">重置</button>
			</div>
		</form>
	</div>
</body>
</html>
