
   function video_hero() {
    $('.pre_video a').click(function() {     
        //var video_id   = $(this).attr('title');
        var video_id   = $(this).attr('data-video');
        var video_iframe  = "<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/"+ video_id  +"?autoplay=1'></iframe>";
         $('#video .modal-content').append(video_iframe);  
         var myAudio=document.getElementById("audioBackground"); 
        var objControl = $('#boxAudio a.sound');
        if(!objControl.hasClass('pause')) {  
            myAudio.pause();
            objControl.addClass('pause');
        } else {
            myAudio.pause();
            // objControl.removeClass('pause') ;       
        }  
    });
     $(document).mouseup(function (e){
          var container = $("#video .modal-dialog .modal-content");
          var iframe = $("#video .modal-content iframe");          
          if (!container.is(e.target) // if the target of the click isn't the container...
              && container.has(e.target).length === 0) // ... nor a descendant of the container
          {  
             if($('.modal').is(':visible')==true){
                iframe.remove();  
                var myAudio=document.getElementById("audioBackground"); 
                var objControl = $('#boxAudio a.sound');
                 if(!objControl.hasClass('pause')) {  
                    myAudio.pause();
                    objControl.addClass('pause');
                } else {
                    myAudio.play();
                    objControl.removeClass('pause') ;       
                } 
             }                       
          }
    });
  } 
  video_hero();
  if ($(window).width() < 767) {
    $('body').find('#boxAudio').remove();
  }
  else {

  }

   $(document).ready(function(){
      $('#boxAudio a.sound').unbind('click').bind('click', function(e) {
        e.preventDefault();
        controlMusic($(this));
      });
  });
    function controlMusic(objControl) {
    var myAudio=document.getElementById("audioBackground"); 
    if(!objControl.hasClass('pause')) {  
        myAudio.pause();
        objControl.addClass('pause');
    } else {
        myAudio.play();
        objControl.removeClass('pause') ;       
    }    
}