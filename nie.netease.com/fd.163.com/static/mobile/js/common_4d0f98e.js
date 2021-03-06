nie.define("PopWindow",function(){
	var t=function(t){
		t=$.extend({
			wrapperDiv:"",
			defaultContent:"",
			title:"",
			initCallback:function(){}
		},t||{}),
		this.$wrapper=$(t.wrapperDiv),
		this.defaultDiv=$(t.defaultContent),
		this.title=t.title,this.init(t.initCallback),
		this.isVisible=!1
	};
	return t.prototype={
		init:function(t){
			var i=this;
			this.$wrapper.find(".popWin_content").removeClass("current"),
			this.updateContent(this.defaultDiv),
			this.setTitle(this.title),
			$(this.$wrapper).find(".btn_close").bind("click",function(){i.close()}),
			this.$wrapper[0].addEventListener("touchmove",function(t){t.preventDefault()},!1),
			"function"==typeof t&&t()
		},
		show:function(){
			var t=this;
			this.$wrapper.addClass("popup");
			setTimeout(function(){
				t.$wrapper.addClass("show")
			},50);
			this.isVisible=!0
		},
		setTitle:function(t){
			this.$wrapper.find(".popWin_header span").html(t)
		},
		updateContent:function(t){
			this.$wrapper.find(".current").removeClass("current"),
			$(t).addClass("current")
		},
		close:function(){
			var t=this;
			t.$wrapper.removeClass("show");
			setTimeout(function(){
				t.$wrapper.removeClass("popup")
			},300);
			this.isVisible=!1
		}
	},
	{
		create:function(i){return new t(i)}
	}
});

nie.define("Pagination",function(){
	function t(t){
		$.ajax({
			url:t,
			dataType:"html",
			type:"get",
			success:function(t){
				var e=$(t);"list"==i?selecter="#NIE-list":(i="article")&&(selecter="#NIE-art .artText "),
				$(selecter).append(e.find(selecter).html()),
				a==l&&$("#btn_getmore").css("display","none"),
				$("#btn_getmore").html("\u70b9\u51fb\u83b7\u53d6\u66f4\u591a")
			}
		})
	}
	function e(){
		$("#btn_getmore").bind("click",function(){
			if($(this).html("\u6b63\u5728\u8bfb\u53d6..."),l>a){
				a++;var e=n+a+".html";t(e)
			}
		})
	}
	var n="",
	l=1,
	i="",
	a=1,
	r=function(t){
		i=t,
		l=Number($(".hd_totalPages").val()),
		l>1&&(
			n=$(".hd_nextUrl").val().replace("2.html",""),
			$("#btn_getmore").css("display","block"),e()
		)
	},
	c={init:r};return c
});

var isAppInside=/micromessenger/i.test(navigator.userAgent.toLowerCase())||/yixin/i.test(navigator.userAgent.toLowerCase()),isIos=/iphone os/i.test(navigator.userAgent.toLowerCase())||/ipad/i.test(navigator.userAgent.toLowerCase()),isAndroid=/android/i.test(navigator.userAgent.toLowerCase());nie.define("Common",function(){var e=function(e){$(".alertbox").length>0&&$(".alertbox").remove(),$(document.body).append('<div class="alertbox" id="alertbox"><div class="alert_text"><a href="javascript:void(0)" class="btn_close"><em></em><i></i></a>'+e+"</div></div>");setTimeout(function(){$("#alertbox").addClass("show")},50);$("#alertbox .btn_close").unbind().bind("click",function(){$("#alertbox").addClass("remove");setTimeout(function(){$("#alertbox").remove()},600)})},t=nie.require("Pagination"),i=nie.require("PopWindow");return{alert:e,pagination:function(e){t.init(e)},popWindow:function(e){return i.create(e)}}});

var _gainGiftInterface="http://zakka.webapp.163.com/get_cdkey/get",_gainGiftType="tt_zs",_activeGiftInterface="http://123.58.188.225:7090/ttxy_gift/active_gift";nie.define("Gift",function(){function t(){var t=nie.require("Common"),i=t.popWindow({wrapperDiv:"#md_gift",defaultContent:"#gain_init",title:"\u9886\u53d6\u516c\u6d4b\u5927\u793c\u5305"});$(".btn_popGift").bind("click",function(){$("#tx_getgift_phone").val(""),i.setTitle("\u9886\u53d6\u516c\u6d4b\u5927\u793c\u5305"),i.updateContent("#gain_init"),i.show()}),$("#btn_getGift").bind("click",function(){var e=this;if(!$(this).hasClass("busying")){var a=$("#tx_getgift_phone").val();""==a?t.alert("<h2>\u63d0\u793a</h2><p>\u624b\u673a\u53f7\u4e0d\u80fd\u4e3a\u7a7a</p>"):/^1(3|4|5|7|8)\d{9}$/.test(a)?($(this).addClass("busying"),$.ajax({url:_gainGiftInterface,type:"get",dataType:"jsonp",data:{product:_gainGiftType,mobile:a},success:function(e){e.status?i.updateContent("#gain_result"):t.alert("<h2>\u63d0\u793a</h2><p>"+e.msg+"</p>"),$("#tx_getgift_phone").val("")},complete:function(){$(e).removeClass("busying")}})):t.alert("<h2>\u63d0\u793a</h2><p>\u624b\u673a\u53f7\u7801\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165</p>")}}),$(".btn_showActive").bind("click",function(){i.setTitle("\u6fc0\u6d3b\u793c\u5305"),$("#tx_gift_gameId").val(""),$("#tx_gift_cdkey").val(""),$("#active").addClass(isIos?"active_ios":"active_and"),$("#active").hasClass("active_success")&&$("#active").removeClass("active_success"),i.updateContent("#active"),i.isVisible||i.show()}),isIos&&$("#btn_activeGift").bind("click",function(){var i=this;if(!$(this).hasClass("busying")){var e=$("#tx_gift_gameId").val(),a=$("#tx_gift_cdkey").val();""==e?t.alert("<h2>\u63d0\u793a</h2><p>\u8bf7\u586b\u5199\u60a8\u7684\u6e38\u620fID</p>"):""==a?t.alert("<h2>\u63d0\u793a</h2><p>\u8bf7\u586b\u5199\u793c\u5305\u6fc0\u6d3b\u7801</p>"):($(this).addClass("busying"),$.ajax({url:_activeGiftInterface,type:"get",dataType:"jsonp",data:{id:e,cdkey:a},success:function(){},complete:function(){$(i).removeClass("busying")}}))}})}return{init:t}});

nie.define("Order",function(){
	function e(){
		var e=nie.require("Common"),
		t=e.popWindow({
			wrapperDiv:"#md_order",
			defaultContent:"#order_init",
			title:"\u9884\u7ea6"
		});
		$(".btn_popOrder").bind("click",function(){
			t.setTitle("\u9884\u7ea6"),
			t.updateContent("#order_init"),
			t.show()
		}),
		$("#btn_order").bind("click",function(){
			var t=this;
			if(!$(this).hasClass("busying")){
				var i=$("#tx_order_phone").val();
				if(""==i)e.alert("<h2>\u63d0\u793a</h2><p>\u624b\u673a\u53f7\u4e0d\u80fd\u4e3a\u7a7a</p>");
				else if(/^1(3|4|5|7|8)\d{9}$/.test(i)){
					$(this).addClass("busying");
					$.ajax({
						url:_siteConfig.orderInterface+"?mobile="+i,
						type:"get",
						dataType:"jsonp",
						data:{src:"mobile",extra:""},
						success:function(t){
							e.alert(1==t.status?"":201==t.status?"":""),
							$("#tx_order_phone").val("")
						},
						complete:function(){
							$(t).removeClass("busying")
						}
					})
				}else e.alert("")
			}
		})
	}return{init:e}
});

var _siteConfig={
	order:{ios:!1,android:!0},
	gift:{ios:!0,android:!1},
	download:{ios:!0,android:!1},
	orderInterface:"http://dora.webcgi.163.com/api/87_131_2016_03_30/appoint"
};

if(0){/* Bat dau if dong Tam thoi tat di */

nie.define("GlobalInit",function(){ 
	/* var n=nie.require("Common"), */ 
	t=function(n){
		$("html").css("font-size",document.documentElement.clientWidth/375*312.5+"%"),n&&n()
	},
	i=function(){ 
		/* var n=(nie.require("nie.util.mobiShare2"), $("#share_title").html()); */ 
		$("#hd_pagination_type").length>0&&"article"==$("#hd_pagination_type").val()&&(n=$("#NIE-art .artTitle").html()), 
		MobileShare.init({
			title:n,
			desc:$("#share_desc").html(),
			url:location.href,
			imgurl:$("#share_pic").attr("src"),
			circleTitle:n,
			guideText:"",
			qrcodeIcon:"http://res.fd.netease.com/m/gw/20160427144222/img/logo_4c5c97e.png",
			shareCallback:function(){

			},
			wxSdkCallback:function(){}
		}),
		$("#btn_share").click(function(){
			MobileShare.showShare()
		})
	},
	e=function(){
		$("#btn_attention").bind("click",function(){
			$("#md_attention").show();
			setTimeout(function(){
				$("#md_attention").addClass("show")
			},50)
		}),
		$("#md_attention").bind("click",function(){
			$("#md_attention").removeClass("show");
			setTimeout(function(){
				$("#md_attention").hide()
			},300)
		}),
		$("#md_attention")[0].addEventListener("touchmove",function(n){
			n.preventDefault()
		},!1)
	},
	o=function(){
		var n=$("nav ul li"),
		t=parseFloat(n.eq(0).css("height").replace("px",""))*n.length;
		$("nav").attr("data-height",t),
		$("#btn_nav").bind("click",function(){
			$(this).addClass("active"),
			$("nav").show();
			setTimeout(function(){
				$("nav ul").css("height",$("nav").attr("data-height")+"px")
			},50)
		}),
		$("nav").bind("click",function(){
			$("#btn_nav").removeClass("active"),
			$("nav ul").css("height","0px");
			setTimeout(function(){$("nav").hide()},300)
		}),
		$("nav")[0].addEventListener("touchmove",function(n){n.preventDefault()},!1)
	},
	a=function(){
		window.addEventListener("onorientationchange"in window?"orientationchange":"resize",function(n){s(n)},!1),$(".btn_toTop")[0].addEventListener("click",function(){window.scrollTo(0,0)},!1)
	},
	s=function(){
		if(90==window.orientation||-90==window.orientation)$("#forhorview").css("display","-webkit-box");else{{setTimeout(t,300)}$("#forhorview").css("display","none")}
	},
	r=function(){
		t(function(){
			var t=isIos?"ios":"android";
			_siteConfig.order[t]?$(".btn_popOrder").addClass("show"):$(".btn_popOrder").removeClass("show"),
			_siteConfig.gift[t]?$(".btn_popGift").addClass("show"):$(".btn_popGift").removeClass("show"),
			_siteConfig.download[t]?$(".btn_download").addClass("show"):$(".btn_download").removeClass("show"),
			i(),
			e(),
			a(),
			$("#btn_nav").length>0&&o(),
			$("#hd_pagination_type").length>0&&n.pagination($("#hd_pagination_type").val());
			var s=nie.require("Order");
			s.init();
			var r=nie.require("Gift");r.init()
		})
	};
	r()
});


}
/* Ket thuc if dong*/