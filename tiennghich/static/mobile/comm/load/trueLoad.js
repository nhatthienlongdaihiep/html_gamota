var loader = {
	isShow:false,
	uto:null,
	cbfun:null,
	loadW:0,
	loadH:0,
	total:0,
	loaded:0,
	loadId:'',
	loadBgId:'',
	loadTopId:'',
	backColor:'#000000',
	resize:function(){
		if(!this.isShow) {
			return;
		}
		var per = this.loaded/this.total;
		if(per>1) {
			per = 1;
		}
		var _self = this;
		var ww = $(window).width();
		var lw = ww*0.4;
		var lh = 124*lw/160;
		var ll = (ww-lw)*0.5;
		this.loadW = lw;
		this.loadH = lh;
		var lt = ($(window).height()-lh)*0.5;
		$('#'+_self.loadBgId).width(lw).height(lh).css({'left':ll,'top':lt});
		$('#'+_self.loadTopId).width(lw).height(lh).css({'background-position':'0 -'+lh+'px','clip':'rect('+(lh-lh*per)+'px,'+lw+'px,'+lh+'px,0)','-webkit-transition':'all 0ms linear'});
		setTimeout(function(){
			$('#'+_self.loadTopId).css({'-webkit-transition':'all 300ms linear'});
		},100);
	},
	hide:function(){
		this.isShow = false;
		if(this.cbfun) {
			this.cbfun();
		}
		var _self = this;
		$('#'+this.loadId).css({'-webkit-transition':'all 300ms linear','opacity':'0'});
		setTimeout(function(){
			$('#'+_self.loadId).remove();
		},300);
	},
	show:function(cb, iFileData,bc){
		if(bc) {
			this.backColor = bc;
		}
		this.startTime = +new Date;
		this.loadId = 'Nie_load_id'+this.startTime;
		this.loadBgId = 'Nie_loadBg_id'+this.startTime;
		this.loadTopId = 'Nie_loadTop_id'+this.startTime;
		$('body').append('<div id="'+this.loadId+'" style="position:absolute;z-index:9999;left:0;top:0;width:100%;height:100%;background:'+this.backColor+';overflow:hidden;margin:0;padding:0;"><div id="'+this.loadBgId+'" style="position:absolute;width:0px;height:0px;left:0px;top:0px;background:url(https://nie.res.netease.com/comm/load/loadres.png) no-repeat;background-size:100%;"><div id="'+this.loadTopId+'" style="position:absolute;width:0px;height:0px;left:0px;top:0px;background:url(https://nie.res.netease.com/comm/load/loadres.png) no-repeat;background-size:100%;"></div></div></div>');
		this.isShow = true;
		this.cbfun = cb;
		var _self = this;
		this.imgData = {};
		this.total = iFileData.length;
		this.loaded = 0;
		for(var i = 0; i < this.total; i++) {
			this.loadImage(iFileData[i]);
		}
		this.resize();
		$(window).resize(function(){
			_self.resize();
		});
	},
	loadImage:function(iData){
		var _this = this;
		var img = new Image();
		img.onload = function () {
			_this.loaded++;
			_this.checkLoadComplete();
		};
		img.onerror = function(){
			_this.loaded++;
			_this.checkLoadComplete();
		}
		img.src = iData;
	},
	checkLoadComplete:function(){
		if(this.loaded == this.total) {
			this.hide();
		} else {
			var per = this.loaded/this.total;
			if(per>1) {
				per = 1;
			}
			$('#'+this.loadTopId).css({'clip':'rect('+(this.loadH-this.loadH*per)+'px,'+this.loadW+'px,'+this.loadH+'px,0)'});
		}
	}
}