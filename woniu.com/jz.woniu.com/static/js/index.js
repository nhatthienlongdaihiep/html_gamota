/*
* author:wangjia
* date:20160530
*/

$(function(){
    var win_w = $(window).width(),
        win_h = $(window).height();

    if(win_h<900){
        $('.scroll-tip').remove();
    }
    //初始化位置
    setTimeout(function(){
        $('html,body').animate({'scrollTop':55},10);
    },500)
    $('.nav').animate({'top':0},10);
    //直播
    // Live.open({
    //     //element:$('#broadCon'), //可选字段，不传该参数，则为弹窗模式
    //     url:'http://v.woniu.com/api/getgathernormal?code=83', // code为对应游戏id
    //     beforeOpen:function(){},
    //     afterOpen:function(){}
    // });

	var isScroll=0,
		pageIndex=0,
		$html= $('html');
	// iOS下载
    // $('.dl_1').click(function(){
    //     alert('敬请期待');
    // })
    // 安卓下载
    // $('.dl_2').click(function(){
    //     $('.maskdiv,.andyy-pop').show();
    // })

	//屏幕滚动
	$html.mousewheel(function(event, delta){
		if(isScroll==0){
			isScroll=1;
			setTimeout(function(){
				isScroll=0;
			},500);

			if(delta==-1){
	    		if(pageIndex<3){
	    			pageIndex++;
		    		if(pageIndex==0){
		    			$('.nav,.box0').animate({'top':0},300);
                        $('.mini-live').animate({'top':87},300);
                        $('html,body').animate({'scrollTop':55},300);
                        return false;
		    		}

                    if (pageIndex == 0) {
                        $('#j-wn-gamehead').show();
                    }

                    if(pageIndex==1){
                       setTimeout(function(){
                         removeVideo();
                         // $('.floatdown').fadeIn();
                       },800)
                    }

                    if(pageIndex==2){
                        $('.scroll-tip').hide();
                    }

		    		$('html,body').animate({'scrollTop':pageIndex*1050+55},800);
                    return false;
	    		}

	    	}else{
	    		if(pageIndex>-1){
	    			pageIndex--;

                    if(pageIndex==1){
                        setTimeout(function(){
                            $('.scroll-tip').show();
                        },500)
                    }
                    if(pageIndex==0){
                        $('.floatdown').fadeOut();
                    }
                    if(pageIndex==-1){
                        $('#j-wn-gamehead').fadeIn('500');
                        $('.nav,.box0').animate({'top':55},300);
                        $('.mini-live').animate({'top':143},300);
                        $('html,body').animate({'scrollTop':0},600);
                        return false;
                    }
                    $('html,body').animate({'scrollTop':pageIndex*1050+55},800);
	    		}
	    	}
            return false;
		}else{
			return false;
		}

    })

    $('.m_sns .a1').hover(function(){
        $(this).siblings('img').fadeIn();
    },function(){
        $(this).siblings('img').fadeOut();
    })

    //视频播放
    var isMove = 0;
    var bgvideo;
    $('.box1 .play').click(function(){
        // alert('敬请期待！');
        // return false;
        // if(Modernizr.video){
        //     addVideo();
        //     $('video')[0].play();
        //     hideEle();

        // }else{
            //不支持video的
            bgvideo=jwplayer('j-popvideo').setup({
                'flashplayer':  'http://static.woniu.com/script/jwplayer/player.swf',
                'width':    '800',
                'height':   '450',
                'file':     'http://dl.jz.woniu.com/2016/11/gongce.mp4',
                'image': 'http://jz.woniu.com/static/web201606/images/bg1.jpg',
                'autostart':true,
                'controls':false
            })
            $('.maskdiv,.pop-video').show();

        // }
        setTimeout(function(){
            isMove=1;
        },1000);
    })

    function showEle(){
        $('.slogen,.orderbtn,.phone,.play,.floatorder,.scroll-tip,.nav,.mini-live').fadeIn();
    }

    function hideEle(){
        $('.slogen,.orderbtn,.phone,.play,.floatorder,.scroll-tip,.nav,.mini-live').fadeOut();
    }

    function addVideo(){
        $('#j-video').html('<video width="100%" loop preload><source src="http://dl.panda.woniu.com/2016/06/video.mp4" type="video/mp4"></video>');
    }

    function removeVideo(){
        isMove=0;
        $('.pause').hide();
        showEle();
        $('#j-video').html('');
    }
    var pauseTimer;
    $('.box').mousemove(function(){
        if(isMove==1 && Modernizr.video){
            $('.pause').fadeIn();
            clearTimeout(pauseTimer);
            pauseTimer=setTimeout(function(){
                $('.pause').fadeOut();
            },1000)
        }
    })

    $('.pause').click(function(){
        isMove=0;
        $(this).hide();
        if(Modernizr.video){
            removeVideo();
        }

    })

    $('.popbox').on('click','.close',function(){
        $('.popbox,.maskdiv').hide();
        $('.pop-video').html('<span class="close"></span><div id="j-popvideo"></div>');

    })

    // $('#j-order').click(function(){
    //     $('.change-pop,.maskdiv').show();
    // })

    // $('#j-down').click(function(){
    //     $('.pop-down,.maskdiv').show();
    // })



    //第二屏切换
    var w_width,tab_len;
    function sliderInit(){
    	w_width = $(window).width();
	    tab_len = $('.slider_b li').length;
	    $('.slider_b ul').width(tab_len*1920+50);
	    $('.slider_b li').width(w_width);
	    $('.slider_s ul').width(tab_len*535);

        var fpageHTML = '';
        for(var i=0; i<tab_len;i++){
            fpageHTML+='<span></span>';
        }
        $('.slider_p').html(fpageHTML);
        $('.slider_p span:first').addClass('current');
    }

    sliderInit();

    var sliderIndex = 0;
    function slider(index){

    	$('.slider_b').animate({'scrollLeft':index*w_width},500);
    	$('.slider_s').animate({'scrollLeft':index*535},500);
        $('.slider_p span').removeClass('current').eq(index).addClass('current');
    }

    $('.phone .next').click(function(){
    	if(sliderIndex<tab_len-1){
    		sliderIndex++;
    	}else{
    		return false;
    	}
    	slider(sliderIndex);
    })
    $('.phone .prev').click(function(){
    	if(sliderIndex>0){
    		sliderIndex--;
    	}else{
    		return false;
    	}
    	slider(sliderIndex);
    })

    var isResize = 0;
    $(window).resize(function(){
    	if(isResize==0){
    		isResize=1;
    		sliderInit();
    	}

    	setTimeout(function(){
    		isResize=0;
    	},500)
    })

    $('.slider_p').on('click','span',function(){
        var index = $(this).index();
        sliderIndex = index;
        slider(index);
    })

    $('.sns .a1').hover(function(){
        $(this).find('img').show();
    },function(){
        $(this).find('img').hide();
    })

    //info slider
    var i_length = $('.info li').length;
    $('.info ul').width(tab_len*272);
    var ipageHTML = '';
    for(var i=0;i<i_length;i++){
        ipageHTML+='<span></span>'
    }
    $('.info .page').html(ipageHTML);
    $('.info .page span:first').addClass('current');

    function islider(){
        var $current = $('.info .page .current');
        var index = $current.index();
        var $next = $current.next();
        if($next.length>0){
            index++;
            $next.addClass('current').siblings().removeClass('current');
        }else{
            index=0;
            $('.info .page span:first').addClass('current').siblings().removeClass('current');
        }
        $('.info .slider').animate({'scrollLeft':index*272},500);
    }

    var isliderTimer = setInterval(islider,4000);

    $('.info .page span').click(function(){
        clearInterval(isliderTimer);
        var index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.info .slider').animate({'scrollLeft':index*272},500);
        isliderTimer = setInterval(islider,2000);
    })

    //tab news
    $('.news .tit-nav span').mouseenter(function(){
        var index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.news dl').hide().eq(index).show();
    })

    $('.media .tit-nav span').mouseenter(function(){
        var index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.media .m-cont').hide().eq(index).show();
    })

    //flink slider
    function flinkslider(){
        var l_len = $('.flinklist img').length;
        $('.flinklist').width(l_len*114);

        var $prev = $('.flink .prev');
        var $next = $('.flink .next');

        var index = 0;
        $next.click(function(){
            if(index<l_len-4){
                index++;
            }else{
                return false;
            }
            $('.flink .slider').animate({'scrollLeft':index*114},500);
        })

        $prev.click(function(){
            if(index>0){
                index--;
            }else{
                return false;
            }
            $('.flink .slider').animate({'scrollLeft':index*114},500);
        })
    }
    flinkslider();

    //右侧浮动二维码
    $('.floatbar .dl_3').hover(function(){
        $('.sns-ewm').fadeIn();
    },function(){
        $('.sns-ewm').fadeOut();
    })

    $('.dl_2').click(function(){
        $('#j-wn-gamehead').hide();
        $('.andyy-pop,.maskdiv').show();
    })

    //向下滚动
    $('.scroll-tip').click(function(){
        pageIndex++;
        if(pageIndex>1){
            $('.scroll-tip').hide();
        }
        $('html,body').animate({'scrollTop':pageIndex*1050+55},800);
    })

//立即预约
    $(".ljyy").click(function(){
        $(".change-pop , .maskdiv").fadeIn();
    })
   //预约弹窗切换
   // $(".change-menu p").click(function(){
   //     $(".change-menu p").removeClass("current");
   //     $(this).addClass("current");
   //     var index = $(this).index();
   //     $(".change-box .cbox").hide();
   //     $(".change-box .cbox").eq(index).show();
   // })

   //s守梦想 二维码弹窗
   // $(".smxd").click(function(){
   //     $(".smpop , .maskdiv").fadeIn();
   // });

   //预约
   $(".change-submit").click(function(){
        var phone = $(".cphone").val();
        var mail = $(".mail").val();
        if(!phone){
            alert("请填写手机号！");
        }else if(!mail){
            alert("请填写邮箱！");
        }else{
            var os = "ios";
            $.ajax({
                  type: "GET",
                  url: "http://gwactv2.woniu.com/9yin/h160803/newappointment",
                  data:{phone:phone,email:mail,os:os},
                  dataType: "jsonp",
                  jsonp: "jsoncallback",
                  success: function(data){
                    submitbtnState = true;
                    if(data.msgcode === 1 || data.msgcode === 1001){
                         $(".change-box .iosbox").html('<div class="yysuccess"><h2>恭喜大侠完成预约</h2><p>更多资讯内容请关注《决战光明顶》手游官方微信公众号，参加精彩活动，赢游戏礼包，赢取周边豪礼！</p><img src="http://jz.woniu.com/static/web201606/images/wxewm.jpg" alt=""/>微信搜索“决战光明顶手游”关注官方微信公众号</div>');
                    } else {
                      alert(data.msg);
                    }
                  }
                });
        }
   })

   //  ie 8 -9  支持placeholder 属性
   function placeholder(){
    var supportPlaceholder = 'placeholder' in document.createElement('input');
    if(!supportPlaceholder){
        $(".change-box .cphone").val('请填写真实手机号');
        $(".change-box .mail").val("请填写您的常用邮箱")
    }
   }
   placeholder();


    var isIE = !!window.ActiveXObject;
    var isIE6 = isIE && !window.XMLHttpRequest;
    var isIE7 = !!(!window.addEventListener && window.XMLHttpRequest && !document.querySelectorAll);
    var isIE8 = !!(!window.addEventListener && document.querySelectorAll);
    var isIE9 = navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9.";
   $(".change-box .cphone ").focus(function(){
      if(isIE || isIE6 || isIE7 || isIE8 || isIE9){
            if($(".change-box .cphone ").val() == '请填写真实手机号'){
                $(".change-box .cphone ").val('');
            }
        }
   })
   $(".change-box .cphone ").focusout(function(){
        if(isIE || isIE6 || isIE7 || isIE8 || isIE9){
            if($(".change-box .cphone").val() == ''){
                $(".change-box .cphone").val('请填写真实手机号');
            }
        }
   })
    $(".change-box .mail").focus(function(){
      if(isIE || isIE6 || isIE7 || isIE8 || isIE9){
            if($(".change-box .mail").val() == '请填写您的常用邮箱'){
                $(".change-box .mail ").val('');
            }
        }
   })
   $(".change-box .mail").focusout(function(){
        if(isIE || isIE6 || isIE7 || isIE8 || isIE9){
            if($(".change-box .mail").val() == ''){
                $(".change-box .mail").val('请填写您的常用邮箱');
            }
        }
   })
})
