nie.define("list",function(){
	function n(){
		var n=location.href.split("/news")[1];
		n=n&&n.split("/")[1];
		/*for(var e=0,a=0,r=i.length;r>a;a++)if(i.eq(a).find("a").attr("href").indexOf(n)>=0){e=a;break}
			i.removeClass("current").eq(e).addClass("current")*/
	}
	function e(n){
		$.ajax({
			url:n,
			dataType:"html",
			type:"get",
			success:function(n){
				var e=$(n);
				// $("#news-list").append(e.find("#news-list").html()),
				$("#news-box").find(".more").text("\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a")
			}
		})
	}
	if(!$("body").hasClass("list"))return{};
	var a=1,r=parseInt($("#total-pages").val(),10),t=$("#next-page-url").val()||"",s=t.replace("2.html",""),i=$(".news-nav li");
	n(),r>a&&$("#news-box").append('<a href="#" class="more">\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a</a>').on("click",".more",function(){
		return a>=r?void $(this).remove():($(this).text("\u6b63\u5728\u8bfb\u53d6..."),++a===r&&$(this).remove(),void e(s+a+".html"))
	})
}),
nie.define("banner",function(){
	function n(n,e,a){
		function r(n,e,a){
			var r=a?n:-f*b+n,t=e?"300ms":"0ms";
			s.css3({transform:"translate3d("+r+"px,0,0)","transition-duration":t})
		}
		var t=$("#"+n),s=t.find("ul"),i=t.find("li"),l=i.length,o=3e3;if(2>l)return{};
		var u=[];u.length=l+1;
		var c=['<ul class="index" id="'+e+'">',u.join('<li><a href="#"></a></li>'),"</ul>"].join(""),d=i.first(),h=i.last();
		d.clone().insertAfter(h),h.clone().addClass("fill-in-first").insertBefore(d);
		var f=0,v=null,b=i.eq(0).width();
		t.on("click","#"+e+" li",function(){
			clearInterval(g);
			var n=$(this);
			if(!n.hasClass("current")){
				var e=n.index();
				n.addClass("current").siblings().removeClass("current"),i.eq(e).addClass("current").siblings().removeClass("current"),r(-e*b,!0,!0),f=e
			}
		}).append(c).find("li:first-child").addClass("current");
		var g=setInterval(function(){
			f>=l-1?(f=0,$("#"+e+" li").removeClass("current").eq(f).addClass("current"),
			i.eq(f).addClass("current").siblings().removeClass("current"),
			r(0,!0,!0)):(f++,$("#"+e+" li").removeClass("current").eq(f).addClass("current"),
			i.eq(f).addClass("current").siblings().removeClass("current"),r(-f*b,!0,!0))
		},o);
		$("#"+a).on("touchstart",function(n){
			clearInterval(g);
			var e=n.targetTouches[0];
			v={sx:e.pageX,sy:e.pageY}
		}).on("touchmove",function(n){
			var e=n.targetTouches[0];
			v.x=e.pageX,v.y=e.pageY;
			var a=v.x-v.sx,t=v.y-v.sy;
			Math.abs(a)>Math.abs(t)&&(r(a,!1,!1),Math.abs(a)>5&&n.preventDefault())
		}).on("touchend",function(){
			var n=v.x-v.sx;
			if(Math.abs(n)>b/5){
				var a=n>0?-1:1;
				r(-a*b,!0,!1),f+=a,(-1===f||f===l)&&s.onceTransitionEnd(function(){0===f?r(0,!1,!0):f===l-1&&r(0,!1,!1)}),
				f=(f+l)%l,$("#"+e+" li").eq(f).addClass("current").siblings().removeClass("current")
			}else r(0,!0,!1)},"false"),window.addEventListener("onorientationchange"in window?"orientationchange":"resize",function(){
				b=i.eq(0).width(),s.css3({transform:"translate3d("+-f*b+"px,0,0)","transition-duration":"0ms"}
			)},!1)}
			$("body").hasClass("list")&&(ADBase.config({
				pos:"qiannvyouhuntongmingshouyou-lunhuan-5096",callback:function(e,a){
					if(0==e)return!1;
					for(var r=a["qiannvyouhuntongmingshouyou-lunhuan-5096"],t="",s=0;s<r.length;s++){
						var i=r[s];
						t+='<li><a href="'+i.url+'" target="_blank" title="'+i.title+'"><img src="'+i.src+'" /></a></li>'
					}
					$("#banner").html(t),n("banner-box","index","banner")
				}
			}),ADBase.config({
				pos:"qiannvyouhuntongmingshouyouL10-lunhuan-822291",callback:function(e,a){
					if(0==e)return!1;
					for(var r=a["qiannvyouhuntongmingshouyouL10-lunhuan-822291"],t="",s=0;s<r.length;s++){
						var i=r[s];
						t+='<li><a href="'+i.url+'" target="_blank" title="'+i.title+'"><img src="'+i.src+'" /></a></li>'
					}
					$("#banner1").html(t),n("banner-box1","index1","banner1"),$("#banner-box1").hide()
				}
			})),$(".ban-btn").on("click",function(){
				var n=$(this);n.hasClass("cur")||($(".ban-btn").removeClass("cur"),n.addClass("cur"),n.hasClass("ban-btn1")?($("#banner-box1").hide(),$("#banner-box").show()):($("#banner-box").hide(),$("#banner-box1").show()))
			})
});