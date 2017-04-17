var Gallery=function(){
	function l(){
		return navigator.userAgent.indexOf("MSIE")>=0?!0:!1
	}
	function e(e){
		var a=e;i(l()?a:a)
	}
	function a(l){
		var e=l,
		a=e.options.galleryContainer.find(".threeD_gallery_wrap"),
		s=a.width(),
		r=a.height(),
		i=-(s/2),t=-(r/2);
		a.css({"margin-left":i,"margin-top":t})
	}
	function s(l){
		var e=l.next();
		return e.length>0?e:l.siblings().first()
	}
	function r(l){
		var e=l.prev();
		return e.length>0?e:l.siblings().last()
	}
	function i(e){
		var s=e,r=s.options.galleryContainer.find(".gallery_item");
		if(l()){
			s.options.galleryContainer.addClass("ie_container");
			var i=s.options.vis?s.options.vis:s.options.slidesPerView;
			s.options.galleryContainer.slide({
				mainCell:s.options.galleryContainer.find(".gallery_wrap"),
				autoPlay:!0,
				autoPage:!0,
				effect:"left",
				vis:i
			}),
			r.find("img").addClass("show")
		}else 
			r.addClass("gallery_out threeD_gallery_item"),
			s.options.galleryContainer.find(".gallery_wrap").addClass("threeD_gallery_wrap"),
			5==s.options.slidesPerView?(r.eq(0).removeClass("gallery_out").addClass("gallery_left_back"),
				r.eq(1).removeClass("gallery_out").addClass("gallery_left_middle"),
				r.eq(2).removeClass("gallery_out").addClass("front_side"),
				r.eq(3).removeClass("gallery_out").addClass("gallery_right_middle"),
				r.eq(4).removeClass("gallery_out").addClass("gallery_right_back")):3==s.options.slidesPerView&&(r.eq(0).removeClass("gallery_out").addClass("gallery_left_middle"),
				r.eq(1).removeClass("gallery_out").addClass("front_side"),
				r.eq(2).removeClass("gallery_out").addClass("gallery_right_middle")),
				r.find("img").addClass("show"),
				t(s);
				a(s)
	}
	function t(l){
		var e=l,
		a=e.options.galleryContainer,
		s=a.find(".threeD_gallery_item");
		_(e),
		s.click(function(){
			var l=$(this);
			_(e),
			5==e.options.slidesPerView?d(e,l):3==e.options.slidesPerView?o(e,l):alert("抱歉！此插件不支持您设定的slidesPerView参数值")})
	}
	function d(l,e){
		var a=l,s=e;
		s.hasClass("gallery_right_middle")||s.hasClass("gallery_right_back")?(a.rm.addClass("front_side").removeClass("gallery_right_middle"),
		a.rb.addClass("gallery_right_middle").removeClass("gallery_right_back"),
		a.fs.addClass("gallery_left_middle").removeClass("front_side"),
		a.lm.addClass("gallery_left_back").removeClass("gallery_left_middle"),
		a.options.galleryContainer.find(".gallery_item").length>5?(a.ro.addClass("gallery_right_back").removeClass("gallery_out"),
		a.lb.addClass("gallery_out").removeClass("gallery_left_back")):a.lb.addClass("gallery_right_back").removeClass("gallery_left_back")):s.hasClass("gallery_left_middle")||s.hasClass("gallery_left_back")?(a.lm.addClass("front_side").removeClass("gallery_left_middle"),
		a.lb.addClass("gallery_left_middle").removeClass("gallery_left_back"),
		a.fs.addClass("gallery_right_middle").removeClass("front_side"),
		a.rm.addClass("gallery_right_back").removeClass("gallery_right_middle"),
		a.options.galleryContainer.find(".gallery_item").length>5?(a.lo.addClass("gallery_left_back").removeClass("gallery_out"),
		a.rb.addClass("gallery_out").removeClass("gallery_right_back")):a.rb.addClass("gallery_left_back").removeClass("gallery_right_back")):s.hasClass("front_side")
	}
	function o(l,e){
		var a=l,s=e;
		s.hasClass("gallery_right_middle")?(
			a.rm.addClass("front_side").removeClass("gallery_right_middle"),
			a.ro.addClass("gallery_right_middle").removeClass("gallery_out"),
			a.fs.addClass("gallery_left_middle").removeClass("front_side"),
			a.lm.addClass("gallery_out").removeClass("gallery_left_middle")
		):s.hasClass("gallery_left_middle")&&(
			a.lm.addClass("front_side").removeClass("gallery_left_middle"),
			a.lo.addClass("gallery_left_middle").removeClass("gallery_out"),
			a.fs.addClass("gallery_right_middle").removeClass("front_side"),
			a.rm.addClass("gallery_out").removeClass("gallery_right_middle"))
	}
	function _(l){
		var e=l,a=e.options.galleryContainer;
		e.fs=a.find(".front_side"),
		e.rm=a.find(".gallery_right_middle"),
		e.rb=a.find(".gallery_right_back"),
		e.lm=a.find(".gallery_left_middle"),
		e.lb=a.find(".gallery_left_back"),
		e.lo=r(a.find(".gallery_left_back")),
		e.ro=s(a.find(".gallery_right_back")),
		3==e.options.slidesPerView&&(
			e.lo=r(a.find(".gallery_left_middle")),
			e.ro=s(a.find(".gallery_right_middle"))
		)
	}
	var n=function(l){
		this.options=$.extend({slidesPerView:5},l),
		this.fs=null,
		this.rm=null,
		this.rb=null,
		this.ro=null,
		this.lm=null,
		this.lb=null,
		this.lo=null
	};
	return n.prototype={
		init:function(){e(this)}
	},
	{
		create:function(l){
			new n(l).init()
		}
	}
}();


nie.define(function(){

	function e(e){
		$video.show().addClass("show"),
		nie.use(["nie.util.videoV2"],
		function(){
			nie.util.video({
				fat:"#Jvideo .m-video-con",
				width:"960",
				height:"540",
				movieUrl:e,
				HDmovieUrl:e,
				SHDmovieUrl:e,
				vtype:"",
				autoPlay:!0
			})
		}),
		$(".J_videoMark").show()
	}



	function t(){
		return"placeholder"in document.createElement("input")
	}
	var i=$("#share_url").html(),
		o=$("#share_pic").attr("data-src"),
		l=$("#share_desc").html(),
		a=$("#share_title").html();
	/*
	nie.use(["nie.util.shareV5"],function(){
		nie.util.share({
			fat:"#NIE-share",
			type:1,
			defShow:[23,22,2,3,1,4],
			title:a,
			img:o,
			content:l,
			url:i
		})
	});
	*/
	var s,n=!1,r=60;
	$video=$("#Jvideo"),
	$video_con=$("#Jvideo .m-video-con"),
	$popbg=$("#mask");
	var c=function(e){
		e.show(),
		setTimeout(function(){
			e.addClass("show")
		},10)
	},
	u=function(e){
		e.removeClass("show").hide(),
		"Jvideo"==e.attr("id")&&$video_con.html("")
	};
	$video.find(".m-close").bind("click",function(){
		u($video),
		u($popbg)
	}),
	$(".dialog-close,.btn-close").bind("click",function(){
		u($(this).parents(".pop-dialog")),
		u($popbg),
		$(".yuyueForm")[0].reset(),
		clearInterval(s),
		$(".getCode").text("获取验证码"),
		$(".getCode").removeClass("waiting"),
		n=!1,
		r=60,
		$("#phone").blur(),
		$("#authcode").blur()
	}),
	$(".play").click(function(){
		$(this);
		e($(this).attr("data-src")),c($popbg)
	}),
	/*
	nie.define("download",function(){
		nie.require("nie.util.niedownload");
		NieDownload.create({
			wrapper:$(".nie-download"),
			enableAndroid:!0,
			enableIos:!0,
			disableClick:function(){
				$("#Jyuyue").show().addClass("show"),
				c($popbg)
			}
		})
	}),
	*/
	$(".libao").click(function(){
		$("#Jlibao").show().addClass("show"),c($popbg)
	}),
	$(".yuyue").click(function(){
		$("#Jyuyue").show().addClass("show"),c($popbg)
	});
	$(".js-num").blur(function(){}),
	$(".js-num").keyup(function(){
		this.value=this.value.replace(/[^0-9.]/g,"")
	}),
	t()||$("[placeholder]").focus(function(){
		var e=$(this);
		e.val()==e.attr("placeholder")&&(e.val(""),e.removeClass("placeholder"))
	}).blur(function(){
		var e=$(this);
		(""==e.val()||e.val()==e.attr("placeholder"))&&(e.addClass("placeholder"),e.val(e.attr("placeholder")))
	}).blur();
	var v="http://dora.webcgi.163.com/api/",
	h=[
		{
			ordered:v+"87_315_2016_08_11/verify_authcode",
			vcode:v+"87_315_2016_08_11/get_authcode_apnt?mobile="
		},
		{
			ordered:v+"87_313_2016_08_11/verify_authcode",
			vcode:v+"87_313_2016_08_11/get_authcode_apnt?mobile="
		}
	],
	f=0;
	$(".tabs a").click(function(){
		var e=$(this).index(),t=$(this).hasClass("cur");
		t||($(this).addClass("cur"),$(this).siblings().removeClass("cur"),f=e)
	}),
	$(".getCode").click(function(){
		var e=$("#phone").val();
		return""==e||"请输入你的手机号"==e?void d.Alert("请输入手机号码"):/^1[34578]\d{9}/.test(e)?void(n||
			$.ajax({
				url:h[f].vcode+e,
				async:!1,
				dataType:"jsonp",
				success:function(e){
					1==e.status?(
						n=!0,
						$(".getCode").addClass("waiting"),
						s=setInterval(function(){
							return 0==r?(
								clearInterval(s),
								n=!1,$(".getCode").text("获取验证码"),
								$(".getCode").removeClass("waiting"),
								r=60,
								!1
							):($(".getCode").text("获取验证码("+r+"s)"),void r--)
						},1e3)
					):d.Alert(e.msg)
				}
			})
		):void d.Alert("请输入正确的手机号码")
	}),
	$(".btn-yuyue").click(function(){
		var e=$("#phone").val(),
		t=$("#authcode").val();
		return""==e||"请输入你的手机号"==e?void d.Alert("请输入手机号码"):/^1[34578]\d{9}/.test(e)?""==t||"请输入验证码"==t?void d.Alert("请输入验证码"):void 
		$.ajax({
			url:h[f].ordered+"?mobile="+e+"&authcode="+t,
			async:!1,
			dataType:"jsonp",
			success:function(e){
				1==e.status?(
					d.Alert("预约成功"),
					u($("#Jyuyue")),
					u($popbg),
					$(".yuyueForm")[0].reset(),
					clearInterval(s),
					$(".getCode").text("获取验证码"),
					$(".getCode").removeClass("waiting"),
					n=!1,
					r=60,
					clearInterval(s),
					$("#phone").blur(),
					$("#authcode").blur()
				):(
					(103==e.status||105==e.status)&&d.Alert("请输入正确的验证码"),
					201==e.status?(
						d.Alert(e.msg),
						$(".yuyueForm")[0].reset(),
						clearInterval(s),
						$(".getCode").text("获取验证码"),
						$(".getCode").removeClass("waiting"),
						clearInterval(s),
						r=60,
						n=!1,
						$("#phone").blur(),
						$("#authcode").blur()
					):d.Alert(e.msg)
				)
			}
		}):void d.Alert("请输入正确的手机号码")
	});
	var p;
	$(".fuli-list img").click(function(){
		var e=$(this).data("index");
		p=e,
		$dialog=$("#Jdialog"),
		$dialog.show().addClass("show"),
		$("#Jdialog .dialog-con").html($(".main")),
		$("#Jdialog").slide({
			mainCell:".main",
			effect:"left",
			autoPlay:!1,
			delayTime:500,
			prevCell:"#dp",
			nextCell:"#dn",
			defaultIndex:e-1
		}),
		c($popbg)
	}),
	$(".ts").slide({
		mainCell:".ts-con",
		effect:"left",
		autoPlay:!0,
		delayTime:1e3,
		interTime:5e3,
		prevCell:"#ts-p",
		nextCell:"#ts-n"
	});
	var g=function(){
		var e=$("#wrap").width();
		1680>e?$(".logo").addClass("fixed"):$(".logo").removeClass("fixed"),
		1280>e?(
			$(".screen-3").addClass("fixed"),
			$(".screen-4").addClass("fixed")
		):(
			$(".screen-3").removeClass("fixed"),
			$(".screen-4").removeClass("fixed")
		),e>1600?$(".share-box").addClass("fixed"):$(".share-box").removeClass("fixed")
	};
	$(window).resize(function(){g()}),
	g(),
	Gallery.create({
		galleryContainer:$(".gallery_container"),
		vis:3
	}),
	$(".screen-4 .prev").click(function(){
		var e=$(".front_side").prev();
		0==e.length&&(e=$(".gallery_item").last()),
		e.click()
	}),
	$(".screen-4 .next").click(function(){
		var e=$(".front_side").next();
		0==e.length&&(e=$(".gallery_item").first()),
		e.click()
	}),
	$(".trigger").click(function(){
		var e=$(this).hasClass("close");
		e?(
			$(this).removeClass("close"),
			$(".slider").animate({left:"0px"},"slow")
		):(
			$(this).addClass("close"),
			$(".slider").animate({left:"-190px"},"slow")
		)
	});
	var m=$(window).scrollTop();
	m>=969?$(".slider").show():$(".slider").hide(),
	$(window).on("scroll",function(){
		var e=$(this).scrollTop();
		e>=969?$(".slider").show():$(".slider").hide()
	})
});
