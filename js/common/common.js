/**
 * Created by Rick on 16/4/10.
 */
$(function () {
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
});
