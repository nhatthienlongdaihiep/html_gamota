function top_c(){
  var ico_list = [
    {name:"传奇盛世",href:"http://web.2144.cn/cqss",src:"http://static.2144.cn/web/theme/module/cqss/images/icon.png"},
    {name:"全民蓝月",href:"http://web.2144.cn/lycq",src:"http://static.2144.cn/web/theme/module/lycq/images/icon.png"},
    {name:"传奇霸业",href:"http://web.2144.cn/cqby",src:"http://static.2144.cn/web/theme/module/cqby/images/icon.png"},
    {name:"2144小游戏",href:"http://www.2144.cn",src:"http://static.2144.cn/web/theme/module/common/images/g5.png"}
  ];                             
  var icon_str = '';
  for(var i = 0;i<ico_list.length;i++){
    icon_str += '<a href="'+ico_list[i].href+'"><img src="'+ico_list[i].src+'" alt="'+ico_list[i].name+'">'+ico_list[i].name+'</a>';
  }

  var game_list = [
	{name:"全民蓝月",url:"http://web.2144.cn/lycq",has_color:1},
	{name:"传奇盛世",url:"http://web.2144.cn/cqss",has_color:1},
	{name:"传奇霸业",url:"http://web.2144.cn/cqby",has_color:1},
	{name:"九阴绝学",url:"http://web.2144.cn/jyjx",has_color:0},
	{name:"主宰西游",url:"http://web.2144.cn/zzxy",has_color:1},
	{name:"剑雨江湖",url:"http://web.2144.cn/jyjh",has_color:1},
	{name:"决战武林",url:"http://web.2144.cn/jzwl",has_color:0},
	{name:"武神赵子龙",url:"http://web.2144.cn/zzl",has_color:1},
	{name:"赤月传说2",url:"http://web.2144.cn/chiyue",has_color:1},
	{name:"热血战歌",url:"http://web.2144.cn/zhange",has_color:0},
	{name:"大战神",url:"http://web.2144.cn/dzs",has_color:0},
	{name:"风暴大陆",url:"http://web.2144.cn/fbdl",has_color:0},
	{name:"莽荒纪",url:"http://web.2144.cn/mhj",has_color:0},
	{name:"铁骑三国",url:"http://web.2144.cn/tqsg",has_color:0},
	{name:"我是大主宰",url:"http://web.2144.cn/dzz",has_color:0},
	{name:"诸神黄昏",url:"http://web.2144.cn/zshh",has_color:0},
	{name:"花千骨",url:"http://web.2144.cn/hqg",has_color:0},
	{name:"赤月传说",url:"http://web.2144.cn/cycs",has_color:0},
	{name:"烈焰",url:"http://web.2144.cn/ly",has_color:0},
	{name:"斩龙传奇",url:"http://web.2144.cn/zlcq",has_color:0},
	{name:"黑暗之光",url:"http://hazg.2144.cn/",has_color:0},
	{name:"大天使之剑",url:"http://web.2144.cn/dts",has_color:0},
	{name:"无上神兵",url:"http://web.2144.cn/shenbing",has_color:0}
  ];

  var game_str = '';
  for(var k = 0;k<game_list.length;k++){
    var color_str = '';
    if(game_list[k].has_color == 1){
      color_str = 'style="color:#f60"';
    }
    game_str += '<li><a href="'+game_list[k].url+'" '+color_str+'>'+game_list[k].name+'</a></li>';
  }

  document.write('<div class="headerbox"><div class="hd960"><h1 class="hd_logo"><a href="http://web.2144.cn/">2144网页游戏</a></h1><div class="tips188">本游戏仅适合18岁以上玩家</div><div class="hd_ico">'+icon_str+'</div><div class="hd_right"><div class="hd_a"><a href="http://web.2144.cn/orders/index" style="color:#f60">充值</a>|<a href="http://web.2144.cn/kefu/">客服</a>|<a href="http://web.2144.cn/site/parent">家长监护</a><a href="#this" id="all_a" target="_self">全部网页游戏</a></div><div class="hd_pop" id="hd_pop"><i class="hd_jiao"></i><ul class="pop_ul">'+game_str+'</ul></div></div></div></div>');
}

function bottom_c(){
  document.write('<div id="footer"><p><a href="http://www.2144.cn/about/about.htm" target="_blank">关于我们</a>|<a href="http://www.2144.cn/about/lianxi.htm" target="_blank">联系我们</a>|<a href="http://www.2144.cn/about/contact.htm" target="_blank">留言反馈</a>|<a href="http://www.2144.cn/about/cooperation.htm" target="_blank">游戏合作</a>|<a href="http://www.2144.cn/about/recommend.htm" target="_blank">推荐游戏</a>|<a href="http://www.2144.cn/about/declare.htm" target="_blank">版权声明</a>|<a href="http://www.2144.cn/about/duty.htm" target="_blank">使用协议</a>|<a href="http://www.2144.cn/about/job.htm" target="_blank">招聘信息</a>|<a href="http://www.2144.cn/about/help.htm" target="_blank">帮助中心</a>|<a href="http://web.2144.cn/site/parent" target="_blank">家长监护</a></p><span>Copyright</span>&nbsp;&nbsp;&nbsp;<span>&copy;'+ new Date().getFullYear() +'</span>&nbsp;&nbsp;&nbsp;<span>2144.CN</span>&nbsp;&nbsp;&nbsp;<a href="http://www.miitbeian.gov.cn" target="_blank"><span>沪ICP备13026985号</span></a>&nbsp;&nbsp;&nbsp;<span>ICP证：沪B2-20130112</span>&nbsp;&nbsp;&nbsp;<span>文网文号：沪网文【2016】3827-280号</span></div><script type="text/javascript" id="bdshare_js" data="type=slide&amp;img=0&amp;pos=right&amp;uid=696193"></script><script type="text/javascript" id="bdshell_js"></script><script type="text/javascript">document.getElementById("bdshell_js").src = " http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000);</script>');
}

function tbtop(){
  document.write('<div class="topbar"><div class="w960"><div class="tb_l"><h1 class="logocss"><a href="http://bar.2144.cn/">2144游戏社区</a><i></i></h1><span class="navtags"><a href="http://bar.2144.cn">首页</a><a href="http://bbs.web2144.cn/forum.php">游戏论坛</a><a href="http://bar.2144.cn/home/guessYouLike">猜你喜欢</a><a href="http://bar.2144.cn/darenSquare/">找朋友</a><a href="http://www.2144.cn/">小游戏</a></span></div><div class="tb_r"><div class="tb_r"><div class="othertools"><span id="sethome">设为首页</span>|<span id="setfav">加入收藏</span></div></div><div class="searchbg"><form target="_blank"name="flpage"id="flpage"action="http://search.2144.cn/index.php"method="post"><input type="submit"class="s_sub"value=""><span class="searchwrap"><input type="text"x-webkit-grammar="builtin:translate"onblur="if(this.value==\'\') this.value=this.title;"onfocus="if(this.value==this.title) this.value=\'\';"title="找游戏"value="找游戏"autocomplete="off"class="s_txt"name="keywords"></span><input type="hidden"name="action"value="search"><input type="hidden"name="area"value="default"><input type="hidden"name="sortby"value="related"></form></div></div></div></div>');
}