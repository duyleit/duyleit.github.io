
$(function () {
    vitricuaedu = $('#khoikn').offset().top;

    $('.nav_kn').click(function () {
      $('body,html').animate({scrollTop:vitricuaedu},700)
        return false;
         })

    $('.nav_da').click(function () {
        $('body,html').animate({scrollTop:$('#khoida').offset().top},700)
        return false;
    })

    $('.nav_ttlh').click(function () {
        $('body,html').animate({scrollTop:$('#khoittlh').offset().top},700)
        return false;
    })
})