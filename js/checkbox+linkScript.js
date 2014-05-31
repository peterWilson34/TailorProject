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
        $('#btntext').val('');
        $('#btnwidth').val('');
        $('#btnheight').val('');

    })

    $('#cancel').on('click', function () {
        $('.btnpopup').css("display", 'none');
        $('#btntext').val('');
        $('#btnwidth').val('');
        $('#btnheight').val('');
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
        $('select').append('<option>'+ddlval+'</option>');
        //$('option:eq(' + ddlchange + ')').get(0).outerHTML += $('.radvalues').val();
        ddlchange++;
        $('.ddlvalues').val('');
        
        })
});

$(document).ready(function () {
    $("#cbl").on('click', function () {
        $(".cblpopup").fadeIn(function () {
            $(".popup4").fadeIn();
        })
    });

    $('.cblpopup').on('click', function () {
        $('.cblpopup').css("display", 'none');
    })

    $('.popup4').on('click', function (event) {
        event.stopPropagation();
    })

    $('.cblfinish').on('click', function () {
        $('.cblpopup').css("display", 'none');
    })

    $('.cbladd').on('click', function () {
        var cblval = $('.cblvalues').val();
        $('.stage').append('<input type="checkbox">' + cblval+'<br/>');
        $('.cblvalues').val('');
    })
});

$(document).ready(function () {
    $("#link").on('click', function () {
        $(".linkpopup").fadeIn(function () {
            $(".popup5").fadeIn();
        })
    });

    $('.linkpopup').on('click', function () {
        $('.linkpopup').css("display", 'none');
    })

    $('.popup5').on('click', function (event) {
        event.stopPropagation();
    })

    $('.linkfinish').on('click', function () {
        $('.linkpopup').css("display", 'none');
    })

    $('.linkadd').on('click', function () {
        var linkurl = $('.linkurl').val();
        var linkdescription=$('.linkdescription').val();
        $('.stage').append('<a href="http://'+linkurl+'/">'+linkdescription+'</a>');
        $('.linkurl').val('');
        $('.linkdescription').val('');
    })
});