function flashLoad(){$(".topcon").fadeIn()}
$(function(){
	nie.config.copyRight.setNormal();
	var t=$(".news-box .news").eq(0).find("li").eq(0).find("a").clone(!0);
	t.append($('<span class="red"></span>')),
		$(".news-top").append(t),
		$(".news-box .news").eq(0).find("li").eq(0).remove(),
		$(".news-box .news").eq(0).find("li").eq(0).css("fontWeight","bold")
});
var winHeight=$(window).height();
nie.define("qnm",function(){
	function t(t){
		for(var n in t){
			var e=document.createElement("img");
			e.src=t[n]
		}
	}function n(t){
		var n=$(t).find(".switch-pic a"),
		e=$(t).find(".switch-ctrl"),
		i=null,
		a=3e3,
		s={bannerPlay:function(){
			function t(){
				s-1>o?o++:o=0,
				n.hide(),
				n.eq(o).show().animate({
					opacity:"1",
					filter:"alpha(opacity=100)",
					"z-index":"100"
				},500).siblings().animate({
					opacity:"0",
					filter:"alpha(opacity=0)",
					"z-index":"99"
				},500),
				i.eq(o).addClass("current").siblings().removeClass("current")
			}
			var e,s=n.length,o=0;n.hide(),n.eq(o).show().css({
				opacity:"1",filter:"alpha(opacity=100)"}),
			i.eq(o).addClass("current"),i.hover(function(){
				clearInterval(e);
				var t=$(this).index();o=t,n.hide(),n.eq(t).show().animate({
					opacity:"1",filter:"alpha(opacity=100)","z-index":"100"
				},300).siblings().animate({
					opacity:"0",filter:"alpha(opacity=0)","z-index":"99"
				},300),i.eq(t).addClass("current").siblings().removeClass("current")
			},
			function(){e=setInterval(t,a)}),n.hover(function(){clearInterval(e)},
			function(){e=setInterval(t,a)}),e=setInterval(t,a)},_fixBanner:function(){
				n.each(function(){e.append("<span></span>")}),i=e.find("span")
			},init:function(){
				this._fixBanner(),this.bannerPlay(),i.length<=1&&i.hide()
			}
		};
		s.init()
	}
	function e(){
		return $(window).scrollTop()>winHeight?void $(".to").addClass("show"):void $.each($(".to"),function(t,n){
			var e=$(n),i=e.offset().top;$(window).scroll(function(){
				var t=!1;i=e.offset().top;
				var n=$(this),a=n.scrollTop();
				!t&&a>=i-winHeight+400&&(t=!0,e.addClass("show"))
			})
		})
	}
	function i(){
		for(var t=(window.location.href,null),n=0;n<p.length;n++){
			var e=l.indexOf($(p[n]).attr("href"));
			if(e>=0)return p.removeClass("active"),
			t=$(p[n]).parent("li").parent(".nav-list1").index(".nav-list1"),
			$(p[n]).addClass("active").parent("li").parent(".nav-list1").addClass("active"),
			void $(u[t]).find("a").addClass("active")
		}
	}
	$(".closepop").click(function(){
		$(this).parents(".pop").hide(),
		$(".mask").hide()
	}),
	$(".mask").click(function(){
		$(".mask").hide(),
		$(".pop").hide(),
		$(".big_banner").hide()
	});
	var a={yr:"../tiennghich/static/web/images/yr-m_7303234.png",yrn:"../tiennghich/static/web/images/yr-f_97e2002.png",js:"../tiennghich/static/web/images/js-m_995c5e5.png",jsn:"../tiennghich/static/web/images/js-m_995c5e5.png",
		ss:"../tiennghich/static/web/images/ss-m_874e5cc.png",ssn:"../tiennghich/static/web/images/ss-f_7187f79.png",fs:"../tiennghich/static/web/images/fs-m_9141590.png",fsn:"../tiennghich/static/web/images/fs-f_3f527ec.png",
		ys:"../tiennghich/static/web/images/ys-f_5dfe4c4.png",mz:"../tiennghich/static/web/images/mz-f_dcb9b1f.png",ysn:"../tiennghich/static/web/images/ys-m_a3a4adc.png"};
	t(a);
	var s=nie.require("nie.util.shareV5"),o=$("#share_pic").attr("src"),r=$("#share_title").html(),c=$("#share_title").html();
	s({
		fat:"#share",type:1,defShow:[23,22,2,1,3],title:c,img:o,content:r
	}),
	s({
		fat:".text-share",type:1,defShow:[23,22,2,1,3],title:c,img:o,content:r
	});
	nie.require("util.swfobject");
	$.flash.available?$("#flash").flash({
		swf:"https://qnm.res.netease.com/pc/gw/20160411134255/img/index_3e34ea6.swf",
		width:"1920",
		height:"100%",
		allowScriptAccess:"always",
		allowFullScreen:"true",
		wmode:"opaque"
	}):flashLoad(),ADBase.config({
		pos:"qiannvyouhuntongmingshouyou-lunhuan-1065",callback:function(t,e){
			if(0==t)return!1;
			for(var i=e["qiannvyouhuntongmingshouyou-lunhuan-1065"],a="",s=0;s<i.length;s++){
				var o=10-s,r=i[s];
				a+='<a href="'+r.url+'" style="z-index:'+o+'" target="_blank" title="'+r.title+'"><img width="420" height="240" src="'+r.src+'" /></a>'
			}
			$(".gf .switch-pic").html(a),n(".gf")
		}
	}),
	ADBase.config({
		pos:"qiannvyouhuntongmingshouyouL10-changgui-454246",callback:function(t,e){
			if(0==t)return!1;
			for(var i=e["qiannvyouhuntongmingshouyouL10-changgui-454246"],a="",s=0;s<i.length;s++){
				var o=10-s,r=i[s];
				a+='<a href="'+r.url+'" style="z-index:'+o+'" target="_blank" title="'+r.title+'"><img width="420" height="240" src="'+r.src+'" /></a>'
			}
			$(".hz .switch-pic").html(a),n(".hz")
		}
	}),
	ADBase.config({
		pos:"qiannvyouhuntongmingshouyouL10-changgui-631275",callback:function(t,n){
			if(0==t)return!1;
			for(var e=n["qiannvyouhuntongmingshouyouL10-changgui-631275"],i="",a=0;a<e.length;a++){
				var s=e[a];
				i+='<a target="_blank" href="'+s.url+'" title="'+s.title+'"><img src="'+s.src+'" alt="'+s.title+'"></a>'
			}
			$(".bbsmain>div").eq(1).find(".bbsimg").html(i)
		}
	}),
	ADBase.config({
		pos:"qiannvyouhuntongmingshouyouL10-lunhuan-627567",callback:function(t,n){
			if(0==t)return!1;
			for(var e=n["qiannvyouhuntongmingshouyouL10-lunhuan-627567"],i="",a=0;a<e.length;a++){
				var s=e[a];
				i+='<a target="_blank" href="'+s.url+'" title="'+s.title+'"><img src="'+s.src+'" alt="'+s.title+'"></a>'
			}
			$(".bbsmain>div").eq(0).find(".bbsimg").html(i)
		}
	}),
	$(".xs a").hover(function(){
		var t=$(this).find(".panel");
		t.find("span").stop().animate({top:"-40px"},100,function(){
			t.find("span").css("top","30px").animate({top:"0"},200)
		}),
		t.next("p").css("color","#c2a66a")
	},
	function(){
		$(".xs p").css("color","#333")
	}),
	$("#dataKeyWords").focus(function(){
		"\u8bf7\u8f93\u5165\u5173\u952e\u5b57"==$(this).val()&&$(this).val("")
	}).blur(function(){
		""==$(this).val()&&$(this).val("\u8bf7\u8f93\u5165\u5173\u952e\u5b57")
	}),
	$(".data-search-btn").click(function(){
		return""==$("#dataKeyWords").val()||"\u8bf7\u8f93\u5165\u5173\u952e\u5b57"==$("#dataKeyWords").val()?(alert("\u8bf7\u8f93\u5165\u5173\u952e\u5b57"),
			$("#dataKeyWords").focus(),!1):($(this).attr("href","http://so.qnm.163.com/search?qs="+encodeURIComponent($("#dataKeyWords").val())),!0)
	}),
	$("#dataKeyWords").keyup(function(t){
		return 13==t.keyCode?""==$("#dataKeyWords").val()||"\u8bf7\u8f93\u5165\u5173\u952e\u5b57"==$("#dataKeyWords").val()?(alert("\u8bf7\u8f93\u5165\u5173\u952e\u5b57"),
			$("#dataKeyWords").focus(),!1):(window.open("http://so.qnm.163.com/search?qs="+encodeURIComponent($("#dataKeyWords").val()),"_blank"),!0):void 0
	}),
	$(".bbstop a").hover(function(){
		var t=$(this).index(),n=$(this).position().left;
		$(".bbstop a").removeClass("active"),
		$(this).addClass("active"),
		$(".bbsmain>div").hide().eq(t).show(),
		$(".bbstop i").stop().animate({left:n},200,function(){})
	}),
	$(".close_big").click(function(){
		$(".mask").hide(),$(".big_banner").hide()
	}),
	$(".mask").click(function(){
		$(".mask").hide(),$(".maskpop").hide()
	}),
	e(),
	$(".sex a").on("mouseover",function(){
		var t=$(this);
		if(t.hasClass("active"))return!1;
		var n=t.attr("data-sex");
		t.siblings("a").removeClass("active"),t.addClass("active"),t.parent().siblings(".person").hide(),t.parent().siblings("."+n).show()
	}),
	$(".j-nav-list a").mouseover(function(){
		if(!$(this).hasClass("active")){
			var t=$(this).parent().index();
			$(".j-content>div").find(".person").removeClass("cur"),
			$(".j-content>div").find(".tj").removeClass("cur"),
			$(".j-content>div").find(".title").removeClass("cur"),
			$(".j-content>div").find(".button").removeClass("cur"),
			$(".j-nav-list a").removeClass("active"),
			$(".j-nav-list li").eq(t).find("a").addClass("active"),
			$(".j-content>div").hide().eq(t).show();
			var n=$(".j-content>div").eq(t);
			n.find(".person").addClass("cur"),
			n.find(".tj").addClass("cur"),
			n.find(".title").addClass("cur"),
			n.find(".button").addClass("cur"),
			setTimeout(function(){
				n.find(".person").removeClass("cur"),
				n.find(".tj").removeClass("cur"),
				n.find(".title").removeClass("cur"),
				n.find(".button").removeClass("cur")
			},10)
		}
	}),
	$(".button img").hover(function(){
		var t=$(this);
		$(".button").find("div").hide(),
		t.next("div").show()
		},
		function(){
			$(".button").find("div").hide();
			var t=$(this);t.next("div").hide()
		}),
	$(".share-img a,.share-img .code-box").hover(function(){$(this).find(".code-box").stop().fadeIn()},
	function(){$(this).find(".code-box").stop().fadeOut()}),
	$(".download-box a,.gift").hover(function(){
		$(this).children("span").stop().animate({top:"0"},300)},
		function(){$(this).children("span").stop().animate({top:"100%"},300)}),
	$(".inner .wx_wb a").hover(function(){
		$(".inner .wx_wb div").removeClass("active"),
		$($(".inner .wx_wb div")[$(this).index()]).addClass("active")
	}),
	$(".nav-list a").click(function(){
		var t=$(this).parent("li").index();
		$(".nav-list a").removeClass("active"),
		$(this).addClass("active"),
		$(".nav-list1").removeClass("active"),
		$($(".nav-list1")[t]).addClass("active")
	});
	for(var l=window.location.href,d=$(".tab-title li a"),h=0;h<d.length;h++){
		var f=l.indexOf($(d[h]).attr("href"));
		f>=0&&(d.removeClass("active"),$(d[h]).addClass("active"))
	}
	var m=$(".s_top");
	$(window).width()>1200?m.css("right",($(window).width()-1200)/3):m.css("right",0),$(window).resize(function(){
		$(window).width()>1200?m.css("right",($(window).width()-1200)/3):m.css("right",0)
	}),
	m.bind("click",function(){m.hide(),$("body,html").animate({scrollTop:0},500)}),
	$(window).bind("scroll",function(){
		var t=$(window).scrollTop();
		t>=400?m.show():m.hide()
	});
	var p=$(".nav-list1 a"),u=$(".nav-list li");
	i(),
	$("#NIE-art").length&&/iphone|ios|android|mobile/i.test(navigator.userAgent.toLowerCase())&&($("head").append('<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">'),
		$("#flashvideo").length&&$("#flashvideo").css("width","100%").css("height","100%"),
		$("body").addClass("mobile"),initScreen(),$("body,html").css("min-height","auto"),
		$(".artInfo").html($(".artDate")),
		$(".main-nav,#share,#NIE-topBar").remove(),
		$(".inner-out-bg").attr("class","inner-out-bg-mobile"),
		$("#NIE-art table,#NIE-art img").attr("width","100%").attr("height","auto"),
		$(".main").prepend('<div class="header"><a href="javascript:void(0);" class="icon-header"></a><a href="/m/" class="icon-back"></a></div>')),
		$(".slide-toggle").click(function(){var t=$(this);
		t.hasClass("open")?($(".gz").animate({right:"0"},400),t.find("span").html("\u6536\u8d77"),
		t.removeClass("open")):($(".gz").animate({right:"-160px"},400),
		t.find("span").html("\u5c55\u5f00"),
		t.addClass("open"))
	}),
	$(".gfhzBtn a").click(function(){var t=$(this).attr("data-href");
		return $(this).hasClass("active")?!1:($(".gfhzBtn a").removeClass("active"),
		$(this).addClass("active"),
		$(".Btnblock").hide(),
		void $("."+t).fadeIn())
	}),
	$(".mdpeople").hover(function(){
		$(this).find(".hover").stop().fadeIn(300)
	},
	function(){
		$(this).find(".hover").stop().fadeOut(300)
	}),
	$(".md-wrap li").on("click",function(){
		window.open("https://new.hi.163.com/")
	});
	var v=$(".md-wrap ul").length,g=0,w=1025;
	if($(".md-wrap").css("width",1025*v),$(".mengdao .mdleft").on("click",function(){
		g-=1,$(".md-wrap").animate({left:-(g*w)},300),
		$(".mengdao .mdright").show(),0==g&&$(this).hide()
	}),
	$(".mengdao .mdright").on("click",function(){
		g+=1,$(".md-wrap").animate({
			left:-(g*w)},300),$(".mengdao .mdleft").show(),g==v-1&&$(this).hide()
	}),
	$("#bottompop_switch").length&&"yes"==$("#bottompop_switch").html()){
		var b=$("#bottompop_url").html(),y=$("#bottompop_img").attr("data-src"),C=$("#bottompop_desc").html();
		b&&y&&$(".bottompop-box").html('<a target="_blank" href="'+b+'" title="'+C+'"><img src="'+y+'"></a>'),
		$(".bottompop-close").click(function(){return $("#bottompop").hide(),!1}),$("#bottompop").show()
	}
});
var initScreen=function(t){
	$("html").css("font-size",document.documentElement.clientWidth/375*312.5+"%"),t&&t()
};
if($("#NIE-art").length&&/iphone|ios|android|mobile/i.test(navigator.userAgent.toLowerCase())){
	var newsId=$("#NIE-art").attr("newsId");newsId&&$.ajax({
		url:"//nos.netease.com/mg-file/qnm/gw/news/data/"+newsId.slice(0,-4)+".js",dataType:"script",success:function(){
			"undefined"!=typeof newsArr&&"undefined"!=typeof newsArr[newsId]&&(location.href=newsArr[newsId])
		}
	})
}