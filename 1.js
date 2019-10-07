
$(function () {
    vitricuaedu = $('#khoikn').offset().top;

    $('.kn').click(function () {
      $('body,html').animate({scrollTop:vitricuaedu},700)
        return false;
         })

    $('.da').click(function () {
        $('body,html').animate({scrollTop:$('#khoida').offset().top},700)
        return false;
    })

    $('.ttlh').click(function () {
        $('body,html').animate({scrollTop:$('#khoittlh').offset().top},700)
        return false;
    })
})