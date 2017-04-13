;
(function() {
	var hostname = location.hostname;
	var m = hostname.match(/^(.+)\.snail\.com$/);
	var map = {
		www: 1,
		mobile: 1,
		mall: 1,
		app: 1,
		bbs: 1,
		'10040': 1
	};
	if (m && map[m[1]]) {
		window.onload = function() {
			var elm = document.createElement("div");
			elm.id = "freeStore-box";
			elm.style.height = "94px";
			elm.innerHTML = '<div style="height:94px;position:fixed;bottom:0;width:100%;z-index:100000;background-color:#202020;">\
				<div style="width:1000px;margin:0 auto;height:100%;position:relative;background:url(http://mobile.snail.com/static/index201510/images/freeStore_bg.jpg) no-repeat center left;">\
					<div style="bottom:0;right:-70px;position:absolute;background: url(http://mobile.snail.com/static/index201510/images/freeStore_sprite.png) 0 -150px no-repeat;width: 250px;height: 100%;"></div>\
					<div style="bottom:0;left:-70px;position:absolute;background: url(http://mobile.snail.com/static/index201510/images/freeStore_sprite.png) 0 0 no-repeat;height: 150px;width: 130px;"></div>\
					<a style="position:absolute;left:654px;top:20px;width:145px;height:54px;background: url(http://mobile.snail.com/static/index201510/images/freeStore_sprite.png) -130px -90px no-repeat;" href="http://app.snail.com?from=freestore_foot" target="freeStore"></a>\
					<div style="position:absolute;right:27px;bottom:20px;width:120px;height:120px;background:#202020;">\
						<div style="background: url(http://mobile.snail.com/static/index201510/images/freeStore_sprite.png) -130px 0 no-repeat;height: 90px;width: 90px;margin: 15px auto auto;"></div>\
					</div>\
					<div style="position:absolute;right:26px;bottom:10px;width:123px;height:18px;background:url(http://mobile.snail.com/static/index201510/images/freeStore_sprite.png) 0 -246px no-repeat;"></div>\
					<div onclick="document.getElementById(\'freeStore-box\').style.display=\'none\';document.cookie=\'closeTime=\'+new Date().getTime();" style="cursor: pointer;position:absolute;right:-72px;top:27px;width:72px;height:42px;background:#383838;">\
						<div style="background: url(http://mobile.snail.com/static/index201510/images/freeStore_sprite.png) -220px 0 no-repeat;height: 18px;width: 18px;margin: 12px auto auto;"></div>\
					</div>\
				</div>\
			<div>';
			var now = new Date();
			var lastClose = getCookie('closeTime');
			if(!lastClose){
				document.body.appendChild(elm);
			}else{
				var t=(now.getTime()-lastClose)/1000/60/60;
				if(t>2){
					document.body.appendChild(elm);
				}else{
					
				}
			}
		}
	}

	function getCookie(name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg))
			return unescape(arr[2]);
		else
			return null;
	}

	function delCookie(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = getCookie(name);
		if (cval != null)
			document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
	}
})();