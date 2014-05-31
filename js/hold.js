
var interval;
$(document).ready(function () {

    $("#draw").on('mousedown', function (e) {
        interval = setInterval(function () {
            target = e.target;
            if (target.id != "body" ) {
            }
            if ($(target).get(0).localName == "input") {
                $(target).css("background-color", "red");
                $(target).css("box-sizing", "content-box");
                $(target).css("position", "relative");
                var div = document.createElement("div");
                $("#draw").append(div);
                $(div).width($(target).width());
                $(div).height($(target).height());
                $(div).css("position", "absolute");
                $(div).css("left", $(target).get(0).offsetLeft);
                $(div).css("top", $(target).get(0).offsetTop);
                $(div).addClass("button-drag");
                $(div).draggable();
                $(div).attr("id", $(target).attr("id"));
            }
            if ($(target).attr("class")) {
                if ($(target).attr("class").indexOf("button-drag") >= 0 && $(target).attr("class").indexOf("ui-draggable-dragging") <= 0) {
                    $(target).remove();
                }
            }
            $(target).css("box-sizing", "border-box");

            clearInterval(interval);
        }, 1000); 
    });
    $("#draw").on('mouseup', function (e) {
        clearInterval(interval);
    });
    $("body").on("mousemove", ".button-drag", function () {
        $("input#" + $(this).attr("id") + "").css("left", $(this).css("left"));
        $("input#" + $(this).attr("id") + "").css("top", $(this).css("top"));
    });
    $("body").on("mousemove", ".button-drag", function () {
        $("input#" + $(this).attr("id") + "").css("left", $(this).css("left"));
        $("input#" + $(this).attr("id") + "").css("top", $(this).css("top"));
    });

    $("body").keyup(function (event) {
         if ( event.which == 27 ) {
             $(".button-drag").remove();
          }
    });
});
    