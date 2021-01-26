$( document ).ready(function () {
    $("#send").click(
        function() {
            sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
            return false;
        }
    )
});
debugger;
function sendAjaxForm (result_form, ajax_form, url) {
    $.ajax ({
        url: url,
        type: "POST",
        dataType: "html",
        data: $("#"+ajax_form).serialize(),
        success: function (response) {
            result = $.parseJSON(response);            
        },
        error: function (respone) {
            console.log('данные не отправлены')
        }
    })
}