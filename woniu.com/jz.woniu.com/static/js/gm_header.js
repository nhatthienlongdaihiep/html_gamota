
/*
  <script id="wn-gamehead" register="register.html" login="false" src="http://www.woniu.com/include/gw_header.js?v=4.0.1"></script>
  属性 id 必选项，的值为变量 scriptId, 默认为：'wn-gamehead'
  属性 register 可选项，为注册的链接地址（绝对路径）。值为 'false'或不存在时不显示。
  属性 login 可选项，为登录的链接地址（绝对路径）。值为 'false'或不存在时不显示。
  样式文件地址：
  gameheadCssHref 中定义设置
  该文件使用范围：蜗牛子游戏频道

*/
(function(win){"use strict";var document=win.document;var fns=[];var args=[];var isReady=false;var errorHandler=null;var call=function(fn){try{fn.apply(this,args)}catch(e){if(errorHandler!==null){errorHandler.call(this,e)}}};var run=function(){var x;isReady=true;for(x=0;x<fns.length;x=x+1){call(fns[x])}fns=[]};var init=function(){if(win.addEventListener){document.addEventListener("DOMContentLoaded",function(){run()},false)}else{var poll=function(){if(!document.uniqueID&&document.expando){return}var tempNode=document.createElement("document:ready");try{tempNode.doScroll("left");run()}catch(e){win.setTimeout(poll,10)}};document.onreadystatechange=function(){if(document.readyState==="complete"){document.onreadystatechange=null;run()}};poll()}};var domReady=function(fn){return domReady.on(fn)};domReady.on=function(fn){if(isReady){call(fn)}else{fns[fns.length]=fn}return this};domReady.params=function(params){args=params;return this};domReady.error=function(fn){errorHandler=fn;return this};init();win.domReady=domReady})(window);(function(scriptId,styleVersion){


var wnGameHeadConfig = {
gameTopImg: "http://att1.niucdn.com/woniu.com/2017/0407/41be454d88cccfff7d2a443208701fa3a5d01725.jpeg",
gameShowImg: "http://att1.niucdn.com/woniu.com/2017/0407/9dcb8d37ed037846ced0e93c47062cd7ebde8c44.jpeg",
gameShowLink: "http://9yangqy.woniu.com/static/act/201704/ob/index.html"
};

// 二级菜单数据，由后端生成
var clubData = [
{
'title': '大型网游',
'list': [
{'text': '九阴真经', 'status':'', 'href': 'http://9yinbbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/41f23374735bf0515593ab5cb7bdab61cc2f53e6.png'}
,{'text': '方舟：生存进化', 'status':'', 'href': 'http://ark.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/1230/f7c987c1f8f5e35093c3f08946433f5c3088a1fd.jpeg'}
,{'text': '黑暗与光明', 'status':'', 'href': 'http://dnl.bbs.woniu.com','img': 'http://att1.niucdn.com/woniu.com/2016/0922/93c20bb674393b68b770d3f6aa90faf6e8658737.jpeg'}
,{'text': '九阳神功', 'status':'', 'href': 'http://9yang.bbs.woniu.com/forum.php','img': 'http://att1.niucdn.com/woniu.com/2015/1102/d746a6cd221256489dac3d76da07f8e8a3f2dc1a.png'}
,{'text': '黑金', 'status':'', 'href': 'http://hj.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/f44a07d9cde0efb7cb213d2a1eaa0f8e124778b3.png'}
,{'text': '音乐侠', 'status':'', 'href': 'http://mm.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/117ecc8afdb965b75806f0caab76a0d52721cb9d.png'}
,{'text': '航海世纪', 'status':'', 'href': 'http://club.woniu.com/thread.php?fid=183','img': 'http://att1.niucdn.com/woniu.com/2015/1102/bc46a494c2c829a72397ae6f761ebeb9ffdf1447.png'}
,{'text': '天子', 'status':'', 'href': 'http://club.woniu.com/thread.php?fid=393','img': 'http://att1.niucdn.com/woniu.com/2015/1102/af25e43998e033cb63f7286464362746cec97824.png'}
,{'text': '舞街区', 'status':'', 'href': 'http://5jq.bbs.woniu.com/forum.php','img': 'http://att1.niucdn.com/woniu.com/2015/1102/8182d0be8de8d7a58b98b95f6ca78b38dcffcbb1.png'}
,{'text': '机甲世纪怀旧版', 'status':'', 'href': 'http://club.woniu.com/thread.php?fid=704','img': 'http://att1.niucdn.com/woniu.com/2015/1102/328ad78f39b5a6b5561c586c45d8a1db5cf43dc4.png'}
]
},
{
'title': '手机游戏',
'list': [
{'text': '天堂2：血盟', 'status':'', 'href': 'http://tt2.bbs.woniu.com','img': 'http://att1.niucdn.com/woniu.com/2016/1012/f9949ee84f0da2fa0a7fec11ff3270c5d41696cb.jpeg'}
,{'text': '九阴真经3D', 'status':'', 'href': 'http://jy3d.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0819/9f8ac4dd6c73f3788ce4d5cc0af5b848c950f3c0.jpeg'}
,{'text': '九阴', 'status':'', 'href': 'http://9yinsy.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/1227/afaeb3fa2726e1936559211bb7180574b46b885f.jpeg'}
,{'text': '太极熊猫', 'status':'', 'href': 'http://panda.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/e282e5ec17a652e173384a262c94d2aed299c0c7.png'}
,{'text': '太极熊猫2', 'status':'', 'href': 'http://panda2.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/dd19958a2134f2f0d097e7c0e65a36b5783d4979.png'}
,{'text': '太极熊猫3：猎龙', 'status':'', 'href': 'http://panda3.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/1209/52704d5cc24811c42c24d02ec5e8eec5c60d3b73.jpeg'}
,{'text': '《黑暗与光明》手游', 'status':'', 'href': 'http://hgsy.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2017/0109/d3d7dcfb068e9955004123a46d923bc420a8abb3.jpeg'}
,{'text': '决战光明顶', 'status':'', 'href': 'http://jz.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0921/9da5cf2f66374a5e4911590a71bae16c04d050b5.jpeg'}
,{'text': '九阳神功起源', 'status':'', 'href': 'http://9yangqy.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/1228/0a7a1d16384bac99c9c895ae727461c86e3bea3b.jpeg'}
,{'text': '魔龙世界', 'status':'', 'href': 'http://ml.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/1208/96ded88e21b8dc58932668320fdca8813b6e04ba.png'}
,{'text': '九阳神功', 'status':'', 'href': 'http://9yangsy.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/b83b7f5b09bd76622e7ab289dc494432b3fdcbc4.png'}
,{'text': '樱花三国', 'status':'', 'href': 'http://yh.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/ab4702c0d043c3d41e5c5736ea9f192fafe05476.png'}
,{'text': '横行冒险王', 'status':'', 'href': 'http://ss.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/32ed29b86eb373cd5bf47a22cb8dc552fa6c29ad.png'}
,{'text': '关云长', 'status':'', 'href': 'http://gyc.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0628/8a854d547e9a125fd7541011617e841d870fbfe5.jpeg'}
,{'text': '天子', 'status':'', 'href': 'http://tzsy.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/ee57dfe51d8b9f73585c715dee4d5fee9f67617d.png'}
,{'text': '神龙部落2', 'status':'', 'href': 'http://dragon.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/647720f77a9cc5d8822f0a2baa5d21a6e885fffb.png'}
,{'text': '战塔英雄', 'status':'', 'href': 'http://zt.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/655e5cf1e4949dab9228230550857cddd023fac7.png'}
,{'text': '魔法呆呆碰', 'status':'', 'href': 'http://ddp.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/f3804b99cc730c705ad05e4909e8fc78ce1724c6.png'}
,{'text': '心之城堡', 'status':'', 'href': 'http://heart.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/12b421b694476928ceca70bd1a81bf094f116151.png'}
,{'text': '让麻将飞', 'status':'', 'href': 'http://mj.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/a5a59cab315f9e6f02a579c065b9ca6a18377c96.png'}
,{'text': '龙战', 'status':'', 'href': 'http://lz.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/2666a602855fe2441d72b2941950708a0450e058.png'}
,{'text': '仙之痕', 'status':'', 'href': 'http://xzh.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/13050d4b55aed9891466be00a60e22b54eafafef.png'}
,{'text': '英雄之城2', 'status':'', 'href': 'http://hero2.bbs.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/875b9b51c402f2d336b037c956c5b14b96595ba8.png'}
]
},
{
'title': '网页游戏',
'list': [
{'text': '大三国志', 'status':'', 'href': 'http://club.woniu.com/thread.php?fid=1045','img': 'http://att1.niucdn.com/woniu.com/2015/1102/cf96e8b081d8dac6e0eab0bfea992470130b46f0.png'}
,{'text': '帝国文明', 'status':'', 'href': 'http://club.woniu.com/thread.php?fid=679','img': 'http://att1.niucdn.com/woniu.com/2015/1102/ec2a47dc32a7755850759b2570818481a78e40c6.png'}
,{'text': '大武侠志', 'status':'', 'href': 'http://club.woniu.com/thread.php?fid=1033','img': 'http://att1.niucdn.com/woniu.com/2015/1102/6ee1885a3b4da8ac2bd18d3a734b2c8dd01be513.png'}
,{'text': 'X幻想', 'status':'', 'href': 'http://club.woniu.com/thread.php?fid=1016','img': 'http://att1.niucdn.com/woniu.com/2015/1102/eb03e31748501bed7043ca6b954dc63ea9db1bf1.png'}
,{'text': '英雄之城', 'status':'', 'href': 'http://club.woniu.com/thread.php?fid=524','img': 'http://att1.niucdn.com/woniu.com/2015/1102/d81772a740d6c61ac49cc3a7cb3c616972cb1cee.png'}
,{'text': '大航海志', 'status':'', 'href': 'http://club.woniu.com/thread.php?fid=1078','img': 'http://att1.niucdn.com/woniu.com/2015/1102/d7686a93cc940c7d1211c4127853d648ae714128.png'}
]
}
];
var supportData = [
{
'title': '账户安全',
'list': [
{'text': '修改密码', 'status':'', 'href': 'http://res.woniu.com/passport/pwd_change.html','img': ''}
,{'text': '修改邮箱', 'status':'', 'href': 'http://passport.woniu.com/EmailChangeApplyByMail.do?method=prepareOperationByEmail','img': ''}
,{'text': '资料补填', 'status':'', 'href': 'http://passport.woniu.com/PassportDetailPrepare.do?method=findUserInfo','img': ''}
,{'text': '防沉迷系统', 'status':'', 'href': 'http://passport.woniu.com/EpsPrepare.do?method=checkEpsStatus','img': ''}
,{'text': '密码找回', 'status':'', 'href': 'http://res.woniu.com/security/pwd_retrieval_email_apply.html','img': ''}
,{'text': '动态口令卡', 'status':'', 'href': 'https://sso.woniu.com/login?service=http%3A%2F%2Fsecurity.woniu.com%2Fcard','img': ''}
,{'text': '手机绑定', 'status':'', 'href': 'https://sso.woniu.com/login?service=http%3A%2F%2Fsecurity.woniu.com%2Fbindmobile%2Findex','img': ''}
,{'text': '帐号解锁', 'status':'', 'href': 'http://passport.woniu.com/lock','img': ''}
]
},
{
'title': '蜗牛商城',
'list': [
{'text': '九阴真经', 'status':'', 'href': 'http://mall.snail.com/shop/9yin/','img': ''}
,{'text': '航海世纪', 'status':'', 'href': 'http://shop.woniu.com/home/voyage/index.xml','img': ''}
,{'text': '机甲世纪', 'status':'', 'href': 'http://shop.woniu.com/home/aoa/index.xml','img': ''}
,{'text': '舞街区', 'status':'', 'href': 'http://shop.woniu.com/home/wujie/index.xml','img': ''}
]
},
{
'title': '客服中心',
'list': [
{'text': '常见问题', 'status':'', 'href': 'http://res.woniu.com/support_new/faq/passportQuestion.html','img': ''}
,{'text': '游戏自助服务', 'status':'', 'href': 'http://res.woniu.com/support_new/selfServiceCenter.html','img': ''}
,{'text': '在线提交问题', 'status':'', 'href': 'http://support.woniu.com/callcenter/problem/cz/write/problem','img': ''}
,{'text': '服务向导', 'status':'', 'href': 'http://res.woniu.com/support/support.html','img': ''}
]
},
{
'title': '账户充值',
'list': [
{'text': '游戏充值', 'status':'', 'href': 'http://imprest.woniu.com/imprest/imprest_main.html','img': ''}
,{'text': '账户余额', 'status':'', 'href': 'http://imprest.woniu.com/safe/AccountQuery.do?method=accountQueryPrepare','img': ''}
,{'text': '充值记录', 'status':'', 'href': 'http://imprest.woniu.com/safe/AccountQuery.do?method=imprestLogQueryPrepare','img': ''}
,{'text': '卡信息查询', 'status':'', 'href': 'https://sso.woniu.com/login?service=http%3A%2F%2Fimprest.woniu.com%2Fcards','img': ''}
]
}
];
var hotgameData = {
'title': '热门游戏',
'list': [
{'text': '九阴真经', 'status':'', 'href': 'http://9yin.woniu.com','img': 'http://att1.niucdn.com/woniu.com/2016/0824/6feecef56a5ebde9826d7b93ca2a28be85259f2a.png'}
,{'text': '天堂2手游', 'status':'', 'href': 'http://tt2.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0824/d47331e3a2c7208178ce8c763fae5403744b08a0.png'}
,{'text': '九阴真经3D', 'status':'', 'href': 'http://jy3d.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0824/2665b360251e60f6bcfe77bdb7bbec0d419641d9.png'}
,{'text': '九阴', 'status':'', 'href': 'http://9yinsy.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0922/a247a87d04476e5a9b40523b70bf34ef55948a79.png'}
,{'text': '太极熊猫', 'status':'', 'href': 'http://panda.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0824/735df87e09b63c363ff30d735ed68560514136db.png'}
,{'text': '九阴真经2', 'status':'', 'href': 'http://9yin2.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0824/b10809571f967a384516f9d6a5cbb7495b081387.png'}
]
};
var gameData = [
{
'title': '大型网游',
'list': [
{'text': '九阴真经', 'status':'H', 'href': 'http://9yin.woniu.com','img': 'http://att1.niucdn.com/woniu.com/2016/0531/2306793b5bf42ea620ac23720968e5a37a4aba99.jpeg'}
,{'text': '方舟生存进化', 'status':'N', 'href': 'http://ark.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/1212/3190259ac621cd0bcfb3aa427e77a8e3084149ba.jpeg'}
,{'text': '九阴真经2', 'status':'N', 'href': 'http://9yin2.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0801/dab179dce0495875316945ef5ffcc9a06d64f24d.jpeg'}
,{'text': '黑暗与光明', 'status':'N', 'href': 'http://dnl.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0907/8fd2474abaf89210e621f169fa083a2e69c3b454.png'}
,{'text': '方舟方块世界', 'status':'N', 'href': 'http://pixark.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2017/0118/eb4b699e934624eb1a4a98e6a901f9c5a19f9973.jpeg'}
,{'text': '九阳神功', 'status':'N', 'href': 'http://9yang.woniu.com/main.html','img': 'http://att1.niucdn.com/woniu.com/2015/0914/0d75bb00ca8fa7b08f8d2ca6aa39aa0b9ef018fb.jpeg'}
,{'text': '黑金', 'status':'o', 'href': 'http://hj.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/b1d6f9f63393840880467db3dc83420eaa6c15f1.jpeg'}
,{'text': '音乐侠', 'status':'o', 'href': 'http://mm.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/3cbee0563bb626e377cca8175a83bd91e692da4b.jpeg'}
,{'text': '天子', 'status':'o', 'href': 'http://tz.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0914/d4ef73d7059677ec70c00367451e5b93b37e6371.jpeg'}
,{'text': '舞街区', 'status':'o', 'href': 'http://5jq.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/339bf06ba80a65e94d4d8772f324f1d61e61357b.jpeg'}
,{'text': '航海世纪', 'status':'o', 'href': 'http://vc.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/e3d1658649a7de8f12271a4e5fffae112706d636.jpeg'}
,{'text': '机甲世纪', 'status':'o', 'href': 'http://aoa.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/2ac7c53f09c965b9b504af61729129351eee29df.jpeg'}
]
},
{
'title': '手机游戏',
'list': [
{'text': '天堂2：血盟', 'status':'H', 'href': 'http://tt2.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0328/8740e9eca60b7b5f26b12a343affda1b19baa3bb.jpeg'}
,{'text': '九阴真经3D', 'status':'N', 'href': 'http://jy3d.woniu.com','img': 'http://att1.niucdn.com/woniu.com/2016/0823/383ee5d886e31bf2f41b2329d11c37069eb7b196.png'}
,{'text': '九阴', 'status':'H', 'href': 'http://9yinsy.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0913/890c228f086de38426f74589411ecdcc735c8006.png'}
,{'text': '决战光明顶', 'status':'N', 'href': 'http://jz.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0513/11b3fc7cc3d424da1a5983521acea1e09512558b.jpeg'}
,{'text': '魔龙世界', 'status':'N', 'href': 'http://ml.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0728/ed6c90c18f8871bd0e910b4d261e42667daf8417.png'}
,{'text': '九阳神功起源', 'status':'N', 'href': 'http://9yangqy.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0728/b38db582169efbc523a019b04bc83b793fc73db5.png'}
,{'text': '天子', 'status':'H', 'href': 'http://tzsy.woniu.com','img': 'http://att1.niucdn.com/woniu.com/2015/1102/143669dbd9f04178ef3a4b7cdbc3a14f6ce6dedc.jpeg'}
,{'text': '九阳神功生死决', 'status':'N', 'href': 'http://9yangsy.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/360126b61647bee23245d63a7f23671a11c03822.jpeg'}
,{'text': '横行冒险王', 'status':'N', 'href': 'http://ss.woniu.com','img': 'http://att1.niucdn.com/woniu.com/2016/0323/41819fe2ac8982f61f52697db2ee0ebb69214a0b.jpeg'}
,{'text': '魔法呆呆碰', 'status':'o', 'href': 'http://ddp.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/58dd7f7d4181d5852aeb987663ee6172aa8f2729.jpeg'}
,{'text': '让麻将飞', 'status':'o', 'href': 'http://mj.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/c8555cf8cfc3bac9af62b5c83cc300a5640b5db5.jpeg'}
,{'text': '龙战', 'status':'o', 'href': 'http://lz.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0914/89a95dbdd1c9951fa4fc9860319fbb35bf180043.jpeg'}
,{'text': '音乐侠谭维维', 'status':'o', 'href': 'http://yyx.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/af9449fcd49596fe4a994eef3adbcef7736ebe09.jpeg'}
,{'text': 'cut-cut-cut'},
{'text': '太极熊猫3', 'status':'N', 'href': 'http://panda3.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/1209/c04f56e32fb58607dfef66cbfd597c6368a01a7b.jpeg'}
,{'text': '我的恐龙GO', 'status':'N', 'href': 'http://arkgo.woniu.com','img': 'http://att1.niucdn.com/woniu.com/2017/0119/c021aa4c41d787cb2e7842450860ee7130da8071.jpeg'}
,{'text': '黑暗与光明手游', 'status':'N', 'href': 'http://hgsy.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/1229/3a73eef7b23776e4b237a3f673570b5653fd758a.jpeg'}
,{'text': '太极熊猫2', 'status':'H', 'href': 'http://panda2.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0914/86840b1c16d318682633f0f6bb176d305bc6086e.jpeg'}
,{'text': '太极熊猫', 'status':'H', 'href': 'http://panda.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/1102/a7f19b61a582d170832a044d428c4eecc77efbab.jpeg'}
,{'text': '关云长', 'status':'H', 'href': 'http://gyc.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2016/0628/53c7fa155d30e4c6035632e2869c18296461811c.jpeg'}
,{'text': '樱花三国', 'status':'N', 'href': 'http://yh.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/d409d710c9a38224ee844f6c13a37b7bb0f51e84.jpeg'}
,{'text': '神龙部落2', 'status':'N', 'href': 'http://dragon.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/d17fe227a3a2ada4c9f819ec1078212ce72d8a11.jpeg'}
,{'text': '心之城堡', 'status':'N', 'href': 'http://heart.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/9c8a076ed870cebd9c2bd0ba4a39ec4a87bb0203.jpeg'}
,{'text': '战塔英雄', 'status':'o', 'href': 'http://zt.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/da751f88afe459ff5320e063f427a2ece32460eb.jpeg'}
,{'text': '仙之痕', 'status':'o', 'href': 'http://xzh.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/3e13afeef39a8fcf7e0529cc027ccd90fee8ee59.jpeg'}
,{'text': '英雄之城2', 'status':'o', 'href': 'http://hero2.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/d75cc1e5b84c893a5ccc2d9d58bbe358f7cbec51.jpeg'}
]
},
{
'title': '电视游戏',
'list': [
{'text': '九阳神功', 'status':'N', 'href': 'http://9yang.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0914/aa58a0628c3f582e15752e40ac070fd3fce20326.jpeg'}
,{'text': '九阴真经', 'status':'N', 'href': 'http://9yindp.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/78d658db03fe3c6a7cf3088fc8cc155ecebbb82c.jpeg'}
,{'text': '太极熊猫', 'status':'N', 'href': 'http://panda4k.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/0bcbed04341d3f156838fc91a4ba61c9d9c63d6b.jpeg'}
]
},
{
'title': '网页游戏',
'list': [
{'text': '帝国文明', 'status':'o', 'href': 'http://dg.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0914/79b1b5d89eef9b59f3baee6f81a2f752d6b86983.jpeg'}
,{'text': 'X幻想', 'status':'o', 'href': 'http://x.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0914/5ff066929471bf580c9c864f678ff9a0329a1745.jpeg'}
,{'text': '大武侠志', 'status':'o', 'href': 'http://dwx.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/d37a3303142d8bdb9b98986ffff133547d8380e1.jpeg'}
,{'text': '大三国志', 'status':'o', 'href': 'http://dsg.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/b9a73c1abe0d34f9c38d1c13722541f6a78f0be0.jpeg'}
,{'text': '大航海志', 'status':'o', 'href': 'http://dhh.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/84f573167766b1efe883e19d76946ae4632ba4f3.jpeg'}
,{'text': '英雄之城', 'status':'o', 'href': 'http://hero.woniu.com/','img': 'http://att1.niucdn.com/woniu.com/2015/0714/cc9348a22593fd8499a99db4fe5a200d118b37a1.jpeg'}
]
}
];
var gametoolData = {
'title': '游戏辅助工具',
'list': [
{'text': '九阴手游助手', 'status':'', 'href': 'https://itunes.apple.com/cn/app/jiu-yin-zhen-jing-shou-you/id965119172?mt=8','img': ''}
,{'text': '九阴助手', 'status':'', 'href': 'http://app.woniu.com/9yin_assistant/','img': ''}
,{'text': '蜗牛盾', 'status':'', 'href': 'http://app.woniu.com/niudun/','img': ''}
]
};
var mobileData = [
{
'title': '游戏手机',
'list': [
{'text': 'W3D', 'status':'', 'href': 'http://phone.snail.com/w3d/','img': ''}
,{'text': '78点P01', 'status':'', 'href': 'http://phone.snail.com/78P01/','img': ''}
]
},
{
'title': '免卡（SIM卡）',
'list': [
{'text': '50游戏免卡', 'status':'', 'href': 'http://mobile.snail.com/50/','img': ''}
,{'text': '30免卡', 'status':'', 'href': 'http://mobile.snail.com/30/','img': ''}
,{'text': '30如意免卡', 'status':'', 'href': 'http://mobile.snail.com/30B/','img': ''}
,{'text': '60免卡', 'status':'', 'href': 'http://mobile.snail.com/60/','img': ''}
]
},
{
'title': '游戏主机',
'list': [
{'text': 'OBOX', 'status':'', 'href': 'http://obox.snail.com/','img': ''}
]
},
{
'title': '游戏超市',
'list': [
{'text': '免商店', 'status':'', 'href': 'http://app.snail.com/','img': ''}
]
}
];
var doc=window.document;var util={loadCSS:function(href,before,media){var ss=doc.createElement("link");var ref;if(before){ref=before}else{var refs=(doc.body||doc.getElementsByTagName("head")[0]).childNodes;ref=refs[refs.length-1]}var sheets=doc.styleSheets;ss.rel="stylesheet";ss.href=href;ss.media="only x";ref.parentNode.insertBefore(ss,before?ref:ref.nextSibling);var onloadcssdefined=function(cb){var resolvedHref=ss.href;var i=sheets.length;while(i--){if(sheets[i].href===resolvedHref){return cb()}}setTimeout(function(){onloadcssdefined(cb)})};ss.onloadcssdefined=onloadcssdefined;onloadcssdefined(function(){ss.media=media||"all"});return ss},onloadCSS:function(ss,callback){ss.onload=function(){ss.onload=null;if(callback){callback.call(ss)}};if("isApplicationInstalled"in navigator&&"onloadcssdefined"in ss){ss.onloadcssdefined(callback)}},loadJS:function(src,cb){var ref=doc.getElementsByTagName("script")[0];var script=doc.createElement("script");if(script.readyState){script.onreadystatechange=function(){if(script.readyState=="loaded"||script.readyState=="complete"){script.onreadystatechange=null;cb&&cb()}}}else{script.onload=function(){cb&&cb()}}script.src=src;script.async=true;ref.parentNode.insertBefore(script,ref);return script}};function packHtmlFn(data,len){var packHtml="";for(var i=0;i<data.length;i++){packHtml+="<dl><dt>"+data[i]["title"]+'</dt><dd><div class="wn-gamehead-navlayer-list">';for(var j=0;j<data[i]["list"].length;j++){if(data[i]["list"][j]["text"]=="cut-cut-cut"){packHtml+='</div><div class="wn-gamehead-navlayer-list">'}else{if(len&&j==len){packHtml+='</div><div class="wn-gamehead-navlayer-list">'}packHtml+='<a title="'+data[i]["list"][j]["text"]+'" href="'+data[i]["list"][j]["href"]+'" target="_blank">';if(data[i]["list"][j]["status"]){var icon="";if(data[i]["list"][j]["status"]=="H"){icon="hot"}else if(data[i]["list"][j]["status"]=="N"){icon="new"}if(icon)packHtml+='<i class="'+icon+'"></i>'}packHtml+="<em></em>"+data[i]["list"][j]["text"]+"</a>"}}packHtml+="</div></dd></dl>"}return packHtml}function getUserName(){var username=/GWP_PassportUsername=([^;]+)/.exec(doc.cookie);return username[1].slice(0,3)+"**"+username[1].slice(-3)}var clubHtml=packHtmlFn(clubData,9),supportHtml=packHtmlFn(supportData),gameHtml="",mobileHtml=packHtmlFn(mobileData);gameHtml='<div class="wn-gamehead-hotgame"><div class="wn-gamehead-hotgametitle">'+hotgameData["title"]+'</div><div class="wn-gamehead-clearfix">';for(var i=0;i<hotgameData["list"].length;i++){gameHtml+='<a title="'+hotgameData["list"][i]["text"]+'" class="wn-gamehead-hotgameli" href="'+hotgameData["list"][i]["href"]+'" target="_blank"><img alt="'+hotgameData["list"][i]["text"]+'" src="'+hotgameData["list"][i]["img"]+'">'+hotgameData["list"][i]["text"]+"</a>"}gameHtml+="</div></div>";gameHtml+='<div class="wn-gamehead-clearfix">';gameHtml+=packHtmlFn(gameData,999);gameHtml+='<dl class="wn-gamehead-gametool"><dt>'+gametoolData["title"]+'</dt><dd><div class="wn-gamehead-navlayer-list">';for(var i=0;i<gametoolData["list"].length;i++){gameHtml+='<a title="'+gametoolData["list"][i]["text"]+'" href="'+gametoolData["list"][i]["href"]+'" target="_blank">'+gametoolData["list"][i]["text"]+"</a>"}gameHtml+="</div></dd></dl></div>";var scriptObj=doc.getElementById(scriptId),registerHref=scriptObj.getAttribute("register"),loginHref=scriptObj.getAttribute("login");var username=/GWP_PassportUsername=([^;]+)/.exec(doc.cookie),usernameText="",loginHtml="",wnXloginUrl="",hrefRex=/^\/account\/login\//g,wnXlogoutUrl="http://gwact.woniu.com/passport/logout?goto="+encodeURIComponent(doc.URL);if(loginHref){if(hrefRex.test(loginHref)){wnXloginUrl=loginHref.replace("/account/login/","http://gwact.woniu.com/passport/ssologin")}else if(loginHref.indexOf("http")!=-1){wnXloginUrl=loginHref.replace("http://www.woniu.com/account/login/","http://gwact.woniu.com/passport/ssologin")}else{wnXloginUrl="http://gwact.woniu.com/passport/ssologin"}}if(username){if(loginHref){usernameText=username[1].slice(0,3)+"**"+username[1].slice(-3);loginHtml="<li><i>"+usernameText+"</i>&nbsp;&nbsp;<em>|</em>&nbsp;&nbsp;"+'<a href="https://sso.woniu.com/logout?service='+encodeURIComponent(wnXlogoutUrl)+'">注销</a>&nbsp;&nbsp;</li>'}}else{if(registerHref){loginHtml+='<li><a class="wn-gamehead-navbtn" href="'+registerHref+'" target="_blank">注册</a></li>'}if(loginHref){if(registerHref){loginHtml+='<li><a class="wn-gamehead-navbtn" id="wnGlobalLogin" href="https://sso.woniu.com/login?service='+encodeURIComponent(wnXloginUrl)+"&regurl="+encodeURIComponent(registerHref)+'">登录</a></li>'}else{loginHtml+='<li><a class="wn-gamehead-navbtn" id="wnGlobalLogin" href="https://sso.woniu.com/login?service='+encodeURIComponent(wnXloginUrl)+'">登录</a></li>'}}}var gameheadHtml=['<div class="wn-gamehead">','<div class="wn-gamehead-contain">','<h1 class="wn-gamehead-logo"><a title="蜗牛游戏" href="http://www.woniu.com/" target="_blank">蜗牛游戏</a></h1>','<div id="j-wn-gamehead-gameimg" class="wn-gamehead-gameimg">','<div class="wn-gamehead-gamesmallimg"></div>','<div class="wn-gamehead-gamebigimg"></div>',"</div>",'<div class="wn-gamehead-nav">','<ul id="wnGameHeadNav">',loginHtml,'<li><a title="充值" class="wn-gamehead-navbtn" href="http://imprest.woniu.com/imprest/imprest_main.html" target="_blank">充值</a></li>','<li><a title="商城" class="wn-gamehead-navbtn" href="http://mall.snail.com/" target="_blank">商城</a></li>',"<li>",'<a title="论坛" class="wn-gamehead-navbtn" href="http://club.woniu.com/" target="_blank">论坛<em></em></a>','<div class="wn-gamehead-navlayer wn-gamehead-clublayer">',clubHtml,"</div>",'<div class="wn-gamehead-navlayermask"></div>',"</li>","<li>",'<a title="服务" class="wn-gamehead-navbtn" href="http://support.woniu.com/" target="_blank">服务<em></em></a>','<div class="wn-gamehead-navlayer wn-gamehead-supportlayer">',supportHtml,"</div>",'<div class="wn-gamehead-navlayermask"></div>',"</li>","<li>",'<a title="蜗牛游戏" class="wn-gamehead-navbtn" href="http://www.woniu.com/" target="_blank"><i></i>蜗牛游戏<em></em></a>','<div class="wn-gamehead-navlayer wn-gamehead-gamelayer">',gameHtml,"</div>",'<div class="wn-gamehead-navlayermask"></div>',"</li>","<li>",'<a title="蜗牛移动" class="wn-gamehead-navbtn" href="http://mobile.snail.com/" target="_blank">蜗牛移动<em></em></a>','<div class="wn-gamehead-navlayer wn-gamehead-mobilelayer">',mobileHtml,"</div>",'<div class="wn-gamehead-navlayermask"></div>',"</li>","</ul>","</div>","</div>","</div>"];var wnGameHeadSet=function(config){var setConfig={gameTopImg:"",gameShowImg:"",gameShowLink:"",gameShowTarget:"_blank"};if(config){for(key in config){if(config[key]){setConfig[key]=config[key]}}var gameimgObj=document.getElementById("j-wn-gamehead-gameimg"),gameimgDivObj=gameimgObj.getElementsByTagName("div"),gameTopImgObj,gameShowImgObj;for(var i=0;i<gameimgDivObj.length;i++){if(gameimgDivObj[i].className=="wn-gamehead-gamesmallimg"){gameTopImgObj=gameimgDivObj[i]}if(gameimgDivObj[i].className=="wn-gamehead-gamebigimg"){gameShowImgObj=gameimgDivObj[i]}}if(setConfig["gameTopImg"]){gameTopImgObj.innerHTML='<img src="'+setConfig["gameTopImg"]+'">'}if(setConfig["gameShowImg"]){if(setConfig["gameShowLink"]){gameShowImgObj.innerHTML='<a href="'+setConfig["gameShowLink"]+'" target="'+setConfig["gameShowTarget"]+'"><img src="'+setConfig["gameShowImg"]+'"></a>'}else{gameShowImgObj.innerHTML='<img src="'+setConfig["gameShowImg"]+'">'}}if(setConfig["gameTopImg"]&&setConfig["gameShowImg"]){gameimgObj.onmouseover=function(){gameimgObj.className="wn-gamehead-gameimg current"};gameimgObj.onmouseout=function(){gameimgObj.className="wn-gamehead-gameimg"}}}};function createHeadFn(){var headObj=document.getElementById("j-wn-gamehead");if(!headObj){headObj=document.createElement("div");headObj.id="j-wn-gamehead";headObj.innerHTML=gameheadHtml.join("");var pageBody=document.body;pageBody.insertBefore(headObj,pageBody.firstChild);var navLi=headObj.getElementsByTagName("li");for(var i=0;i<navLi.length;i++){navLi[i].onmouseover=function(){if(this.className!="current"){this.className="current";var layerObj,maskObj;var navLiDiv=this.getElementsByTagName("div");var listObjArray=[];for(var j=0;j<navLiDiv.length;j++){var classNames=navLiDiv[j].className.split(" ");for(var k=0;k<classNames.length;k++){if(classNames[k]=="wn-gamehead-navlayer"){layerObj=navLiDiv[j]}if(classNames[k]=="wn-gamehead-navlayermask"){maskObj=navLiDiv[j]}if(classNames[k]=="wn-gamehead-navlayer-list"){listObjArray.push(navLiDiv[j])}}}if(layerObj&&maskObj&&maskObj.offsetWidth==0){var listHeight=0;for(var j=0;j<listObjArray.length;j++){if(listObjArray[j].clientHeight>listHeight){listHeight=listObjArray[j].clientHeight}}for(var j=0;j<listObjArray.length;j++){listObjArray[j].style.height=listHeight-10+"px"}maskObj.style.width=layerObj.offsetWidth+"px";maskObj.style.height=layerObj.offsetHeight+"px"}}};if("onmouseleave"in navLi[i]){navLi[i].onmouseleave=function(){this.className=""}}else{navLi[i].onmouseout=function(){this.className=""}}}if(wnGameHeadConfig){wnGameHeadSet(wnGameHeadConfig)}}}function stopDefault(e){if(e&&e.preventDefault){e.preventDefault()}else{window.event.returnValue=false;return false}}function bindLogin(){var loginBtn=doc.getElementById("wnGlobalLogin");var popLogin=null;var wnGameHeadNav=doc.getElementById("wnGameHeadNav");if(loginBtn){try{document.domain="woniu.com"}catch(e){}var service=encodeURIComponent("http://gwact.woniu.com/passport/ssologin?goto=http://www.woniu.com/account/ssoLoginSuccess.html"),regurl=encodeURIComponent(registerHref);window["loginSuccess"]=function(){var usernameText=getUserName();if(usernameText){wnGameHeadNav.removeChild(wnGameHeadNav.childNodes[0]);wnGameHeadNav.removeChild(wnGameHeadNav.childNodes[0]);var li=doc.createElement("li");li.innerHTML="<i>"+usernameText+"</i>&nbsp;&nbsp;<em>|</em>&nbsp;&nbsp;"+'<a href="https://sso.woniu.com/logout?service='+encodeURIComponent(wnXlogoutUrl)+'">注销</a>&nbsp;&nbsp;';wnGameHeadNav.insertBefore(li,wnGameHeadNav.childNodes[0])}if(window.onUserLogined&&typeof window.onUserLogined==="function"){window.onUserLogined()}};loginBtn.onclick=function(e){stopDefault(e);if(window.wntopLogin){popLogin=wntopLogin.init({iframe:"https://sso.woniu.com/login_embedded?service="+service+"&regurl="+regurl})}else{util.loadJS("http://www.woniu.com/account/ssopopLogin/pop_login.js",function(){popLogin=wntopLogin.init({iframe:"https://sso.woniu.com/login_embedded?service="+service+"&regurl="+regurl})})}}}}var gameheadCssHref="http://www.woniu.com/static/wnheader/css/wn-gamehead-1.1.css?v="+styleVersion;domReady(function(){var hdCSS=null;var cssNode=document.getElementsByTagName("link")[0];if(cssNode){hdCSS=util.loadCSS(gameheadCssHref,cssNode)}else{hdCSS=util.loadCSS(gameheadCssHref)}util.onloadCSS(hdCSS,function(){createHeadFn();bindLogin()})})})("wn-gamehead","4.0.1");