var pageCom=function(){
	var e={
		width:$(".nav img").width(),
		height:$(".nav img").height()},
		t={
			popWindow:function(e){
				var t=$("#"+e),i=(t.width(),t.height(),t.height()/2),n=t.width()/2;
				t.css({"margin-top":-i,"margin-left":-n}).fadeIn(),
				$("#fade").length<1&&$("body").append('<div id="fade"></div>'),
				$("#fade").css({filter:"alpha(opacity=80)"}).fadeIn()
			},
			popClose:function(e){
				$("#fade ,.dialog ,#"+e).fadeOut()
			}
		},
		i=function(){
			$(".trigger").click(function(){
				var e=$(this).hasClass("close");
				e?(
					$(this).removeClass("close"),
					$(".slider").animate({left:"0px"},"slow")
				):(
					$(this).addClass("close"),$(".slider").animate({left:"-190px"},"slow")
				)
			});
			var e=$(window).scrollTop();
			e>=$(window).height()?$(".slider").show():$(".slider").hide(),
			$(window).on("scroll",function(){
				var e=$(this).scrollTop();
				e>=969?$(".slider").show():$(".slider").hide()
			})
		},
		n=function(t){
			var i={width:$(window).width(),height:$(window).height()},
			n={width:1920,height:1048},
			a=t,
			o={
				width:a.width(),
				height:a.height(),
				marginLeft:parseInt(a.css("margin-left")),
				top:parseInt(a.css("top")),
				left:parseInt(a.css("left"))
			};
			percentage=1,percentage=n.height<i.height?1:i.height/n.height;
			{
				var s=o.width*percentage,r=o.height*percentage;
				-(o.width*percentage/2+280)
			}
			a.is($(".down-wrap"))?(
				a.css({top:o.top*percentage-20}),
				i.height>=800&&a.css({top:o.top*percentage})
			)
			:a.is($(".or-btn"))?a.css({top:o.top*percentage+25}):a.is($(".slogan-wrap"))?(
				a.css({left:o.left*percentage}),
				i.height<=600?(
					a.css({width:"400px"}),
					a.css({top:o.top*percentage-120*percentage-10})
				)
				:a.css(
					i.height<=800?{top:o.top*percentage-80*percentage-10}:
					i.height<=900?{top:o.top*percentage-40*percentage-10}:
					{top:o.top*percentage}
				)
			)
			:a.is($(".logo"))?a.css(
				i.width<=1600?{left:"38%",top:10}:
				i.width<=1780?{left:10}:{left:118}
			)
			:a.is($("#slogan"))?i.height<=800&&a.width(.8*o.width)
			:a.is($(".nav-wrap .nav"))?i.height<=650?(
				a.height(.5*o.height),
				a.css({"margin-top":"5px"})
			)
			:a.height("auto")
			:(
				i.height<=650?(
					a.width(.5*o.width).height(.5*o.height),
					a.siblings("span").css({"font-size":"14px"})
				)
				:(
					s=o.width*(percentage-.1),r=o.height*(percentage-.1),a.width(s).height(r),a.siblings("span").css({"font-size":"18px"})),e={width:a.width(),height:a.height()}),$(window).scrollTop()>=$(window).height()-$(".nav-wrap").height()?$(".nav-wrap").css({top:0,position:"fixed"}):setTimeout(function(){sourceTop=$(window).height()-$(".nav-wrap").height()-55,$(".nav-wrap").css({top:sourceTop})},320),$(window).resize(function(){var t=$(this).height(),i=$(this).width();percentage=n.height<t?1:t/n.height,s=o.width*percentage,r=o.height*percentage;-(o.width*percentage/2+280);a.is($(".down-wrap"))?(a.css({top:o.top*percentage-20}),t>=800&&a.css({top:o.top*percentage})):a.is($(".or-btn"))?a.css({top:o.top*percentage+25}):a.is($(".slogan-wrap"))?(a.css({left:o.left*percentage}),a.css(600>=t?{top:o.top*percentage-120*percentage-10}:800>=t?{top:o.top*percentage-80*percentage-10}:900>=t?{top:o.top*percentage-40*percentage-10}:{top:o.top*percentage})):a.is($(".logo"))?a.css(1600>=i?{left:"38%",top:10}:1780>=i?{left:10}:{left:118}):a.is($("#slogan"))?a.width(800>=t?.8*o.width:o.width):a.is($(".nav-wrap .nav"))?650>=t&&(a.height(.5*o.height),a.css({"margin-top":"5px"})):(650>=t?(a.width(.5*o.width).height(.5*o.height),a.siblings("span").css({"font-size":"14px"})):(a.width(s).height(r),a.siblings("span").css({"font-size":"18px"})),setTimeout(function(){e={width:$(".nav img").width(),height:$(".nav img").height()}},320)),$(".part01").height($(window).height()-55),$(window).scrollTop()>=$(window).height()-$(".nav-wrap").height()?$(".nav-wrap").css({top:0,position:"fixed"}):setTimeout(function(){sourceTop=$(window).height()-$(".nav-wrap").height()-55,$(".nav-wrap").css({top:sourceTop})},320)})},a=function(){function t(){var t=$(window).height()-$(".nav-wrap").height()-55,i=$(window).scrollTop();$(".part").each(function(){$(this).offset().top-500<i&&$(this).addClass("active")}),$(window).scrollTop()>=$(window).height()-$(".nav-wrap").height()?($(".nav-wrap .nav").css({"margin-top":"8px"}),$(".nav-wrap .nav img").width(.6*e.width).height(.6*e.height),$(".nav-wrap .nav img").siblings("span").css({"font-size":"14px"}),$(".nav-wrap").css({top:0,position:"fixed"})):($(".nav-wrap .nav img").width(e.width).height(e.height),$(".nav-wrap .nav img").siblings("span").css({"font-size":"18px"}),t=$(window).height()-$(".nav-wrap").height()-55,$(".nav-wrap").css({top:t}),$(".nav-wrap").css({position:"absolute"}))}({width:$(".nav-wrap .nav img").width(),height:$(".nav-wrap .nav img").height()});t(),$(window).scroll(function(){t()})},o=function(){$(".nav-wrap .nav a").bind("click",function(){var e=0;$(this).hasClass("na-2")?e=$(".part02").offset().top-80:$(this).hasClass("na-4")?e=$(".part03").offset().top-80:$(this).hasClass("na-3")?e=$(".part04").offset().top-80:$(this).hasClass("na-6")&&(e=0),$("html,body").animate({scrollTop:e},600)})},s=function(e){var t=new RegExp(e+"=([^&]*)","i").exec(window.location.search);return t&&decodeURI(t[1])||""},r=function(){var e=["",$(".part02").offset().top-80,$(".part03").offset().top-80,$(".part04").offset().top-80];"ts"==s("to")?$(window).scrollTop(e[1]):"jt"==s("to")?$(window).scrollTop(e[3]):"yx"==s("to")&&$(window).scrollTop(e[2]),""!=s("to")&&($(".nav-wrap").css({top:0}),$(".nav-wrap").hide(),setTimeout(function(){$(".nav-wrap").show(),$(".nav-wrap").css({top:0,position:"fixed"})},330))},h=function(){o(),a(),r(),i()};return{resizeOtherImg:n,getUrlVar:s,init:h,popLayer:t}}();nie.define(function(){var e=$("#share_title").html(),t=$("#share_pic").attr("data-src"),i=null,i=nie.require("nie.util.shareV5");i({fat:"#NIE-share",type:6,title:e,img:t}),$("#myroundabout").roundabout({minScale:-5.5,minOpacity:0,btnNext:$(".yx .prev"),btnPrev:$(".yx .next")}),$(".jt").slide({mainCell:".jt-con",effect:"left",autoPlay:!0,delayTime:1e3,interTime:15e3});nie.require("ui.lightBox");$(".jt-con a").lightBox(),$(".ts").slide({mainCell:".ts-con",effect:"left",autoPlay:!0,delayTime:1e3,interTime:15e3,prevCell:"#ts-p",nextCell:"#ts-n"}),$("#pt4").slide({titCell:"#cp-hd a",mainCell:"#cp-bd",effect:"left",autoPlay:!1,delayTime:1e3,interTime:15e3,trigger:"click"}),$(".news").slide({titCell:"#n-hd ul li",mainCell:"#n-bd",effect:"left",autoPlay:!1,delayTime:1e3,interTime:15e3,trigger:"mouseover"});nie.require("nie.util.niedownload");NieDownload.create({wrapper:$("#nie-download"),enableAndroid:!0,enableIos:!0,disableClick:function(){}});nie.require("nie.util.niedownload");NieDownload.create({wrapper:$("#nie-download2"),enableAndroid:!0,enableIos:!0,disableClick:function(){}}),$(".part01").height($(window).height()-55),window.onload=function(){$(".nav-wrap").css({display:"block"}).addClass("on"),pageCom.resizeOtherImg($("#slogan")),pageCom.resizeOtherImg($(".slogan-wrap")),pageCom.resizeOtherImg($(".down-wrap")),pageCom.resizeOtherImg($(".or-btn")),pageCom.resizeOtherImg($(".logo")),setTimeout(function(){pageCom.resizeOtherImg($(".nav-wrap .nav")),pageCom.resizeOtherImg($("img.i-nav-icon1")),pageCom.resizeOtherImg($("img.i-nav-icon2")),pageCom.resizeOtherImg($("img.i-nav-icon3")),pageCom.resizeOtherImg($("img.i-nav-icon4")),pageCom.resizeOtherImg($("img.i-nav-icon5")),pageCom.resizeOtherImg($("img.i-nav-icon6")),pageCom.init()},30)},$(".gif-btn .close").bind("click",function(){$(".gif-btn").hide()});var n="xiaolifeidao(g38)-lunhuan-668819";ADBase.config({pos:n,callback:function(e,t){if(0==e)return!1;for(var i=t[n],a="",o="",s=0;s<i.length;s++){var r=i[s];a+='<li><a href="'+r.url+'" title="'+r.title+'"><img src="'+r.src+'" /></a></li>',o+=0==s?'<span class="on"></span>':"<span></span>"}$(".banner ul").html(a),$(".b-index").html(o),$(".banner-wrap").slide({titCell:".b-index span",mainCell:".banner ul",effect:"left",autoPlay:!0,delayTime:1e3,interTime:5e3,trigger:"mouseover"})}});var a,o=nie.require("nie.util.videoV2");$("#yy dt, .play-btn").bind("click",function(){var e=$(this).attr("data-mp4");a=o({fat:"#mp4",width:"720",height:"406",movieUrl:e,HDmovieUrl:"",SHDmovieUrl:"",vtype:"",autoPlay:!0}),pageCom.popLayer.popWindow("video-layer")}),$("#video-layer .close").bind("click",function(){pageCom.popLayer.popClose("video-layer"),a.destroy()})});