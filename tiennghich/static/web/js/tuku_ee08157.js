$(function(){
	function t(t){
		$.ajax({
			url:tuku_url+"md/public/photo_channels/"+t+"/albums/editor_pick",
			type:"get",dataType:"jsonp",data:{page_size:8},
			success:function(a){
				var e=baidu.template("tk"+t,a);
				$(".tk_content"+t).addClass("lock"),$(".tk_content"+t).empty().append(e)
			}
		}
	)}
	var a=0;
	$(".tuku_nav a").click(function(){
		var e=$(this).parent().index();
		if($(this).hasClass("active"))return!1;
		$(".tuku_nav a").removeClass("active"),
		$(".tuku_nav li").eq(e).find("a").addClass("active"),
		$(".tk_wrap ul").hide().eq(e).fadeIn();
		var n=$(this).attr("data-id");
		2==n||$(".tk_content"+e).hasClass("lock")||t(n),a=e});
	var e=setInterval(function(){
		a+=1,4==a&&(a=0),
		$(".tuku_nav a").eq(a).click()},4e3);
		$(".tuku-wrap").hover(function(){
			clearInterval(e)
		},
		function(){
			e=setInterval(function(){
				a+=1,4==a&&(a=0),
				$(".tuku_nav a").eq(a).click()},4e3)}),
				$("body").delegate(".tk_content li","mouseover",function(){
					$(this).find(".card_border").addClass("animate"),
					$(this).find(".tuku_mask").stop(!0).delay(600).fadeIn(300)}),
				$("body").delegate(".tk_content li","mouseout",function(){
					$(this).find(".card_border").removeClass("animate"),$(this).find(".tuku_mask").stop(!0).fadeOut(300)}),t(0)
	});