$("a[href='#top']").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, "slow"), !1;
}), jQuery(window).scroll(function() {
    var a = jQuery(this).scrollTop();
    a > "200" ? $("#to-top").show() : $("#to-top").hide();
})

$('.sidebar-right ').click(function() {
  $(this).toggleClass('active');
});

function active_collapes(){
	$('.panel-heading').removeClass('active');
	$('.panel-group .panel-collapse.in ').parent().find('.panel-heading').addClass('active');
	$('.panel-group .panel-heading .panel-title a').click(function() {
	//	$('.panel-heading').removeClass('active');
	//	$(this).parents('.panel-heading').toggleClass('active');	

		if ( $( this ).parents('.panel-heading').hasClass('active') ) {
			$( this ).parents('.panel-heading').removeClass('active')
		} else {
			$('.panel-heading').removeClass('active');
			$(this).parents('.panel-heading').addClass('active');	
		}	
	});
}

function collapse_animate(){
	var t = $('.panel-title > a');
	t.click(function(){
	var a = $(this).offset().top -30;
	console.log('trc khi:'+a);
	$('html, body').delay(100).animate({
	        scrollTop: 600
	      }, 1000);
	console.log('sau khi:'+a);
	});
}
