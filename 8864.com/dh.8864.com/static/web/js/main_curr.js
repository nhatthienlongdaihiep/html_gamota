$(function(){
	
	//浮窗位置
	
	if($('.info').offset().left + $('.info').width() + $('.float_window').width()-20 < $(window).width()){
	
		var oL = $('.info').offset().left + $('.info').width()+20;
		$('.float_window').css('left',oL+'px');
	
	}
	
	//初始化数据
	$('#d_cover').height($(document).height());
	
	//导航鼠标滑过功能
	if(navigator.userAgent.indexOf('Trident')>0){
			
		$('.d_header .d_nav li img').css('opacity','1');
			
	}
	$('.d_nav li').on('mouseover',function(){
		
		$(this).addClass('d_on');
		
		if(!$(this).index() && $(this).parent().hasClass('d_nav_left')){
			
			
				
		}else{
			
			$('.d_nav li').first().removeClass('d_on');
				
		}
			
	});
	
	$('.d_nav li').on('mouseout',function(){
		
		$(this).removeClass('d_on');
		$('.d_nav li').first().addClass('d_on');
			
	});
	/*
	$('.d_nav li').on('click',function(){
		
		if(!$(this).attr('src')){
			
			alert('敬请期待');
			
		}else{
			
			window.location.href = $(this).attr('src');
				
		}
			
	});
	*/
	//视频播放
	$('.sorrow').on('click',function(){
	
		var h = $(window).height()/2+$(window).scrollTop()-168;
		var w = ($(window).width()-600)/2;
		var oSrc = $('#d_video video').attr('_src');
		
		$('#d_video').css({'left':w+'px','top':h+'px'});
		$('#d_cover').show();
		$('#d_video').show();
		
		$('#d_video video').attr('src',oSrc);
		
		$(document).on('mousewheel',function(){
			
			return false;
				
		});
		
	});
	
	//弹层消失
	$('#d_cover,#d_video img.close').on('click',function(){
		
		if($('#video_con').get(0).pause) $('#video_con').get(0).pause();
		
		$('#d_cover').hide();
		$('#d_video').hide();
		$(document).off('mousewheel');
			
	});
	
	//悬浮窗	
	(function(){
						
		$('.float_obj1').on('mouseover',function(){
			
			var _this = $(this).find('img.float_obj_show');
			var _this2 = $(this).find('img.float_obj_hide');
			
			_this.addClass('floatTurn');
			
			if(navigator.userAgent.indexOf('Trident') > 0){
				
				_this.siblings('.float_obj_hide').show();
					
			}else{
				
				_this.on('animationend',floatEnd);
				_this.on('webkitAnimationEnd',floatEnd);
					
			}
			
		});
		
		$('.float_obj_hide').on('mouseout',function(){
			
			$(this).hide();
			$(this).siblings().show();
			$(this).siblings('.float_obj img').removeClass('floatTurn');
					
		});
		
		function floatEnd(){
		
			$(this).off('animationend');
			$(this).off('webkitAnimationEnd');
			
			if($(this).parent().index() == 1){
				
				$(this).siblings('.float_obj_hide').show();
					
			}else if($(this).parent().index() > 1){
				
				$(this).hide();
				$(this).siblings('.float_obj_hide').show();
					
			}
				
		}
		
		$('.float_obj:gt(0)').on('mouseover',function(){
				
			clearTimeout(this.timer);
			$('.floatTurn').removeClass('floatTurn');
			var _this = $(this).find('img:not(".float_obj_hide")');
			_this.hide().siblings('.float_obj_hide').show();
		
		});
		
		$('.float_obj:gt(0)').on('mouseout',function(){
			
			var _this = $('.float_obj');
	
			this.timer = setTimeout(function(){
				$('.float_obj').find('img').show();
				$('.float_obj').find('img.float_obj_hide').hide();
				$('.floatTurn').removeClass('floatTurn');
			},20);
		
		});
		
	}());
	

	//领取礼包
	$('.treasure_close img').on('mouseover',function(){
		
		$('.treasure_close img').first().removeClass('on');
		$('.treasure_close img').last().addClass('on');
			
	});
	$('.treasure_close img').on('mouseout',function(){
		
		$('.treasure_close img').first().addClass('on');
		$('.treasure_close img').last().removeClass('on');
			
	});
	
	//新闻公告
	$('.infoNews .header span').on('click',function(){
		
		var index=$(this).index();
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		
		$('.infoContent').find('ul').eq(index).addClass('active').siblings().removeClass('active')	
	});
	
	
	
	//轮播	
	var liWindth=$('.imgChange .image li').eq(0).width();
	var iNow=0;
	var time1;
	$('.icon li').on('click',function(){
		var index=$(this).index();	
		iNow=index;
		$(this).addClass('on').siblings().removeClass('on');			
		$('.imgChange .image').animate({
			'left':-liWindth*index
		},500)		
	});	
	//图片运动
	function slider1(){	
		if(iNow==$('.icon li').length-1){
			iNow=0;
		}else{
			iNow++;
		}		
		$('.icon li').eq(iNow).addClass('on').siblings().removeClass('on')
		$('.imgChange .image').animate({'left':-liWindth*iNow},500);
	};
	slider1();
	time1=setInterval(slider1,1500);	
	$('.imgChange').mousemove(function(){
		clearInterval(time1)
	});
	$('.imgChange').mouseout(function(){
		time1=setInterval(slider1,1500)
	})	
	
	$('.cut_long li').on('click',function(){
		$(this).attr('_src');	
		
//alert($(this).attr('_src'));		
		$('#picBig').show();
		$('#picBig p').show();
		$('#d_cover2').show();
		
		var src = $(this).attr('_src');
		
		$('#picBig .normal').attr('src',src);
		$('#picBig p').hide();
		$('#picBig').css('top',($(window).height()-$('#picBig').height())/2+'px');
		
	});
	
	$('#picBig img.close').on('click',function(){
		
		$('#picBig').hide();
		$('#d_cover2').hide();
			
	});
	
	//美女玩家
	var Index = {
		init: function () { 
			$(".md-ul li").mouseover(function() {
				$(".md-ul li.on").removeClass("on"),
						$(this).addClass("on")
			}).eq(0).mouseover();
		}
	};
	
	$(function() {
		Index.init();
	});
	
	
	
	
	//精美截图
	var iNum=0;
	var time2;
	var cutIconli=$('.cut_long').eq(0).width();
	$('.cut_icon li').on('click',function(){		
		var index=$(this).index();
		iNum=index;
		$(this).addClass('cut_icon_on').siblings().removeClass('cut_icon_on');
		$('.cut_pic').animate({
			'left':	-cutIconli*index
		},500)		
	});
	
	function slider2(){
		if(iNum==$('.cut_long').length-1){
			iNum=0;
		}else{
			iNum++;
		};
		$('.cut_icon li').eq(iNum).addClass('cut_icon_on').siblings().removeClass('cut_icon_on');	
		$('.cut_pic').animate({
			'left':	-cutIconli*iNum
		},500)	
	}
	//slider2();
	//time2=setInterval(slider2,1500);
	
	$('.cut_con').mousemove(function(){
		//clearInterval(time2)
	});
	$('.cut_con').mouseout(function(){
		//time2=setInterval(slider2,1500);
	})
	
	setTimeout(function(){
		
		var cur_width = $('.cut_con .cur_btn img').first().width()+$('.cut_con .cur_btn img').last().width()+$('.cut_con .cur_btn .cut_icon').width()+30;
		$('.cut_con .cur_btn').css('width',cur_width+'px');
			
	},1500);
	
	//四大门派
	$('.party_select li').on('click',function(){
		var index=$(this).index();
		$('.party_con_text').eq(index).addClass('on').siblings().removeClass('on')
	})
	
	divFloat();
	
	$(window).on('scroll',divFloat);
	
});

//div上浮
function divFloat(){
	
	var oH = $(window).scrollTop() + $(window).height();
	
	$('.unanimate').each(function(index, element){
        
		var oT = $(element).offset().top - 300;
		
		if(oH >= oT){
			
			$(this).removeClass('unanimate');
			$(this).addClass('divFloat');
				
		}
		
    });
	
	$('.divFloat').each(function(index, element){
        
		var oT = $(element).offset().top - 100;
		
		if(oH < oT){
			
			$(this).addClass('unanimate');
			$(this).removeClass('divFloat');
				
		}
		
    });
	
}