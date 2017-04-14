define(['jquery','routeService','handlebars'],function($,routeService,Handlebars){
	
    var returnObj={};
	
	//通用模板载入
	returnObj.module = function(id,data,obj,fn){
		
		var source = $('#'+id).html();
		var template = Handlebars.compile(source);
		var html = template(data);
		
		$(obj).html(html);
		fn && fn();
			
	}
	
	//反向代理配置路由
	//returnObj.url = 'http://' + window.location.host + '/lmzg/';
	returnObj.url= '../';
	returnObj.imgUrl = 'http://img.linekong.com';
	
	//分页插件
	returnObj.page = function(opt){
		
		this.obj = $('.'+opt.obj);
		this.index = 0;
		this.fn = opt.fn;
		this.allPage = Math.ceil(opt.count/opt.per);
		if(this.allPage > 1) this.init();
		
	}
	
	returnObj.page.prototype.init = function(){
		
		var str = '<span class="page_first">首页</span><span class="page_pre">上一页</span>';
		var _this = this;
		
		for(var i=0; i<this.allPage;i++){
			
			str += i<5 ? '<span class="page_number page_show">'+(i+1)+'</span>' : '<span class="page_number page_hide">'+(i+1)+'</span>';

		}
		
		str += '<span class="page_next">下一页</span><span class="page_last">末页</span>';
		
		this.obj.html(str);
		$('.page_number').eq(0).addClass('on')
		
		$('.page_number').on('click',function(){
			
			_this.index = $(this).index('.page_number');
			_this.byClick();
						
		});
		
		$('.page_first').on('click',function(){
			
			_this.index = 0;
			_this.byClick();
						
		});
		
		$('.page_last').on('click',function(){
			
			_this.index = _this.allPage-1;
			_this.byClick();
						
		});
		
		$('.page_pre').on('click',function(){
			
			_this.index--;
			
			if(_this.index < 0){
				
				_this.index = 0;
				alert('已经是第一页了');
				
			}else{
				
				_this.byClick();
					
			}			
						
		});
		
		$('.page_next').on('click',function(){
			
			_this.index++;
			
			if(_this.index >= _this.allPage){
				
				_this.index = _this.allPage-1;
				alert('已经是最后一页了');
				
			}else{
				
				_this.byClick();
					
			}			
						
		});
		
	}
	
	returnObj.page.prototype.byClick = function(){
		
		var _this = $('.page_number').eq(this.index);
		
		_this.addClass('on').siblings().removeClass('on');
		
		if(this.allPage<=5){
			
			this.fn && this.fn(this.index+1);
			return false;
			
		}
		
		_this.siblings().addClass('page_hide').removeClass('page_show');
		
		if(this.index > 2 && this.index < (this.allPage-2)){
	
			_this.next().addClass('page_show').removeClass('page_hide').next().addClass('page_show').removeClass('page_hide');
			_this.prev().addClass('page_show').removeClass('page_hide').prev().addClass('page_show').removeClass('page_hide');
				
		}else if(this.index >= (this.allPage-2)){
	
			var THIS = this;
			$('.page_number').each(function(index, element) {
              
				if(index >= (THIS.allPage-5)){
					
					$(element).addClass('page_show').removeClass('page_hide');
						
				}
				
            });
				
		}else if(this.index < 5){
		
			var THIS = this;
			$('.page_number').each(function(index, element) {
              
				if(index < 5){
				
					$(element).addClass('page_show').removeClass('page_hide');
						
				}
				
            });
				
		}
		
		this.fn && this.fn(this.index+1);
		
		
	}
	
	returnObj.page.prototype.backOne = function(){
		
		$('.page_first').trigger('click');
			
	}
	
    return returnObj;

});