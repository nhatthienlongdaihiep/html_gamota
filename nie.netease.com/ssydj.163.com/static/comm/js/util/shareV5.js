nie.util.share_traceCome=nie.util.share_traceCome||!1,nie.util.share_css=nie.util.share_css||!1,function(e){nie.util.share=nie.util.share||function(){var t={data:{},args:{panelID:"NIE-share-panel",fat:"#NIE-share",product:nie.config.site,imgs:null,txt:null,type:1,traceType:null,imgSize:[100,100],defShow:[23,22,2,1,3],defShow2:[23,22,2,1,3],moreShow:[23,22,2,1,8,3,24,11,14],searchTips:"输入网站名或拼音缩写",sideBar_top:100,title:null,url:null,img:null,content:null,urlReg:new RegExp("([&?]nieShare=)(\\d+),([^,]+),(\\d+)")}},a=function(){var a={};return a._href="javascript:;",a.chkDefault=function(e,t){return"undefined"!=typeof e?e:t},a.loadImg=function(t){e(new Image).bind("readystatechange",function(){"complete"==this.readyState}).bind("abort",function(){}).attr("src",t)},a.chkDatas=function(e,a,n,i){var o=null!=t.args[e]?t.args[e]:n;return""==o?o:("url"==e&&24!=a&&(o=this.addUrlMark(o,a)),encodeURIComponent(o+("undefined"!=typeof i?i:"")))},a.combind=function(e){var t=[];for(var a in e)t.push(a+"="+e[a]);return t},a.track=function(e){var a=["product="+t.args.product,"id="+e,"type="+t.args.traceType];this.loadImg("http://click.ku.163.com/share.v2.gif?"+a.join("&"))},a.aObj=function(e){var t=document.createElement("div");return t.innerHTML='<a href="'+e.replace(/"/g,"%22")+'"/>',t.firstChild},a.addUrlMark=function(e,a){var n=e.match(t.args.urlReg);if(n)return e.replace(n[0],n[1]+[a,t.args.product,t.args.traceType].join(","));var i=this.aObj(e),o=i.search+(""==i.search?"?":"&")+"nieShare="+[a,t.args.product,t.args.traceType].join(","),r=/^\//.test(i.pathname)?i.pathname:"/"+i.pathname,s=80==i.port?i.hostname:i.host;return i.protocol+"//"+s+r+o+i.hash},a.jump=function(e){if(t.data[e]){var a=t.data[e],n=this.chkDatas("url",e,location.href),i=this.chkDatas("title",e,document.title),o=this.chkDatas("img",e,""),r=this.chkDatas("content",e,document.title),s=function(){var t=[650,500];return 22==e?t=[500,480]:23==e?t=[573,600]:24==e&&(t=[750,550]),t}(),c=this.combind({width:s[0],height:s[1],top:(screen.height-s[1])/4,left:(screen.width-s[0])/2,toolbar:"no",menubar:"no",scrollbars:"no",resizable:"yes",location:"no",status:"no"});for(var h in a.paramName){var u="";switch(parseInt(h)){case 1:u=n;break;case 2:u=5==e?i+n:i;break;case 3:u=o;break;case 4:u=r;break;case 5:u=encodeURIComponent(nie.util.siteName())}a.params[a.paramName[h]]=u}var l="http://"+a.file+"?"+this.combind(a.params).join("&");window.open(l,"_blank",c.join(",")),this.track(e)}},a.fontVal={1:"&#xe602;",2:"&#xe604;",3:"&#xe605;",8:"&#xe603;",11:"&#xe6f0;",14:"&#xe6ad;",22:"&#xe607;",23:"&#xe606;",24:"&#xe900;",more:"&#xe601;",qcode:"&#xe600;"},a}(),n={addBtn:function(n,i,o,r,s,c){var h="",u="",n=parseInt(n),l="分享到",d="",f="",p=0,m=20;if(5!=n&&15!=n&&16!=n&&17!=n&&18!=n&&10!=n&&9!=n&&19!=n&&20!=n&&21!=n&&7!=n&&4!=n){switch(a.chkDefault(c,t.args.type)){case 1:p=-(i-20+5*(n-1)+20*(n-1)),22==n?p=-325:23==n&&(p=-350);break;case 2:p=40*-(n-1)-80,22==n?p=-40:23==n&&(p=0),m=36;break;case 3:p=-(i-16+6*(n+1)+16*(n+1))}var g="background-position:"+o+"px "+p+"px";1==s?(h=t.data[n].name,u=l+h,f=g):0==s?(u=l+t.data[n].name,d=""):(h=s,f=g);var v={index:n,"class":"iconfont",style:"",href:a._href,title:u,target:"_self"};""==d?v.text=h:v.html=d;var w=e("<a>",v).addClass("NIE-share-btn"+n).appendTo(e("<li></li>").appendTo(r));return a.chkDefault(c,t.args.type)<=2&&0==s&&w.html(a.fontVal[n]),w.click(function(){a.jump(n)}),w}},addPanel:function(){var a=e("<div>",{id:t.args.panelID,html:"<h3>分享到...</h3><input type=text value='"+t.args.searchTips+"'/><div></div>"}).hide().appendTo(e(document.body));e("<button>").click(function(){a.hide()}).hover(function(){e(this).addClass("hover")},function(){e(this).removeClass("hover")}).appendTo(a);var n=a.find("div");for(var i in t.data)this.addBtn(i,12,5,n,!0,1);a.find("input").click(function(){var a=e(this),n=a.val();n==t.args.searchTips&&a.val("")}).keyup(function(){var a=e(this).val().toLowerCase();n.find("a").each(function(){var n=e(this),i=n.attr("index");-1!=t.data[i].name.toLowerCase().indexOf(a)||-1!=t.data[i].searchTxt.toLowerCase().indexOf(a)||-1!=t.data[i].searchTxt.replace(/[a-z]/g,"").toLowerCase().indexOf(a)?n.show():n.hide()})})},showPanel:function(){var a="#"+t.args.panelID,n=e(a),i=e(window);0==n.length&&this.addPanel(),n=e(a);var o=i.scrollTop()+(i.height()-n.height())/2;n.css({top:0>o?0:o,left:(i.width()-n.width())/2}).show().find("a").show()}},i=[[23,"微信二维码","YiXinQrCode","res.nie.netease.com/comm/js/nie/util/share/api/index.html",{1:"url",2:"title"}],[22,"易信","YiXin","open.yixin.im/share",{1:"url",2:"desc",3:"pic",4:"title"},{appkey:"yx3ae08a776bf04178a583cb745fb6aa0c",type:"webpage"}],[1,"QQ空间","QQKongJian","sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",{1:"url",2:"title",3:"pics",4:"desc"}],[2,"新浪微博","XinLangWeiBo","v.t.sina.com.cn/share/share.php",{1:"url",2:"title",3:"pic"},{c:"nie",content:"gb2312",source:"nie"}],[3,"腾讯微博","TengXunWeiBo","v.t.qq.com/share/share.php",{1:"url",2:"title",3:"pic"}],[8,"人人网","RenRenWang","widget.renren.com/dialog/share",{1:"resourceUrl",2:"title",3:"pic",4:"description"}],[11,"豆瓣","DouBan","www.douban.com/recommend/",{1:"url",2:"title",3:"image"}],[14,"百度贴吧","BaiDuTieBa","tieba.baidu.com/i/app/open_share_api",{1:"link"}],[24,"QQ好友","TXQQ","connect.qq.com/widget/shareqq/index.html",{1:"url",2:"title",3:"pics",4:"summary"}]],o=function(){function i(i){var o=e(t.args.fat);if(!o.length||o.length<=0)return!1;var r=e("<div>",{"class":"NIE-share NIE-share"+i,html:"<span class='NIE-share-txt'>分享到:</span>"}).appendTo(o),s=e("<ul>",{"class":"NIE-share-iconBtn"}).appendTo(r);e("<div>",{"class":"NIE-share-clearfix"}).appendTo(r),e("<div>",{"class":"NIE-share-clearfix"}).appendTo(o),e.each(t.args.defShow,function(){n.addBtn(this,20,0,s,!1)});var c,h=e("<li>").appendTo(s),u=e("<a>",{"class":"iconfont morebtn",href:"javascript:void(0)",html:a.fontVal.more}).appendTo(h),l=!0,d=e("<ul>").appendTo(e("<div>",{"class":"NIE-share-more"}).appendTo(r)),f=[];e.each(t.args.moreShow,function(e,a){for(var n=0;n<t.args.defShow.length&&a!=t.args.defShow[n];n++);n>=t.args.defShow.length&&f.push(a)}),e.each(f,function(){n.addBtn(this,20,5,d,!0,1)}),f.length<1&&u.hide(),u.mouseenter(function(){clearTimeout(c),l=!0;var t=e(window),a=d.outerHeight(),n=d.outerWidth(),i=r.offset(),o=e(this).width()>30?2:1;d.css({top:t.scrollTop()+t.height()<i.top+a+20?-a-12:-10*o,left:t.scrollLeft()+t.width()<i.left+r.width()+n?-n+42:-10*o}).fadeIn("fast")}).mouseleave(function(){clearTimeout(c),l=!1,c=setTimeout(function(){l||d.fadeOut("fast")},500)}),d.mouseenter(function(){clearTimeout(c),l=!0}).mouseleave(function(){clearTimeout(c),l=!1,c=setTimeout(function(){l||d.fadeOut("fast")},500)})}function o(){var a,i="NIE-share-sideBar",o=!1,r=!1,s=500,c=e("<div>",{id:i,html:"<div class='sideBarShareBox'><b></b><div><button></button><h3>分享到...</h3><ul></ul></div></div>",mouseleave:function(){o&&(clearTimeout(a),r=!1,a=setTimeout(function(){r||(c.animate({width:30},s),u.animate({right:-120},s,function(){o=!1}))},2*s))},mouseenter:function(){o&&(clearTimeout(a),r=!0)}}).appendTo(e(document.body)),h=c.find("ul"),u=c.find(".sideBarShareBox"),l=function(){c.css("top",e(window).scrollTop()+t.args.sideBar_top)};e.each(t.args.moreShow,function(){n.addBtn(this,20,5,h,!0,1)}),c.find("b").hover(function(){o||(o=!0,c.animate({width:150},s),u.animate({right:0},s))}),c.find("button").click(function(){u.animate({right:-150},s,function(){c.remove()})}).hover(function(){e(this).addClass("hover")},function(){e(this).removeClass("hover")}),e.browser.msie&&e.browser.msie<=6?(e(window).scroll(l),l()):c.css({position:"fixed",top:t.args.sideBar_top})}function r(){var n,i="NIE-share-img",o=e("#"+i),r=o.length>0,s=500,c=e(t.args.imgs),u=!1,l=function(e){return t.args.imgSize[0]<e.outerWidth()&&t.args.imgSize[1]<e.outerHeight()};c.hover(function(){var i=e(this),r=i.outerHeight(),s=i.offset(),c=10,h=e(window),d=o.outerHeight(),f=Math.max(s.top,this.offsetTop);l(i)&&(clearTimeout(n),u=!0,t.args.img=a.aObj(i.attr("src")).href,o.find(".NIE-share-more>div").hide(),o.css({top:f+r>h.scrollTop()+h.height()?f+c:f+r-c-d,left:s.left+c}).show())},function(){var t=e(this);l(t)&&(u=!1,clearTimeout(n),n=setTimeout(function(){u||o.hide()},s))}),t.args.defShow=t.args.defShow2,r||(o=e("<div>",{id:i,mouseenter:function(){clearTimeout(n),u=!0},mouseleave:function(){u=!1,clearTimeout(n),n=setTimeout(function(){u||o.hide()},s)}}).appendTo(e(document.body)),t.args.type=1,t.args.fat=o,h())}function s(){var a="NIE-share-txt",n=e("#"+a),i=n.length>0,o=!1,r=e(t.args.txt),s=function(){var t="";return window.getSelection?t=window.getSelection():document.getSelection?t=document.getSelection():document.selection&&(t=document.selection.createRange().text),e.trim(t)};t.args.defShow=t.args.defShow2,i||(n=e("<div>",{id:a}).appendTo(e(document.body)),r.mouseup(function(a){setTimeout(function(){var i=e.trim(s());o&&""!=i?(t.args.content=t.args.title=i,n.css({top:a.pageY+15,left:a.pageX-50}).show()):n.hide()},100)}).mouseleave(function(){o=!1}).mouseenter(function(){o=!0}),e(document.body).mouseup(function(){o||""!=e.trim(s())||n.hide()}),t.args.type=1,t.args.fat=n,h())}function c(){var i=e(t.args.fat);if(!i.length||i.length<=0)return!1;var o=e("<div>",{"class":"NIE-share NIE-share6",html:"<span class='NIE-share-txt'>分享到:</span>"}).appendTo(i),r=e("<ul>",{"class":"NIE-share-iconBtn"}).appendTo(o);e("<div>",{"class":"NIE-share-clearfix"}).appendTo(o),e("<div>",{"class":"NIE-share-clearfix"}).appendTo(i),e.each(t.args.defShow,function(){var e=n.addBtn(this,20,0,r,!1,1);if(e){var a=e.text();e.html('<span class="iconfont">'+a+"</span><em>"+t.data[this].name.replace("二维码","")+"</em>")}});var s,c=e("<li>").appendTo(r),h=e("<a>",{"class":"iconfont morebtn",href:"javascript:void(0)",html:'<span class="iconfont">'+a.fontVal.more+"</span><em>更多</em>"}).appendTo(c),u=!0,l=e("<ul>").appendTo(e("<div>",{"class":"NIE-share-more"}).appendTo(o)),d=[];e.each(t.args.moreShow,function(e,a){for(var n=0;n<t.args.defShow.length&&a!=t.args.defShow[n];n++);n>=t.args.defShow.length&&d.push(a)}),e.each(d,function(){n.addBtn(this,20,5,l,!0,1)}),d.length<1&&h.hide(),h.mouseenter(function(){clearTimeout(s),u=!0;var t=e(window),a=l.outerHeight(),n=l.outerWidth(),i=o.offset(),r=e(this).width()>30?2:1;l.css({top:t.scrollTop()+t.height()<i.top+a+20?-a-12:-10*r,left:t.scrollLeft()+t.width()<i.left+o.width()+n?-n+42:-10*r}).fadeIn("fast")}).mouseleave(function(){clearTimeout(s),u=!1,s=setTimeout(function(){u||l.fadeOut("fast")},500)}),l.mouseenter(function(){clearTimeout(s),u=!0}).mouseleave(function(){clearTimeout(s),u=!1,s=setTimeout(function(){u||l.fadeOut("fast")},500)})}function h(){var e=t.args.type;null==t.args.traceType&&(t.args.traceType=e),1==e||2==e?i(e):3==e?o():4==e&&t.args.imgs?r():5==e&&t.args.txt?s():6==e&&c()}return h}(),r=function(){if(""!=location.search&&!nie.util.share_traceCome){var n=location.search.match(t.args.urlReg);n&&(nie.util.share_traceCome=!0,a.loadImg("http://click.ku.163.com/share.income.gif?"+["id="+n[2],"product="+n[3],"type="+n[4],"_r="+(new Date).getMilliseconds()].join("&")))}var r=arguments;if(r.length>0&&r[0].length>0){var s=r[0][0];for(var c in s)"undefined"!=typeof s[c]&&(t.args[c]=s[c])}for(var c=0,h=i.length;h>c;c++){var u=i[c];t.data[u[0]]={name:u[1],searchTxt:u[2],file:u[3],paramName:u[4],params:a.chkDefault(u[5],{})}}nie.util.share_css||(e(t.args.fat).hide(),e.include("static/comm/js/util/share/css/share.v5.css",function(){e(t.args.fat).show()}),nie.util.share_css=!0),o()};r(arguments);var s={modify:function(e){for(var a in e)t.args[a]=e[a]}};return s}}(jQuery);
