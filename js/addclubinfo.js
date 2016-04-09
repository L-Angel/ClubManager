/**
 * Created by Rick on 16/4/9.
 */
$(function () {
        var $clubname = $("input[name='clubname']");
        var $clubmanager = $("input[name='clubmanager']");
        var $teacher = $("input[name='teacher']");
        var $describe = $("textarea[name='describe']");
        var $buildtime = $("input[name='buildtime']");
        $("#sbmit").click(function(){

        });
        $("#reset").click(function(){
                $clubname.val("");
                $clubmanager.val("");
                $teacher.val("");
                $describe.val("");
                $describe.val("");
                $buildtime.val("");
                alert_failure();
               // alert_success();
        });
        
        
        function alert_failure(){
                $(".alert-danger").show(500);
                setTimeout(function () {
                        $(".alert-danger").hide(500);
                },3000);
        }
        function alert_success(){
                $(".alert-success").show(500);
                setTimeout(function () {
                        $(".alert-success").hide(500);
                },3000);
        }

    }
);