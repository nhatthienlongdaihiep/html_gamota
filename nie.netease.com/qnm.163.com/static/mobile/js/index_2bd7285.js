var mySwiper,mySwiper1;nie.define("index",function(){var e="",n=0,o=47;$common.trueload(function(){function i(){e=setInterval(function(){n===o&&(n=0),$(".frame-animation").css({"background-position":"0 "+-100/o*n+"%"}),n++},1e3/12)}function t(){clearInterval(e)}mySwiper=new Swiper(".swiper-out-container",{direction:"vertical",nextButton:".swiper-button-next",loop:!1,onInit:function(e){var n=1134*e.width/(750*e.height);if(n>1)var o="100%",t=Math.round(100*n).toString()+"%";else if(1>n)var t="100%",o=Math.round(100/n).toString()+"%";e.slides.each(function(e,n){$(n).css({"background-position":"50% 50%","background-size":o+" "+t})}),i()},onSlideChangeEnd:function(){}}),mySwiper1=new Swiper(".tese",{speed:500,nextButton:".tese .swiper-btn-next",prevButton:".tese .swiper-btn-prev",effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},loop:!0});var r=$(".player"),a=$(".myvideo");r.on("click",function(){$(".mask").show(),showPop("pop-video"),a[0].play(),t()}),$(".mask").on("click",function(){a[0].pause(),hidePop(),i()}),$("#js-huawei1, #js-huawei2").on("click",function(e){e.preventDefault();$(this);$common.isHuaWei()?($(".mask").show(),showPop("pop-huaweiTip"),setTimeout(function(){hidePop("#huawei-tip"),window.location.href="https://adl.netease.com/d/g/qnm/c/gw_m"},3e3)):window.location.href="https://adl.netease.com/d/g/qnm/c/gw_m"})})});