/**
 * Created by Rick on 16/4/10.
 */
$(function(){
    $("ul:nth(0)").remove();
    var $username=$("input[name='username']");
    var $password=$("input[name='password']");
    var $repassword=$("input[name='repassword']");
    var $email=$("input[name='email']");
    $("button[type='submit']").click(function(){
        alert(12);
    });
    $("button[type='reset']").click(function(){
        $password=$("input[name='password']").val("");
        $repassword=$("input[name='repassword']").val("");
        $email=$("input[name='email']").val("");
    });

});