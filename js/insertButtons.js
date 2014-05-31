$(document).ready(function () {
    $("#btn").on('click', function () {
        $(".btnpopup").fadeIn(function () {
            $(".popup1").fadeIn(1000);
        })
    });
    $('.btnpopup').on('click', function () {
        $('.btnpopup').css("display", 'none');
    })

    $('.popup1').on('click', function (event) {
        event.stopPropagation();
    })

    var myClass;
    var i = 0;
    $('.btnshover a').on('click', function () {
        myClass = $(this).attr('class');
        $(this).parent().children().each(function () {
            $(this).css('border', 'none');
        })
        $(this).css('border', '3px solid #0094ff');
       // console.log(myClass);
    });

    $('#insertbtn').click(function () {
        i++;
        $('.btnpopup').css("display", 'none');
        var btnValue = $('#btntext').val();
        var btnWidth = parseInt($('#btnwidth').val());
        var btnHeight = parseInt($('#btnheight').val());
        if (btnWidth && btnHeight != null) {
            $('.stage').append('<input type="button" id="btn'+i+'" class="'+myClass+'" value="' + btnValue + '"style= width:' + btnWidth + 'px;height:' + btnHeight + 'px;">');
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

var ddlcount = 0;
var myClasss;
var myClass;

$(document).ready(function () {
    $("#ddl").on('click', function () {
        $(".ddlpopup").fadeIn(function () {
            ddlcount = 0;
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

    $('.container select').on('click', function () {
        myClasss = $(this).attr('class');
        myClass = $(this).parent().attr('class');
        })


    $('.ddladd').on('click', function () {
        if (ddlcount == 0) {
            $('.stage').append('<div><select class="ddlcreate"></select></div>');
            $('.ddlcreate').last().addClass(myClasss);
            $('.ddlcreate').last().parent().addClass(myClass)
        }
        var ddlval = $('.ddlvalues').val();
        $('.ddlcreate').last().append('<option>' + ddlval + '</option>');
        $('.ddlvalues').val('');
        ddlcount++;
        
    });

   console.log($('.ddlcreate').last());
   // $('.ddlcreate').last().removeClass(myClasss);
    //$('.ddlcreate').last().parent().removeClass(myClass);
  
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

