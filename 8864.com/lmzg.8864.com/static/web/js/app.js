/**
 * 应用初始化函数
 * 路由配置
 * author yangweichao
 */
define([
    'jquery',
    'crossroads',
    'hasher',
    'routeService'
],function($,crossroads,hasher,routeService,pagenav){
    var init= function(){
        //设置默认首页地址
        var DEFAULT_HASH = "main_curr";
        var DEFAULT_URL = "http://" + window.location.host + "/";

        //添加路由规则
        crossroads.addRoute('/{classify}', function(classify){
            classify='page/'+classify+'.html';
            routeService.getMenuCon(classify).then(function(reqData){
                $('#content').html(reqData);
            },function(reason){
                //console.log(reason);
            });
        });

        crossroads.bypassed.add(function(request){ //匹配不上时
            hasher.setHash(DEFAULT_HASH);
        });

        //设置hasher
        function parseHash(newHash, oldHash){
            //hasher.changed.active = true; 可以禁止hashchange事件执行
            if (newHash == "") {
                newHash = DEFAULT_HASH;
            }
            crossroads.parse(newHash);
        }
        hasher.initialized.add(parseHash); // parse initial hash
        hasher.changed.add(parseHash); //parse hash changes
        hasher.init(); //start listening for history change
        if (!hasher.getHash() && hasher.getURL() == DEFAULT_URL) {
            hasher.setHash(DEFAULT_HASH);
        }

        //菜单切换
        $('#header li.head_nav').off('click').on('click',function(e){
            
			e.stopPropagation();
            var url=$(this).data('href');
			var oUrl = $(this).data('jhref');
            var oHash = window.location.hash.substr(2);
		
			if(url && !oUrl && url!=oHash){
				
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
				
				//菜单可重复点击
                var curHash = url.split("#").pop();
                
				if (hasher.getHash() == curHash) {
					
					classify='page/'+hasher.getHash()+'.html';
					routeService.getMenuCon(classify).then(function(reqData){
						$('#content').html(reqData);
					},function(reason){
						//console.log(reason);
					});
				
				}else{
                
					hasher.setHash(url);
				
				}
				
            }else if(!url && !oUrl){
				
				alert('敬请期待');
				
            }else if(!url && oUrl){
				
				window.open(oUrl);
				
            }

        });
		
    };
	
    return {
        init:init
    }
});
