nie.define("PopWindow",function(){
	var t=function(t){
		t=$.extend({
			wrapperDiv:"",
			defaultContent:"",
			title:"",
			initCallback:function(){}},
			t||{}
		),
		this.$wrapper=$(t.wrapperDiv),
		this.defaultDiv=$(t.defaultContent),
		this.title=t.title,
		this.init(t.initCallback),
		this.isVisible=!1
	};
	return t.prototype={
		init:function(t){
			var e=this;
			this.$wrapper.find(".popWin_content").removeClass("current"),
			this.updateContent(this.defaultDiv),
			this.setTitle(this.title),
			$(this.$wrapper).find(".btn_close").bind("click",function(){e.close()}),
			this.$wrapper[0].addEventListener("touchmove",function(t){t.preventDefault()},!1),
			"function"==typeof t&&t()
		},
		show:function(){
			var t=this;
			this.$wrapper.addClass("popup");
			setTimeout(function(){t.$wrapper.addClass("show")},50);
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
			setTimeout(function(){t.$wrapper.removeClass("popup")},300);
			this.isVisible=!1,$("#tx_order_phone").val(""),$(".yzm-text").val("")
		}
	},
	{
		create:function(e){return new t(e)}
	}
});

nie.define("Pagination",function(){
	function t(t){
		$.ajax({
			url:t,
			dataType:"html",
			type:"get",
			success:function(t){
				var e=$(t);
				"list"==i?selecter="#NIE-list":(i="article")&&(selecter="#NIE-art .artText "),
				$(selecter).append(e.find(selecter).html()),
				a==l&&$("#btn_getmore").css("display","none"),
				$("#btn_getmore").html("\u70b9\u51fb\u83b7\u53d6\u66f4\u591a")
			}
		})
	}
	function e(){
		$("#btn_getmore").bind("click",function(){
			if($(this).html("\u6b63\u5728\u8bfb\u53d6..."),l>a){a++;var e=n+a+".html";t(e)}
		})
	}
	var n="",
	l=1,
	i="",
	a=1,
	r=function(t){
		i=t,l=Number($(".hd_totalPages").val()),
		l>1&&(
			n=$(".hd_nextUrl").val().replace("2.html",""),
			$("#btn_getmore").css("display","block"),e()
		)
	},
	c={init:r};return c
});

nie.define("PopVideo",function(){
	var i=function(i){
		i=$.extend({btn:""},i||{}),
		this.$btn=$(i.btn),this.init()
	};
	return i.prototype={
		init:function(){
			var i=$("#Jvideo");
			if(!i[0]){
				var n=document.createElement("div");
				n.id="Jvideo",
				n.className="m-video",
				n.innerHTML='<div class="m-video-con"></div>',
				document.body.appendChild(n),i=$("#Jvideo")
			}
			var t=i.find(".m-video-con");
			this.$btn.unbind().bind("click",function(){
				var n=$(this).attr("data-mp4"),
				e='<video src="'+n+'" controls="controls" id="tsvideo" x-webkit-airplay="true" webkit-playsinline="true"></video>';
				t.html(e),
				i.show();
				setTimeout(function(){$("video")[0].currentTime=0,$("video")[0].play()},300)
			}),
			i.unbind().bind("click",function(){i.hide(),t.html("")}),
			t.unbind().bind("click",function(i){i.stopPropagation()})
		}
	},
	{
		create:function(n){return new i(n)}
	}
});

var isAppInside=/micromessenger/i.test(navigator.userAgent.toLowerCase())||/yixin/i.test(navigator.userAgent.toLowerCase()),
isIos=/iphone os/i.test(navigator.userAgent.toLowerCase())||/ipad/i.test(navigator.userAgent.toLowerCase()),isAndroid=/android/i.test(navigator.userAgent.toLowerCase());

nie.define("Common",function(){
	var e=function(e){
		$(".alertbox").length>0&&$(".alertbox").remove(),
		$(document.body).append('<div class="alertbox" id="alertbox"><div class="alert_text"><a href="javascript:void(0)" class="btn_close"><em></em><i></i></a>'+e+"</div></div>");
		setTimeout(function(){$("#alertbox").addClass("show")},50);
		$("#alertbox .btn_close").unbind().bind("click",function(){
			$("#alertbox").addClass("remove");setTimeout(function(){$("#alertbox").remove()},600)
		})
	},
	t=nie.require("Pagination"),
	i=nie.require("PopWindow");
	return{
		alert:e,
		pagination:function(e){t.init(e)},
		popWindow:function(e){return i.create(e)}
	}
});

var _gainGiftInterface="http://zakka.webapp.163.com/get_cdkey/get",_gainGiftType="tt_zs",_activeGiftInterface="http://123.58.188.225:7090/ttxy_gift/active_gift";

nie.define("Gift",function(){
	function t(){
		var t=nie.require("Common"),
		i=t.popWindow({
			wrapperDiv:"#md_gift",defaultContent:"#gain_init",title:"\u9886\u53d6\u516c\u6d4b\u5927\u793c\u5305"
		});
		$(".btn_popGift").bind("click",function(){
			$("#tx_getgift_phone").val(""),
			i.setTitle("\u9886\u53d6\u516c\u6d4b\u5927\u793c\u5305"),
			i.updateContent("#gain_init"),i.show()
		}),
		$("#btn_getGift").bind("click",function(){
			var e=this;
			if(!$(this).hasClass("busying")){
				var a=$("#tx_getgift_phone").val();
				""==a?t.alert(""):/^1(3|4|5|7|8)\d{9}$/.test(a)?(
					$(this).addClass("busying"),
					$.ajax({
						url:_gainGiftInterface,
						type:"get",
						dataType:"jsonp",
						data:{product:_gainGiftType,mobile:a},
						success:function(e){
							e.status?i.updateContent("#gain_result"):t.alert("<h2>\u63d0\u793a</h2><p>"+e.msg+"</p>"),
							$("#tx_getgift_phone").val("")
						},
						complete:function(){
							$(e).removeClass("busying")
						}
					})
				):t.alert("")
			}
		}),
		$(".btn_showActive").bind("click",function(){
			i.setTitle("\u6fc0\u6d3b\u793c\u5305"),
			$("#tx_gift_gameId").val(""),
			$("#tx_gift_cdkey").val(""),
			$("#active").addClass(isIos?"active_ios":"active_and"),
			$("#active").hasClass("active_success")&&$("#active").removeClass("active_success"),
			i.updateContent("#active"),
			i.isVisible||i.show()
		}),
		isIos&&$("#btn_activeGift").bind("click",function(){
			var i=this;
			if(!$(this).hasClass("busying")){
				var e=$("#tx_gift_gameId").val(),
				a=$("#tx_gift_cdkey").val();
				""==e?t.alert(""):""==a?t.alert(""):(
					$(this).addClass("busying"),
					$.ajax({
						url:_activeGiftInterface,
						type:"get",
						dataType:"jsonp",
						data:{id:e,cdkey:a},
						success:function(){},
						complete:function(){
							$(i).removeClass("busying")
						}
					})
				)
			}
		})
	}return{init:t}
});

nie.define("Order",function(){
	function t(t){
		return/^(13|14|15|17|18)\d{9}$/.test(t)?!0:!1
	}
	function e(){
		function e(){
			var t=60,e=($(".yzm-text"),$(".yzm-btn"));
			o=setInterval(function(){
				return t--,e.text("\u83b7\u53d6\u9a8c\u8bc1\u7801("+t+"s)"),
				0==t?(
					o&&clearInterval(o),
					n=!1,
					e.removeClass("waiting"),
					e.text("\u83b7\u53d6\u9a8c\u8bc1\u7801"),
					wait=60,!1
				):void 0
			},1e3)
		}
		var r=nie.require("Common"),
		a=r.popWindow({
			wrapperDiv:"#md_order",
			defaultContent:"#order_init",
			title:"\u9884\u7ea6"
		}),
		o=null,
		n=($(".yzm-btn"),!1),
		s=$(".yzm-text");
		$("#md_libao").unbind().bind("click",function(){
			$("#md_libao").removeClass("show");
			setTimeout(function(){
				$("#md_libao").removeClass("popup")
			},300)
		}),
		$("#md_libao section").unbind().bind("click",function(t){
			t.stopPropagation()
		}),
		$(".btn_close").bind("click",function(){
			$("#md_order").removeClass("show");
			setTimeout(function(){$("#md_order").removeClass("popup")},300);
			o&&(
				o&&clearInterval(o),
				$(".yzm-btn").removeClass("disable"),
				$(".yzm-btn").text("\u83b7\u53d6\u9a8c\u8bc1\u7801"),
				$(".yzm-btn").removeClass("waiting"))
		}),
		isIos&&(
			$(".download_btn_con").show(),
			$(".btn_popOrder").bind("click",function(){
				a.setTitle("\u9884\u7ea6"),
				a.updateContent("#order_init"),
				a.show()
			}),
			$(".yzm-btn").click(function(){
				var r=!1,a=!1;
				if(!r&&!a){
					r=!0;
					var o=$("#tx_order_phone").val();
					if(!t(o))return alert(""),!1;
					n||$.ajax({
						type:"GET",
						url:"http://dora.webcgi.163.com/api/87_313_2016_08_11/get_authcode_apnt",
						data:{mobile:o},
						dataType:"jsonp",
						success:function(t){
							r=!1;
							var o=t.status;
							1==o?(
								n=!0,$(".yzm-btn").text(""),
								$(".yzm-btn").addClass("waiting"),e()
							):105==o?(
								alert(t.msg),s.val("")
							):103==o?(
								alert(""),s.val("")
							):112==o?(
								alert(t.msg),s.val("")
							):113==o?(
								alert(t.msg),s.val("")
							):(
								message=t.msg,
								alert(t.msg),a=!1
							)},
							error:function(){
								r=!1,alert("")
							}
						})
				}
			}),
			$("#btn_order").bind("click",function(){
				var e=$("#tx_order_phone").val();
				if(!t(e))return alert(""),!1;
				var a=s.val();
				if(""==a||"\u8f93\u5165\u9a8c\u8bc1\u7801"==a)return void alert("");
				var n=isIos?"ios":isAndroid?"android":"other";
				$.ajax({
					url:"http://dora.webcgi.163.com/api/87_313_2016_08_11/verify_authcode",
					async:!1,
					dataType:"jsonp",
					data:{src:"mobile",mobile:e,authcode:a,os:n,extra:""},
					success:function(t){
						if(1==t.status){
							alert(""),a="",
							o&&clearInterval(o),
							$(".yzm-btn").text("\u83b7\u53d6\u9a8c\u8bc1\u7801"),
							$("#tx_order_phone").val(""),
							s.val(""),
							$(".yzm-btn").removeClass("waiting"),
							$("#md_order").removeClass("show");
							{
								setTimeout(function(){$("#md_order").removeClass("popup")},300)
							}
						}else if(201==t.status){
							alert(""),
							a="",
							o&&clearInterval(o),
							$(".yzm-btn").text("\u83b7\u53d6\u9a8c\u8bc1\u7801"),
							$("#tx_order_phone").val(""),
							s.val(""),
							$(".yzm-btn").removeClass("waiting"),
							$("#md_order").removeClass("show");
							{
								setTimeout(function(){$("#md_order").removeClass("popup")},300)
							}
						}else 103==t.status?(
							alert(""),
							s.val("")
						):105==t.status?(
							alert(t.msg),s.val("")
						):alert(t.msg)
					},
					error:function(){
						r.alert("")
					}
				})
			})
		),isAndroid&&(
			$(".libao_btn_con").show(),
			$(".btn_popOrder").bind("click",function(){
				a.setTitle("\u9884\u7ea6"),
				a.updateContent("#order_init"),
				a.show(),
				$("#md_order .popWin_header").html("")
			}),
			$(".yzm-btn").click(function(){
				var r=!1,a=!1;
				if(!r&&!a){
					r=!0;
					var o=$("#tx_order_phone").val();
					if(!t(o))return alert(""),!1;
					n||$.ajax({
						type:"GET",
						url:"http://dora.webcgi.163.com/api/87_315_2016_08_11/get_authcode_apnt",
						data:{mobile:o},
						dataType:"jsonp",
						success:function(t){
							r=!1;
							var o=t.status;
							1==o?(
								n=!0,$(".yzm-btn").text("\u83b7\u53d6\u9a8c\u8bc1\u7801(60s)"),
								$(".yzm-btn").addClass("waiting"),
								e()
							):105==o?(
								alert(t.msg),s.val("")
							):103==o?(
								alert(""),
								s.val("")
							):112==o?(
								alert(t.msg),
								s.val("")
							):113==o?(
								alert(t.msg),s.val("")
							):(
								message=t.msg,alert(t.msg),a=!1
							)
						},
						error:function(){
							r=!1,alert("\u7f51\u7edc\u9519\u8bef\uff01")
						}
					})
				}
			}),
			$("#btn_order").bind("click",function(){
				var e=$("#tx_order_phone").val();
				if(!t(e))return alert(""),!1;
				var r=s.val();
				if(""==r||"\u8f93\u5165\u9a8c\u8bc1\u7801"==r)return void alert("");
				var a=isIos?"ios":isAndroid?"android":"other";
				$.ajax({
					url:"http://dora.webcgi.163.com/api/87_315_2016_08_11/verify_authcode",
					async:!1,
					dataType:"jsonp",
					data:{src:"mobile",mobile:e,authcode:r,os:a,extra:""},
					success:function(t){
						if(1==t.status){
							alert(""),
							r="",
							o&&clearInterval(o),
							$(".yzm-btn").text("\u83b7\u53d6\u9a8c\u8bc1\u7801"),
							$("#tx_order_phone").val(""),
							s.val(""),
							$(".yzm-btn").removeClass("waiting"),
							$("#md_order").removeClass("show");
							{
								setTimeout(function(){$("#md_order").removeClass("popup")},300)
							}
						}else if(201==t.status){
							alert(""),
							r="",
							o&&clearInterval(o),
							$(".yzm-btn").text("\u83b7\u53d6\u9a8c\u8bc1\u7801"),
							$("#tx_order_phone").val(""),
							s.val(""),
							$(".yzm-btn").removeClass("waiting"),
							$("#md_order").removeClass("show");
							{
								setTimeout(function(){$("#md_order").removeClass("popup")},300)
							}
						}else 103==t.status?(
							alert(""),s.val("")
						):105==t.status?(
							alert(t.msg),s.val("")
						):alert(t.msg)
					},
					error:function(){
						alert("")
					}
				})
			})
		)
	}return{init:e}
});

var _siteConfig={
	order:{ios:!1,android:!0},
	gift:{ios:!0,android:!1},
	download:{ios:!0,android:!1},
	orderInterface:"http://dora.webcgi.163.com/api/87_131_2016_03_30/appoint"
};

if(0){	
nie.define("GlobalInit",function(){var n=nie.require("Common"),i=function(n){$("html").css("font-size",document.documentElement.clientWidth/375*312.5+"%"),n&&n()},t=function(){ /* var n=( /* nie.require("nie.util.mobiShare2"),  $("#share_title").html());   */$("#hd_pagination_type").length>0&&"article"==$("#hd_pagination_type").val()&&(n=$("#NIE-art .artTitle").html()),MobileShare.init({title:n,desc:$("#share_desc").html(),url:location.href,imgurl:$("#share_pic").attr("src"),circleTitle:n,guideText:"\u4e0d\u80fd\u8ba9\u6211\u4e00\u4e2a\u4eba\u773c\u778e\uff01<br />\u628a\u9b54\u722a\u4f38\u5230\u670b\u53cb\u5708\u5427\uff01",qrcodeIcon:"http://res.fd.netease.com/m/gw/20160815153640/img/logo_fe4ebea.png",shareCallback:function(){},wxSdkCallback:function(){}}),$("#btn_share").click(function(){MobileShare.showShare()})},e=function(){$("#btn_attention").bind("click",function(){$("#md_attention").show();setTimeout(function(){$("#md_attention").addClass("show")},50)}),$("#md_attention").bind("click",function(){$("#md_attention").removeClass("show");setTimeout(function(){$("#md_attention").hide()},300)}),$("#md_attention")[0].addEventListener("touchmove",function(n){n.preventDefault()},!1)},o=function(){var n=$("nav ul li"),i=parseFloat(n.eq(0).css("height").replace("px",""))*n.length;$("nav").attr("data-height",i),$("#btn_nav").bind("click",function(){$(this).addClass("active"),$("nav").show();setTimeout(function(){$("nav ul").css("height",$("nav").attr("data-height")+"px")},50)}),$("nav").bind("click",function(){$("#btn_nav").removeClass("active"),$("nav ul").css("height","0px");setTimeout(function(){$("nav").hide()},300)}),$("nav")[0].addEventListener("touchmove",function(n){n.preventDefault()},!1)},a=function(){window.addEventListener("onorientationchange"in window?"orientationchange":"resize",function(n){r(n)},!1),$(".btn_toTop")[0].addEventListener("click",function(){window.scrollTo(0,0)},!1)},r=function(){if(90==window.orientation||-90==window.orientation)$("#forhorview").css("display","-webkit-box");else{{setTimeout(i,300)}$("#forhorview").css("display","none")}},s=function(){i(function(){var i=isIos?"ios":"android";_siteConfig.order[i]?$(".btn_popOrder").addClass("show"):$(".btn_popOrder").removeClass("show"),_siteConfig.gift[i]?$(".btn_popGift").addClass("show"):$(".btn_popGift").removeClass("show"),_siteConfig.download[i]?$(".btn_download").addClass("show"):$(".btn_download").removeClass("show"),t(),e(),a(),$("#btn_nav").length>0&&o(),$("#hd_pagination_type").length>0&&n.pagination($("#hd_pagination_type").val());var r=nie.require("Order");r.init();var s=nie.require("Gift");s.init()})};s();var d=n.popWindow({wrapperDiv:"#md_libao"});$(".btn_libao").bind("click",function(){d.show()});new Swiper(".list-nav-swiper",{scrollbar:".list-nav-swiper .swiper-scrollbar",direction:"horizontal",slidesPerView:"auto",freeMode:!0,observer:!0,observeParents:!0})});
}