$(document).ready(function(){
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close')
    
    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });
});
var client=$('.footer');
   var clientTop=client.offset().top;
   $(window).bind('scroll',function(){
      var windowTop=$(this).scrollTop();
      if(windowTop>clientTop){
         $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afe6865ee84468506b2022830e9b2eff1de76bee667589d88a772f3c3ffde02b0&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=false"></script>');
         console.log('докрутили');
         $(window).unbind('scroll');
      }
   })