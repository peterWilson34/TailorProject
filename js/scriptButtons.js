$(document).ready(function () {
    $("#btn").on('click', function () {
        $(".btnpopup").fadeIn(function () {
            $(".popup1").fadeIn();
        })
    });
    $('.btnpopup').on('click', function () {
        $('.btnpopup').css("display", 'none');
    })

    $('.popup1').on('click', function (event) {
        event.stopPropagation();
    })

    $('#insertbtn').click(function () {
        $('.btnpopup').css("display", 'none');
        var btnValue = $('#btntext').val();
        var btnWidth = parseInt($('#btnwidth').val());
        var btnHeight = parseInt($('#btnheight').val());
        if (btnWidth && btnHeight != null) {
            $('.stage').append('<input type="button" value="' + btnValue + '"style= width:' + btnWidth + 'px;height:' + btnHeight + 'px;">');
        }
    })
});


$(document).ready(function () {
    var newName = 0;
    $("#rad").on('click', function () {
        newName++;
        $(".radpopup").fadeIn(function () {
            $(".popup2").fadeIn();
        })
    });

    $('.radpopup').on('click', function () {
        $('.radpopup').css("display", 'none');
    })

    $('.popup2').on('click', function (event) {
        event.stopPropagation();
    })

    $('.radfinish').on('click', function () {
        $('.radpopup').css("display", 'none');
    })

    var x = 0;
    $('.radadd').on('click', function () {
        var radval = $('.radvalues').val();
        $('.stage').append('<label><input type="radio" name="userradios'+newName+'"></label><br/>');
        $(':radio:eq(' + x + ')').get(0).outerHTML += $('.radvalues').val();
        x++;
        $('.radvalues').val('');
        
        //var radNum = parseInt($('#radnum').val());
        //if (radNum != null) {
        //    for (var i = 0; i < radNum; i++) {
        //$(':radio').addClass('radbtn');
       // $('.radbtn').on('click', function () {
           // $(this).parent().html($(this).get(0).outerHTML + $('#radnum').val());
        //})
        //    }
        //}
    })
})

$(document).ready(function () {
    $("#ddl").on('click', function () {
        $('.stage').append('<select></select>')
        $(".ddlpopup").fadeIn(function () {
            $(".popup3").fadeIn();
        })
    });

    $('.ddlpopup').on('click', function () {
        $('.ddlpopup').css("display", 'none');
    })

    $('.popup3').on('click', function (event) {
        event.stopPropagation();
    })

    $('.ddlfinish').on('click', function () {
        $('.ddlpopup').css("display", 'none');
    })

    var ddlchange=0;
    $('.ddladd').on('click', function () {
        var ddlval = $('.ddlvalues').val();
        $('select').append('<option value="volvo">'+ddlval+'</option>');
        //$('option:eq(' + ddlchange + ')').get(0).outerHTML += $('.radvalues').val();
        ddlchange++;
        $('.ddlvalues').val('');
        

        //var ddlNum = parseInt($('#ddlnum').val());
        //if (ddlNum != null) {
        //    $('#stage').append('<select></select>')
        //    for (var i = 0; i < ddlNum; i++) {
        //        $('select').append('<option value="volvo"></option>');
        //    }
        //}
        })
    });