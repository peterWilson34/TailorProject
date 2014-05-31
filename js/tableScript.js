var tableNo = 0;
$(document).ready(function () {
    $('#tablebtn').on('click', function () {
        $(".popup").fadeIn(function () {
            $(".tablepopup").fadeIn();
        })
    });

    $('.popup').on('click', function () {
        $('.popup').css("display", 'none');
    })

    $('.tablepopup').on('click', function (event) {
        event.stopPropagation();
    })

    $("#createTable").on("click", function () {
        $('.popup').css("display", 'none');
        //var table = document.createElement("table");
        //document.body.appendChild(table);
        $(".drawing").append("<table id='table" + tableNo + "'></table>");
        var rows = $("#rows").val();
        var columns = $("#columns").val();
        var height = $("#height").val();
        var width = $("#width").val();
        for (var row = 0; row < rows ; row++) {
            var tr = document.createElement("tr");
            for (var col = 0; col < columns; col++) {
                var td = document.createElement("td");
                tr.appendChild(td);
            }
            $("#table" + tableNo).append(tr);
        }
        $("#table" + tableNo + " td").css("width", width + "px");
        $("#table" + tableNo + " td").css("height", height + "px");
        tableNo++;
    });
});