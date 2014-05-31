$(document).ready(function () {
    var x1;
    var x2;
    var y1;
    var y2;
    var no = 0;
    var createdDiv;
    var downEnable = false;
    
    $("body").on("mousedown", "div.draw", function (e) {
        $("input").addClass("box");
        if (event.which == 1) {//left click pressed
            x1 = x2 = e.clientX-320;
            y1 = y2 = e.clientY-150;

            var div = document.createElement("div");

            $("#draw").append(div);

            div.id = "d" + no;

            createdDiv = $(("#d" + no));

            createdDiv.addClass("create-div");

            createdDiv.css("border", "1px red dotted");
            if (x1 > x2) {
                createdDiv.css("left", x2 + "px");
            } else {
                createdDiv.css("left", x1 + "px");
            }
            if (y1 > y2) {
                createdDiv.css("top", y2 + "px");
            } else {
                createdDiv.css("top", y1 + "px");
            }

            createdDiv.css("width", Math.abs(x2 - x1) + "px");
            createdDiv.css("height", Math.abs(y2 - y1) + "px");
            createdDiv.css("position", "absolute");
            no++;
            EventsMoving();
            downEnable = true;
        }
    });
    //$("div.draw").first().on("mousedown", function (e) {
    //    $("input").addClass("box");
    //    if (event.which == 1) {//left click pressed
    //        x1 = x2 = e.clientX;
    //        y1 = y2 = e.clientY;

    //        var div = document.createElement("div");

    //        $("#draw").append(div);

    //        div.id = "d" + no;

    //        createdDiv = $(("#d" + no));

    //        createdDiv.addClass("create-div");

    //        createdDiv.css("border", "1px red dotted");
    //        if (x1 > x2) {
    //            createdDiv.css("left", x2 + "px");
    //        } else {
    //            createdDiv.css("left", x1 + "px");
    //        }
    //        if (y1 > y2) {
    //            createdDiv.css("top", y2 + "px");
    //        } else {
    //            createdDiv.css("top", y1 + "px");
    //        }

    //        createdDiv.css("width", Math.abs(x2 - x1) + "px");
    //        createdDiv.css("height", Math.abs(y2 - y1) + "px");
    //        createdDiv.css("position", "absolute");
    //        no++;
    //        EventsMoving();
    //        downEnable = true;
    //    }
    //});
    $("body").on("mouseup", "div.draw", function (e) {
        if (event.which == 1) {//left click pressed

            downEnable = false;
            if (createdDiv) {
                createdDiv.addClass("drag");
                createdDiv.on("mousedown", function () {
                    event.stopPropagation();
                });
                $(".drag").resizable();
                $(".drag").draggable();

            }
        }
    });
    //$("div.draw").first().on("mouseup", function (e) {
    //    if (event.which == 1) {//left click pressed

    //        downEnable = false;
    //        if (createdDiv) {
    //            createdDiv.addClass("drag");
    //            createdDiv.on("mousedown", function () {
    //                event.stopPropagation();
    //            });
    //            $(".drag").resizable();
    //            $(".drag").draggable();

    //        }
    //    }
    //});
    $("body").on("mousemove", "div.draw", function (e) {

        if (downEnable) {
            if (createdDiv) {
                x2 = e.pageX;
                y2 = e.pageY;
                if (x1 > x2) {
                    createdDiv.css("left", x2 + "px");
                } else {
                    createdDiv.css("left", x1 + "px");
                }
                if (y1 > y2) {
                    createdDiv.css("top", y2 + "px");
                } else {
                    createdDiv.css("top", y1 + "px");
                }
                createdDiv.css("width", Math.abs(x2 - x1-320) + "px");
                createdDiv.css("height", Math.abs(y2 - y1-150) + "px");

            }
        }
    });
    //$("div.draw").mousemove( function (e) {

    //    if (downEnable) {
    //        if (createdDiv) {
    //            x2 = e.pageX;
    //            y2 = e.pageY;
    //            if (x1 > x2) {
    //                createdDiv.css("left", x2 + "px");
    //            } else {
    //                createdDiv.css("left", x1 + "px");
    //            }
    //            if (y1 > y2) {
    //                createdDiv.css("top", y2 + "px");
    //            } else {
    //                createdDiv.css("top", y1 + "px");
    //            }
    //            createdDiv.css("width", Math.abs(x2 - x1) + "px");
    //            createdDiv.css("height", Math.abs(y2 - y1) + "px");

    //        }
    //    }
    //});
    function EventsMoving() {
        $("div.create-div").on("mouseup", function (e) {
            downEnable = false;
            if (createdDiv) {
                createdDiv.addClass("drag");
            }
        });
    }

});

