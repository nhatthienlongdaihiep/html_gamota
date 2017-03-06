jQuery(function($) {'use strict',

    //Initiat WOW JS
	new WOW().init();
    
    $('ul.tabs').each(function(){
          var $active, $content, $links = $(this).find('a');
          $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
          $active.addClass('active');
          $content = $($active.attr('href'));
          $links.not($active).each(function () {
              $($(this).attr('href')).hide();
          });
          $(this).on('click', 'a', function(e){
              $active.removeClass('active');
              $content.hide();
              $active = $(this);
              $content = $($(this).attr('href'));
              $active.addClass('active');
              $content.show();
              e.preventDefault();
          });
      });
	$("#slider1").tinycarousel({
        bullets  : true,
        axis   : "x",
        animationTime: 500,
        infinite: true,
        interval: true,
        intervalTime: 4000
    });
    $("#slider2").tinycarousel({
        bullets   : true,
        buttons   : false,
        animation : false
    });
    $("#slider3").tinycarousel({
        bullets   : true,
        buttons   : false,
        animation : false
    });
    $("#slider4").tinycarousel({
        bullets  : true,
        axis   : "x",
        animationTime: 500,
        infinite: true
    });
    $("#slider5").tinycarousel({
        bullets   : true,
        buttons   : false,
        axis   : "y",
        animationTime: 500,
        infinite: true
    });
    $("#slider6").tinycarousel({
        axis   : "x",
    });
    $("#slider7").tinycarousel({
        axis   : "x",
    });
    $("#slider8").tinycarousel({
        bullets  : true,
        axis   : "x"
    });
});