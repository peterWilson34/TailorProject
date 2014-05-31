$(document).ready(function () {
    $('.tabs .tab-links a').on('click', function (e) {
        var currentAttrValue = $(this).attr('href');
        $('.tabs ' + currentAttrValue).show().siblings().hide();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});

$(document).ready(function () {
    $("#htmlTab").click(function () {
        var inner = $('#tab1').html();

        var p = document.createElement('p');
        p.innerHTML = '<xmp>' + inner + ' </xmp>';
        $('#tab2').html(p);//.append(p);
    })
   
    $("#cssTab").click(function () { 
    var cssFile = document.getElementById('css');
    //alert($(".drawing").attr('style'));
    $('#tab3').append($('.drawing').css('background-color'));
    });
    // $('#tab2').html("<code><html>"+inner+"</html></code>")
    $('a [href="#tab2"]').click(function (e) {
        var inner = $('#tab1.drawing').html();

        var p = document.createElement('p');
        p.innerHTML = '<xmp>' + inner + ' </xmp>';
        $('#tab2').append(p);//.append(p);
    });
;});