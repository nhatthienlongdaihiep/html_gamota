function showPop(e)
{
	var n = $("." + e);
	n.show();
	var t = n.height() / 2;
	$(".mask").show(), n.css("margin-top", -t).css("opacity", "1")
}

function hidePop()
{
	$(".mask").hide(), $(".modal").hide().css("opacity", "0")
}
window.$common = {
	initScreen: function()
	{
		/iphone|ios|android|mobile/i.test(navigator.userAgent.toLowerCase()) || $("body").css("width", "675px"), $("html").css("font-size", $("body").width() / 750 * 625 + "%"), /android/i.test(navigator.userAgent.toLowerCase()) && $("body").css("height", $(window).height())
	},
	orientation: function()
	{
		var e = $("#forhorview");
		return $(window).bind("orientationchange", function()
		{
			return 0 == window.orientation || 180 == window.orientation ? (e.hide(), location.reload(), !1) : 90 == window.orientation || -90 == window.orientation ? (e.show(), !1) : void 0
		}), 90 == window.orientation || -90 == window.orientation ? (e.show(), !1) : void 0
	},
	trueload: function(e)
	{
		var n = ["./static/mobile/images/award-1_8b4cc8d.png", "./static/mobile/images/bg1_cd6c929.jpg", "./static/mobile/images/bg2-inner_6f947f5.png", "./static/mobile/images/bg2_92dcab5.jpg", "./static/mobile/images/bg3_e9671bc.jpg", "./static/mobile/images/bottom_854dc60.png", "./static/mobile/images/bottom_1_9d7894f.png", "./static/mobile/images/btn-dl_cc3068b.png", "./static/mobile/images/btn-go_d7b68a3.png", "./static/mobile/images/btn-pl_8e0f76d.png", "./static/mobile/images/btn-pl_outline_ed43266.png", "./static/mobile/images/btn-player1_75fed24.png", "./static/mobile/images/download-slogan_1376454.png", "./static/mobile/images/go-gw_ee7539d.png", "./static/mobile/images/huawei-tip_270be4a.png", "./static/mobile/images/icon-down3_6495476.png", "./static/mobile/images/icon-left_6b06114.png", "./static/mobile/images/icon-right_0045867.png", "./static/mobile/images/index-nav_f711a5e.png", "./static/mobile/images/logo_f5a394f.png", "./static/mobile/images/logo1_674855a.png", "./static/mobile/images/sale1_be2f836.jpg", "./static/mobile/images/sale2_068d3d7.jpg", "./static/mobile/images/sale3_ee9f14d.jpg", "./static/mobile/images/sale4_93a2af0.jpg", "./static/mobile/images/share_7b31cdf.jpg", "./static/mobile/images/share_b304251.png", "./static/mobile/images/sign_d776211.png", "./static/mobile/images/slogan_beb8f82.png", "./static/mobile/images/sprite2_eced73e.png", "./static/mobile/images/sprites_d1ac828.png", "./static/mobile/images/title_1f0d806.png"];
		loader.show(function()
		{
			setTimeout(function()
			{
				$common.initScreen(), e && e()
			}, 200), $common.orientation(), $(".index").css("opacity", "1")
		}, n)
	},
	isIOS: function()
	{
		var e = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"];
		if (navigator.platform)
			for (; e.length;)
				if (navigator.platform === e.pop()) return !0;
		return !1
	},
	isQQbrowser: function()
	{
		return navigator.userAgent.toLowerCase().indexOf("mqqbrowser") > -1 && -1 == navigator.userAgent.toLowerCase().indexOf("micromessenger") ? !0 : !1
	},
	isHuaWei: function()
	{
		return /huawei|honor|hdh60/.test(navigator.userAgent.toLowerCase())
	}
}, nie.define("common", function() {});
var shareTitle = $("#share_title").html(),
	shareDesc = $("#share_desc").html(),
	shareUrl = $("#share_url").html(),
	sharePic = $("#share_pic").data("src"),
	href = window.location.href;
wx.config(wx_conf), wx.ready(function()
{
	wx.onMenuShareTimeline(
	{
		title: shareDesc,
		link: shareUrl,
		imgUrl: sharePic,
		success: function() {},
		cancel: function() {}
	}), wx.onMenuShareAppMessage(
	{
		title: shareTitle,
		desc: shareDesc,
		link: shareUrl,
		imgUrl: sharePic,
		success: function() {},
		cancel: function() {}
	})
}), nie.define("modal", function()
{
	$(".pop-btn").on("click", function()
	{
		location.href = $(this).hasClass("li4") || $(this).hasClass("li3") ? location.protocol + "//qnm.163.com/m/huiliu/" : location.protocol + "//qnm.163.com/m/xfl/"
	}), $(".pop-dl-btn,.td").on("click", function()
	{
		location.href = $("#js_android_down").attr("href")
	}), $(".close").on("click", function()
	{
		hidePop()
	})
});