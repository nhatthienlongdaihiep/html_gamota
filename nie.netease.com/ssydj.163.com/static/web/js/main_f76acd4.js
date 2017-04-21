function flashLoad(){
	$(".wrap").css({height:"2631px"}),
	$(".block1").addClass("on"),
	$(".play,.topbar,.logo").fadeIn()
}
$(function(){
	nie.config.copyRight.setWhite()
}),
nie.define("main",function(){
	function e(e){
		for(var a in e){
			var o=document.createElement("img");
			o.src=e[a]
		}
	}
	var a=nie.require("common");
	a.init();
	var o={
		banner1:"static/web/images/bg1_2ea589b.png",
		banner2:"static/web/images/bg2_27d1254.png",
		banner3:"static/web/images/bg3_0962b71.png",
		banner4:"static/web/images/bg4_dad751c.png",
		person1:"static/web/images/person1_25b7797.png",
		person2:"static/web/images/person2_580ae67.png",
		person3:"static/web/images/person3_4af6fb1.png",
		person4:"static/web/images/person4_c09b812.png"
	};
	e(o);
	var n=nie.require("nie.util.videoV2"),
	s=(
		nie.require("util.swfobject"),
		function(){
			$.flash.available?(
				$(".wrap").css({height:"996px"}),
				$("#flash").flash({
					swf:"static/web/flash/loading_f2d4659.swf",
					width:"1920",
					height:"960",
					allowScriptAccess:"always",
					allowFullScreen:"true",
					wmode:"opaque",
					flashvars:"mainswf="+base_url+"/static/web/flash/main_ce9a0bb.swf"
				})
			):(
				flashLoad(),
				$(".slogan").fadeIn()
			)
		}
	),
	t=function(){
		function e(){
			var e="https://nie.v.netease.com/r/video/20170309/b4710277-26a9-4260-84d9-bb77564bb99a.mp4",
			a="",
			o=700,
			s=394,
			t=($(window).height()-s)/2;
			$(['<div class="pop_video_bg" style="height:'+$("body").height()+'px;"></div>','<div class="pop_video" style="margin-left:-'+o/2+"px;width:"+o+"px;height:"+s+"px;top:"+t+'px;">','<div id="pop_vv"></div>','<a class="close_pv" href="javascript:void(0)" class="btn_close">x</a>',"</div>"].join("")).appendTo($("body")),
			$(".pop_video").show("fast",function(){$(this).css("overflow","visible")});
			n({
				fat:"#pop_vv",
				width:o,
				height:s,
				movieUrl:e,
				HDmovieUrl:a,
				autoPlay:!0,
				wmode:"window"
			})
		}
		$(".play").click(function(a){a.preventDefault(),e()}),
		$("body").delegate(".close_pv,.pop_video_bg","click",function(){
			var e=$(".pop_video_bg, .pop_video");
			e.fadeIn(function(){e.remove()})
		})
	},
	i=function(){
		var e=$(window).height();
		return $(window).scrollTop()>e?void $(".animate").addClass("show"):void $.each($(".animate"),function(a,o){
			var n=$(o),s=n.offset().top;
			$(window).scroll(function(){
				var a;
				return function(){
					a&&clearTimeout(a),a=setTimeout(function(){
						var a=!1;s=n.offset().top;var o=$(this),t=o.scrollTop();!a&&t>=s-e+500&&(a=!0,n.addClass("show"))
					},200)
				}
			}())
		})},
		c=function(){
			function e(e){
				$(".order_con .tip").html(e)
			}
			$(".order_con .btn_order").on("click",function(){
				var a=$(".pass").val(),
				o=$(".phone").val().replace(/^\s+|\s+$/,"");
				return a?o?/^1\d{10}$/.test(o)?void $.ajax({
					url:"http://file.mg.163.com/ssy/2016/yuyue/api.php?action=yuyue",
					type:"get",
					dataType:"jsonp",
					data:{skey:a,phone:o},
					success:function(a){
						switch(e("&nbsp;"),a.code){
							case 1:$("#mask").show(),$("#pop .pop-con span").text(""),$("#pop").show();
							break;
							case 2:$("#mask").show(),$("#pop .pop-con span").text(""),$("#pop").show();
							break;
							case-100:e("");break;
							default:alert(a.msg)
						}
					}
				}):void e(""):void e(""):void e("")
			})
		},
		p=function(){
			$("#pop .close,#pop .btn_ok").on("click",function(){
				$("#mask").fadeOut(),$("#pop").fadeOut()
			})
		},
		r=function(){
			{
				var e=0,a=$(".banner_list");
				document.all?"mousewheel":"DOMMouseScroll"
			}
			a.on("mousewheel",function(e){
				return e.stopPropagation(),!1
			});
			var o=0,n=!1;a.mousewheel(
				function(a){
					var s=(new Date).getTime();
					if(!(800>s-o))
						if(o=s,n||$("html,body").animate({scrollTop:$(".block1").height()},400),a.deltaY>0)
							n&&($("html,body").animate({scrollTop:$(".block1").height()},400),n=!1),0==e?$("html,body").animate({scrollTop:$(".block1").height()-$(window).height()},400):(e-=1,$(".banner_detail").hide().eq(e).show().addClass("on"),$(".nav a").removeClass("active"),$(".nav a").eq(e).addClass("active"));else{if(n)return!1;if(3==e)return $("html,body").animate({scrollTop:$(".wrap").height()-$(window).height()},400),void(n=!0);e+=1,$(".banner_detail").hide().eq(e).show().addClass("on"),$(".nav a").removeClass("active"),$(".nav a").eq(e).addClass("active")}}),$(".nav a").on("click",function(){var a=$(this);if(a.hasClass("active"))return!1;var o=a.index();e=o,$(".banner_detail").hide().eq(o).show().addClass("on"),$(".nav a").removeClass("active"),a.addClass("active")})},d=function(){s(),t(),i(),c(),p(),r(),setTimeout(function(){$(".arrow").remove()},8e3)};d()});