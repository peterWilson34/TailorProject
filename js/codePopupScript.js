$(document).ready(function () {
    $(".code ").click(function () {
        
        var text = getSelectedText();
        
        $("#content-code").html(text);
        $("#popup").fadeIn();
        $('#btn_exit').fadeIn();
    });

    $('#modal').on("click", function () {
        fadeout();
    });

    $('#btn_exit').on("click", function () {
        fadeout();
    });
});
function fadeout() {
    $('#btn_exit').fadeOut();
    $("#popup").fadeOut();
}
function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    }
    else if (document.getSelection) {
        return document.getSelection();
    }
    else if (document.selection) {
        return document.selection.createRange().text;
    }
}