function isOwnEmpty(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function makeVote(t,e){vote_pid=t,vote_kid=e,$.ajax({type:"GET",url:vote_url_data,data:{pid:vote_pid,kid:vote_kid},dataType:"jsonp",callback:"cb",jsonpCallback:"cb",error:function(){window.console&&console.log("poll failed")},success:function(t){if(t._error)$(".vote-wrap").hide();else{var e=t.data.results;for(x in e)vote_poll_res[x]=e[x];pollBarShow(),vote_news_order=t.data.news_order,isOwnEmpty(vote_news_order)?$(".vote-wrap .art-desc,.vote-wrap .art-list").hide():($("#order_type").text('"'+$("#vote_1").text()+'"'),show_order_news("pts1"),$('a[id^="vote_"]').mouseover(function(){var t=$(this).attr("value"),e=$(this).text();$("#order_type").text('"'+e+'"'),show_order_news("pts"+t)}))}}}),$(".percent-inner").each(function(){$(this).append("<span class='add'>+1</span>")}),$('a[id^="vote_"]').click(function(){if(!voting){voting=!0;var t=parseInt($(this).attr("value"))-1;$.ajax({type:"GET",url:vote_url_submit,data:{pid:vote_pid,kid:vote_kid,pts:$(this).attr("value"),randstr:Math.random()},dataType:"jsonp",callback:"cb_post",jsonpCallback:"cb_post",success:function(e){e._error?alert(e.err_msg):(results=e.data,$(".vote-box .add").eq(t).delay(200).fadeIn(200).animate({bottom:40},{duration:200}).fadeOut(200,function(){var t;for(t in results)vote_poll_res[t]=results[t],pollBarShow()}).css("bottom",10)),voting=!1},error:function(){voting=!1,alert("\u7f51\u7edc\u6709\u70b9\u5c0f\u95ee\u9898\u54e6\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff5e")}})}})}function show_order_news(t){var e="",o=vote_news_order[t];if(o&&o.length>0){for(var r=0;r<o.length;r++){var a=o[r].show_time,s=r+1;e+='<li><span class="art-rank">'+s+'.</span><a href="'+o[r].url+'?fromTj" target="_blank">'+o[r].title+'</a><span class="art-date">('+a+')</span><span class="art-click-num"><i>'+o[r].counter+"</i>\u4eba\u56f4\u89c2</span></li>"}$(".art-list").html(e),$(".vote-wrap .art-desc")[0]&&($(".vote-wrap .art-desc")[0].style.cssText="display:block !important;"),$(".vote-wrap .art-list")[0]&&($(".vote-wrap .art-list")[0].style.cssText="display:block !important;"),$(".art-date,.art-click-num").hide()}else $(".vote-wrap .art-desc,.vote-wrap .art-list").hide()}function pollBarShow(){for(var t=1,e=1,o=1;vote_pts_lvl>=o;o++){var r="pts"+o;"undefined"!=typeof vote_poll_res[r]&&e<vote_poll_res[r]&&(e=vote_poll_res[r])}for(var t=vote_bar_height/e,o=1;vote_pts_lvl>=o;o++){var a="pts_"+o,r="pts"+o,s=$("#"+a),l=new Number(vote_poll_res[r]);s.css("undefined"!=typeof vote_poll_res[r]?{height:t*l/vote_bar_height*100*.8+"%"}:{height:"1%"})}for(var o=1;vote_pts_lvl>=o;o++){var a="pts_"+o,r="pts"+o,n=$("#"+a).find(".num"),i=$("#"+a);n.text("undefined"!=typeof vote_poll_res[r]?""+vote_poll_res[r]:"0"),n.css({bottom:i.height()>n.height()?(i.height()-n.height())/2:0,marginLeft:"-"+n.width()/2+"px"}),i.height()<n.height()?n.addClass("fan"):n.removeClass("fan")}}var vote_pts_lvl=6,vote_bar_height=160,vote_poll_res=[],vote_pid,vote_kid,vote_url_submit="https://poll.nie.netease.com/poll_submit_js",vote_url_data="https://poll.nie.netease.com/poll_js",vote_news_order={},voting=!1;