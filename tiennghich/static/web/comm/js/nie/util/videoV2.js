!function(e,t,a){function s(e,t){var a=(e[0]||0)-(t[0]||0);return a>0||!a&&e.length>0&&s(e.slice(1),t.slice(1))}function i(e){if(typeof e!=o)return e;var t=[],a="";for(var s in e)a=typeof e[s]==o?i(e[s]):[s,l?encodeURI(e[s]):e[s]].join("="),t.push(a);return t.join("&")}function n(t){var a="";for(var s in t)if(t[s])switch(s){case"type":a+=e.browser.msie?" classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'":s+"="+t[s];break;case"data":e.browser.msie||(a+=" "+s+'="'+t[s]+'"');break;default:a+=" "+s+'="'+t[s]+'"'}return a}function r(e){var t=[];for(var a in e)t.push(['<param name="',a,'" value="',i(e[a]),'" />'].join(""));return t.join("")}var o="object",l=!0,c='<div><h4>\u9875\u9762\u9700\u8981\u65b0\u7248Adobe Flash Player.</h4><p><a href="http://www.adobe.com/go/getflashplayer" target="_blank"><img width="112" height="33" alt="\u83b7\u53d6\u65b0\u7248Flash" src="https://nie.res.netease.com/comm/js/util/swfobject/get_flash_player.gif"></a></p></div>';try{var h=a.description||function(){return new a("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}()}catch(f){h="Unavailable"}var d=h.match(/\d+/g)||[0];e[t]={available:d[0]>0,activeX:a&&!a.name,version:{original:h,array:d,string:d.join("."),major:parseInt(d[0],10)||0,minor:parseInt(d[1],10)||0,release:parseInt(d[2],10)||0},hasVersion:function(e){var t=/string|number/.test(typeof e)?e.toString().split("."):/object/.test(typeof e)?[e.major,e.minor]:e||[0,0];return s(d,t)},encodeParams:!0,expressInstall:"https://nie.res.netease.com/comm/js/util/expressInstall.swf",expressInstallIsActive:!1,create:function(e){var t,a=this;if("undefined"!=typeof e.noFlashTips?(t=e.noFlashTips,delete e.noFlashTips):t=c,!e.swf||a.expressInstallIsActive)return t;if(!a.hasVersion(e.hasVersion||1)){if(a.expressInstallIsActive=!0,"function"==typeof e.hasVersionFail&&!e.hasVersionFail.apply(e))return t;e={swf:e.expressInstall||a.expressInstall,height:137,width:214,quality:"high",flashvars:{MMredirectURL:location.href,MMplayerType:a.activeX?"ActiveX":"PlugIn",MMdoctitle:document.title.slice(0,47)+" - Flash Player Installation"}}}return attrs={data:e.swf,type:"application/x-shockwave-flash",id:e.id||"flash_"+Math.floor(999999999*Math.random()),width:e.width||320,height:e.height||180,style:e.style||""},l="undefined"!=typeof e.useEncode?e.useEncode:a.encodeParams,e.movie=e.swf,e.wmode=e.wmode||"opaque",delete e.fallback,delete e.hasVersion,delete e.hasVersionFail,delete e.height,delete e.id,delete e.swf,delete e.useEncode,delete e.width,"<object "+n(attrs)+">"+r(e)+t+"</object>"}},e.fn[t]=function(a){var s=this.find(o).andSelf().filter(o);return/string|object/.test(typeof a)&&this.each(function(){var s,i=e(this);a=typeof a==o?a:{swf:a},a.fallback=this,s=e[t].create(a),i.empty().html(s)}),"function"==typeof a&&s.each(function(){var s=this,i="jsInteractionTimeoutMs";s[i]=s[i]||0,s[i]<660&&(s.clientWidth||s.clientHeight?a.call(s):setTimeout(function(){e(s)[t](a)},s[i]+66))}),s}}(jQuery,"flash",navigator.plugins["Shockwave Flash"]||window.ActiveXObject);
;!function(e){return nie.util.video?!1:(window.console=window.console||{log:function(){}},void(nie.util.video=function(){function t(){var e=navigator.userAgent;l=/i(Phone|Pad)/i.test(e),r=/Android/i.test(e),a=l||r}function i(){if(document.createElement("video").canPlayType){var e=document.createElement("video");return oggtest=e.canPlayType("video/ogg; codecs=theora, vorbis"),oggtest?"probably"==oggtest?!0:!1:(h264test=e.canPlayType("video/mp4; codecs=avc1.42e01e, mp4a.40.2"),h264test&&"probably"==h264test?!0:!1)}return!1}function o(){t(),s=i()}var n=e.flash.available,s=!1,l=!1,r=!1,a=!1,h=0,d='<div><h4>\u9875\u9762\u9700\u8981\u65b0\u7248Adobe Flash Player.</h4><p><a href="http://www.adobe.com/go/getflashplayer" target="_blank"><img width="112" height="33" alt="\u83b7\u53d6\u65b0\u7248Flash" src="http://res.nie.netease.com/comm/js/util/swfobject/get_flash_player.gif"></a></p></div>',c="https://nie.res.netease.com/comm/images/check_net.jpg",p=102,u=function(t){var i={width:"100%",height:"100%",wmode:"direct",bgcolor:"#000000",movieUrl:null,HDmovieUrl:null,SHDmovieUrl:null,vtype:null,hideCtrlBar:null,videoWidth:null,videoHeight:null,volume:.8,autoPlay:!1,startImg:null,loopTimes:0,maskImg:null,bufferTime:5,videoIndex:h,playBtnArea:null,allowFullScreen:!0};this.fat=e(t.fat),t.fat="",e.extend(i,t),this.video=null,this.speed=0,this.init(i)};return u.prototype={init:function(t){var i=this;if(!a&&!n&&!s)return this.fat.html(d),!1;if(!a){if(this.speed<=0&&!t.vtype)return this.checkNetWork(function(){i.init(t)}),!1;t.vtype||(t.vtype=this.speed>=800?"shd":this.speed>=300?"hd":""),"shd"==t.vtype||"hd"==t.vtype?(t.HDmovieUrl||"hd"!=t.vtype||(t.vtype=""),t.SHDmovieUrl||"shd"!=t.vtype||(t.vtype="")):t.vtype=""}if(a||s&&!n){var o={shd:t.SHDmovieUrl,hd:t.HDmovieUrl},l=e("<video>",{controls:!0,poster:t.startImg,src:o[t.vtype]||t.movieUrl,loop:0!=t.loopTimes}).attr({width:a?"100%":t.width,height:a?"100%":t.height}).css("background-color","black");t.autoPlay&&l.attr("autoplay","autoplay"),r&&l.click(function(){this.play()}),e("<source>",{src:o[t.vtype]||t.movieUrl,type:"video/mp4"}).appendTo(l);var h=e("<div>",{style:"position:relative;left:0;top:0;display:inline-block;width:"+(a?"100%":t.width+"px")+";height:"+(a?"100%":t.height+"px")});h.append(l),this.fat.empty().append(h),this.video=l[0],a||this.videoProcess(t)}else this.fat.flash({width:t.width,height:t.height,swf:"https://nie.res.netease.com/comm/js/nie/util/video/img/player.swf?v=20161207",allowFullScreen:t.allowFullScreen,allowscriptaccess:"always",wmode:t.wmode,bgcolor:t.bgcolor,hasVersion:10.2,flashvars:t})},videoProcess:function(t){for(var i=this,o=e("<a>",{href:"javascript:void(0)",style:"position:absolute;width:30px;height:30px;border:1px solid white;border-radius:15px;font-size:16px;color:white;line-height:30px;text-align:center;top:50%;right:10px;text-decoration:none;"}),n=e("<ul>",{style:"list-style:none;position:absolute;width:126px;height:32px;top:50%;right:10px;margin:0;display:none;"}),s=["\u6807","\u9ad8","\u8d85"],l={"\u6807":t.movieUrl,"\u9ad8":t.HDmovieUrl,"\u8d85":t.SHDmovieUrl},r=0;3>r;r++){var a=e("<li>",{style:"float:left;width:30px;height:30px;border:1px solid white;border-radius:15px;font-size:16px;color:white;line-height:30px;text-align:center;margin-left:10px;cursor:pointer;",html:s[r]});l[s[r]]||a.css("border-color","#aaa").css("color","#aaa"),n.append(a)}o.html("shd"==t.vtype?"\u8d85":"hd"==t.vtype?"\u9ad8":"\u6807"),o.click(function(){e(this).hide(),e(this).siblings().show()}),n.click(function(t){var o=t.target;return l[o.innerHTML]?(e(this).hide(),e(this).siblings().html(o.innerHTML).show(),void i.change(l[o.innerHTML])):!1}),e(this.video.parentNode).mouseenter(function(){o.show(100)}).mouseleave(function(){n.hide(100),o.hide(100)}),this.fat.find("div").append(o[0]),this.fat.find("div").append(n[0])},checkNetWork:function(t){var i=e.cookie("nie_video_speed");if(i)return this.speed=parseInt(i,10),t&&t(),!1;var o=this,n=new Date,s=null,l=new Image;l.onload=function(){var i=new Date-n;o.speed=(p/(i/1e3)).toFixed(1),e.cookie("nie_video_speed",o.speed,{expires:1,path:"/",domain:"163.com"}),clearTimeout(s),s=0,l.onload=null,l.onerror=null,t&&t()},l.onerror=function(){o.speed=0,clearTimeout(s),s=0,l.onload=null,l.onerror=null,t&&t()},s=setTimeout(function(){return s?(l.onload=null,l.onerror=null,o.speed=50,void(t&&t())):!1},1e3),l.src=c+"?"+Math.random()},destroy:function(){this.stop(),this.fat.empty()},change:function(e){this.video?this.video.src=e:this.fat.flash(function(){try{this.change(e)}catch(t){console.log(t.message)}})},stop:function(){this.video?(this.video.pause(),e.browser.mozilla?this.video.mozSrcObject=null:this.video.src=e.browser.opera?null:e.browser.webkit?"":""):this.fat.flash(function(){try{this.stopVideo()}catch(e){console.log(e.message)}})},pause:function(){this.video?this.video.pause():this.fat.flash(function(){try{this.pauseVideo()}catch(e){console.log(e.message)}})},play:function(){this.video?this.video.play():this.fat.flash(function(){try{this.playVideo()}catch(e){console.log(e.message)}})}},o(),function(e){return new u(e)}}()))}(window.jQuery||window.Zepto);