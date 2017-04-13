 (function(){

 		if(!_hmt){
	       var  _hmt = [];
	    }

	    var tool ={

	      	path: function(){
			    var js = document.scripts, script = js[js.length - 1], jsPath = script.src;
			    if(script.getAttribute('merge')) return;
			    return jsPath.substring(0, jsPath.lastIndexOf("/") + 1);
			 }(),

			//载入配件
			use: function(module, fn, readyMethod){
			    var i = 0, head = $('head')[0];
			    var module = module.replace(/\s/g, '');
			    var iscss = /\.css$/.test(module);
			    var node = document.createElement(iscss ? 'link' : 'script');
			    var id = 'ui_popbroad_' //+ module.replace(/\.|\//g, '');
			    if(!tool.path) return;
			    if(iscss){
			      node.rel = 'stylesheet';
			    }
			    node[iscss ? 'href' : 'src'] = /^http:\/\//.test(module) ? module : tool.path + module;
			    node.id = id;
			    if(!$('#'+ id)[0]){
			      head.appendChild(node);
			    }
			    //轮询加载就绪
			    ;(function poll() {
			      ;(iscss ? parseInt($('#'+id).css('width')) === 1989 : tool[readyMethod||id]) ? function(){
			        fn && fn();
			        try { iscss || head.removeChild(node); } catch(e){};
			      }() : setTimeout(poll, 100);
			    }());
			    return this;
			}
    
	    }


	    var broad = null;
		var  Popup = function(settings){

			var that = this,
			defaults = {

				// Markup
				backClass : 'popup_back',
				backOpacity : 0.7,
				containerClass : 'popup_cont',
				closeContent : '<div class="popup_close"></div>',
				markup : '<div class="popup"><div class="popup_content"/></div>',
				contentClass : 'popup_content',
				preloaderContent : '<p class="preloader">Loading</p>',
				activeClass : 'popup_active',
				hideFlash : false,
				speed : 200,
				popupPlaceholderClass : 'popup_placeholder',
				keepInlineChanges :  true,

				// Content
				modal : true,
				content : null,
				type : 'auto',
				width : '1180px',
				height : '612px',

				// Callbacks
				beforeOpen : function(type){},
				afterOpen : function(){},
				beforeClose : function(){},
				afterClose : function(){},
				error : function(){},
				show : function($popup, $back, status){

					var plugin = this;

					// Center the popup
					plugin.center();

					if(status == 1){
						$popup.hide();
						$back.hide();

						
					}else{
						// Animate in
						$popup
							.animate({opacity : 1}, plugin.o.speed, function(){
								// Call the open callback
								plugin.o.afterOpen.call(plugin,$popup);
							});
						}
				},
				replaced : function($popup, $back){

					// Center the popup and call the open callback
					this
						.center()
						.o.afterOpen.call(this);

				},
				hide : function($popup, $back){

					if( $popup !== undefined ){

						// Fade the popup out
						$popup.animate({opacity : 0}, this.o.speed);
					}

				},
				types : {

					html: function(content, callback){

						callback.call(this, content);
					},
				}
			},
			type,
			cachedContent,
			$back,
			$pCont,
			$close,
			$preloader,
			$p;

			that.ele = undefined;

			that.o = $.extend(true, {}, defaults, settings);
			this.vars = {};
			this.open = function(conf){

				this.o = $.extend(true,{},this.o, conf);
				

				this.vars['conf'] = conf;

				var that = this;

				if($back == undefined){

					loadContent(conf);
				}
			}

			function loadContent(conf){

				$.ajax({
					url: conf.url,
					type: 'get',
					jsonp:'jsoncallback',
					dataType: 'jsonp'
				})
				.done(function(res) {

					if(res.status){
						var data = res.data;

						var qrcode = data.download.qrcode;
							android = data.download.android;
							ios = data.download.ios,
							gameType = data.platform;

						// 直播显示控制 0 : 不使用 1 : 使用不默认弹出 2 : 使用并且默认弹出

						var status = data.status;

						if(status == 0){
							return false;
						}

						if(data.list.length==0){
							return false;
						}

						broad = new BroadCast({
							showMini: conf.element? false: true,
							defaultId: data.index,
							gameType:gameType,
							status : status,
							qrcode:qrcode,
							android:android,
							ios:ios,
							list:data.list
						});


						if(conf.element){
							var broadContent = broad.createDom();
							conf.element.append(broadContent);
							return false;
						}


					

						$back = $('<div class="' + that.o.backClass + '"/>')
						.appendTo($('body'))
						.css('opacity',0)
						.animate({
							opacity:that.o.backOpacity
						},that.o.speed);

					if(!that.o.modal){

						$back.one('click.popup',function(){
							that.close();
						})

					}

					// Should we hide the flash?
					if( that.o.hideFlash ){

						$('object, embed').css('visibility', 'hidden');
					}

					// Preloader
					if( that.o.preloaderContent ){

						$preloader = $(that.o.preloaderContent)
							.appendTo($('body'));
					}

					that.width = (that.o.width)? that.o.width:null;

					that.height = (that.o.height)?that.o.height:null

					// callback 
					if(conf.beforeOpen){
						conf.beforeOpen.call(that);
					}



					var content = broad.createDom();
					showContent.call(that,content,status);

					}else{
						return false;
					}


				})
				.fail(function() {
					//console.log("error");
				})
				.always(function() {
					//console.log("complete");
				});
			}

			/**
			 * Shows the content
			 *
			 * @param  {string} content
			 * @return {void}
			 */
			function showContent(content,status){

				// Do we have a preloader?

				if( $preloader ){

					// If so, hide!
					$preloader.fadeOut('fast', function(){

						$(this).remove();

					});
				}

				// Presume we're replacing
				var replacing = true;

				// If we're not open already
				if( $pCont === undefined ){

					// We're not replacing!
					replacing = false;

					// Create the container
					$pCont = $('<div class="'+that.o.containerClass+'">');

					// Add in the popup markup
					$p = $(that.o.markup)
						.appendTo($pCont);

					// Add in the close button
					$close = $(that.o.closeContent)
						.bind('click', function(){

							that.close();

						})
						.appendTo($pCont);

					// Bind the resize event
					$(window).resize(that.center);

					// Append the container to the body
					// and set the opacity
					$pCont
						.appendTo($('body'))
						.css('opacity', 0);

				}

				// Get the actual content element
				var $pContent = $('.'+that.o.contentClass, $pCont);

				// Do we have a set width/height?
				if( that.width ){

					$pContent.css('width', that.width, 10);

				}else{

					$pContent.css('width', '');
				}

				if( that.height ){

					$pContent.css('height', that.height, 10);

				}else{

					$pContent.css('height', '');

				}

				// Put the content in place!
				if( $p.hasClass(that.o.contentClass) ){

					$p.html(content);

				}else{

					$p.find('.'+that.o.contentClass)
						.html(content);

				}

				// Callbacks!
				if( !replacing ){

					that.o.show.call(that, $pCont, $back, status);

				}else{

					that.o.replaced.call(that, $pCont, $back);
				}



				//fix firefox not center bug

				setTimeout(function(){

					$(window).trigger('resize');
				}, 30);
				

			}

			/**
			 * Close the popup
			 *
			 * @return {Object}
			 */
			that.close = function(){

				that.o.beforeClose.call(that);

				
				if( $back !== undefined ){

					// Fade out the back
					$back.animate({opacity : 0}, that.o.speed, function(){

						// Clean up after ourselves

						$pCont.animate({top:'80px',opacity:0},that.o.speed,function(){

							//$(this).css("opacity",0);

							// Call the hide callback
							that.o.hide.call(that, $pCont, $back);

							that.cleanUp();
						
						})
						

					});
				}



				return that;
			};

			/**
			 * Clean up the popup
			 *
			 * @return {Object}
			 */
			that.cleanUp = function(){

				$back
					.add($pCont).hide();
					//.remove();



				//$pCont = $back = undefined;

				// Unbind the resize event
			//	$(window).unbind('resize', that.center);

				// Did we hide the flash?
				if( that.o.hideFlash ){

					$('object, embed').css('visibility', 'visible');

				}


				
				// Call the afterClose callback
				that.o.afterClose.call(that);

				return that;
			};

			that.show = function(){
				$back
					.add($pCont).show();
				$back.css('opacity',0.7)
					$pCont.css({width:'auto',height:'auto','opacity':1});
					
				that.center();
			}


			/**
			 * Centers the popup
			 * @return {Object}
			*/
			that.center = function(){

				$pCont.css(that.getCenter());

				//for IE6
				$back.css({
					height:document.documentElement.clientHeight
				});
				return that;
			}

			/**
			 * Get the center co-ordinates
			 *
			 * Returns the top/left co-ordinates to
			 * put the popup in the center
			 *
			 * @return {Object} top/left keys
			*/
			that.getCenter = function(){

				var pW = $pCont.children().outerWidth(true),
					pH = $pCont.children().outerHeight(true),
					wW = document.documentElement.clientWidth,
					wH = document.documentElement.clientHeight;

				return {
					top : wH * 0.5 - pH * 0.5,
					left : wW * 0.5 - pW * 0.5
				};
			};
		}

		var BroadCast=function(opts){
			var defaults = {
				showMini:true,
				defaultId:0,
				gameType:'mobile',
				status:2,
				qrcode:'',
				android:'',
				ios:'',
				list:[]
			}

			this.conf = $.extend({}, defaults, opts);

			this.init();
		}

		BroadCast.prototype = {

			init:function(){
				this.createDom();
				if(this.conf.showMini){

					this.renderMiniLive();
				}
				
			},

			createDom:function(){

	            var that = this;
	            var conf = that.conf;

	            var $jlive = $('<div class="j-live" style="width:1180px;height:612px"></div>');

	            var $channel = $('<div class="channel"></div>');
	            var $videoCon = $('<div class="wn-video"></div>');
	            var $videoItem = $('<div class="wn-items"></div>');

	            //var videoHtml = that.renderVideo();
	            var downloadHtml = that.renderDownload();
	            var itemsHtml = this.renderItems();

	            var wnlinkHtml = '<div class="wn-link"><a href="http://v.woniu.com/" target="_blank" class="wn-link-txt">更多直播&gt;</a></div>';


	            $videoItem.html(downloadHtml + itemsHtml + wnlinkHtml);

	            $channel.append($videoCon);
	            $channel.append($videoItem);

	            $jlive.append($channel);

	            $jlive.on('click','.wn-items-wrap li',function(e){
	            	e.preventDefault();

	            	var $self = $(this);
	            	var obj = conf.list[$self.data('video')];

	            	if($self.hasClass('current')){
	            		return false;
	            	}

	            	$self.addClass('current').siblings('li').removeClass('current')

	            	var videoHtml = that.renderVideo(obj);

	            	$videoCon.html(videoHtml);

	            	_hmt.push(['_trackEvent', 'zhibo', 'click', '直播']);
	            });

	            $jlive.find('.wn-items-wrap li').eq(conf.defaultId).trigger('click');

				//el.append($jlive);

				return $jlive;

	                   // _this.changeChannel(_this)
	        },

	        renderDownload:function(){

	        	var that = this;
	        	var conf = that.conf;

	        	var ta = '扫一扫下载游戏';
	        	var tb = '更多直播信息<br>关注微信公众号';

	        	var title =  conf.gameType =='mobile'?ta:tb;
	        	var download = conf.gameType =='mobile'? '<div class="download-btn"> '+ 
	        				 (conf.ios? '<a href="'+ conf.ios + '" class="appstore"></a>':'') + (conf.android? '<a href="'+ conf.android +'" class="android"></a>':'') + '</div>' :'';

	        	var tmp = '<div class="download">'+
      		      			(conf.qrcode? '<div class="title">'+ title +'</div>'+'<div class="qrcode"><img src="'+ conf.qrcode +'"></div>' : '')+ 
			  			      download + '</div>';
			    return tmp;
	        },
	        renderItems:function(){

	        	var that = this;
	        	var conf = that.conf;
		        var lis = [];

		        var maxNum = 3;

		        if(!conf.qrcode){
		        	maxNum = 4;
		     		/*   	
			     		if(!conf.ios && !conf.android){
			        		maxNum = 4;
			        	}
		        	*/
		        }

		        $.each(conf.list,function(index, el) {


		        	if(index>maxNum){
		        		return false;
		        	}
		        	var li = '<li data-video='+ index +'>'+
								  '<a href="#">'+
								      '<div class="pic">'+
								      '<img src="'+ el.thumb_cover +'" alt="">'+
								      '</div>'+
								      '<div class="txt">'+
								      '<span>'+ el.text +'</span>'+
								      '</div>'+ ( el.live  ? '<div class="icon-live"><i></i>正在直播</div>':'' )+
								  '</a>'+
								'</li>';
		        	lis.push(li);
		        });
		        return '<ul class="wn-items-wrap">'+ lis.join('') + '</ul>';
	        },
	        renderVideo:function(obj){

	        	var that = this;
	        	var conf = that.conf;

	        	if (obj.act_type == 'pic'){
	        		return '<img src="'+ obj.trailer_cover +'" alt="" style="width:100%">';
	        	}else{

	        		var source_str = '';

	        		switch(obj.source_type){
	        			case 'swf':

    				        source_str = '<object type="application/x-shockwave-flash" id="index-video" name="index-video" align="middle" data="'+ obj.source +'" width="100%" height="612">'+
							      '<param name="movie" value="'+ obj.source +'">'+
							      '<param name="quality" value="high">'+
							      '<param name="bgcolor" value="#000">'+
							      '<param name="allowscriptaccess" value="always">'+
							      '<param name="allowfullscreen" value="true">'+
							      '<param name="allowFullScreenInteractive" value="true">'+
							      '<param name="wmode" value="opaque">'+
							      '<embed width="100%" height="100%" allownetworking="all" allowscriptaccess="always" src="'+ + obj.source + +'" quality="high" bgcolor="#000" wmode="window" allowfullscreen="true" allowfullscreeninteractive="true" type="application/x-shockwave-flash">'+
						      '</object>';
	        			break;
	        			case 'iframe':
	        				source_str = '<iframe height="100%" frameborder="0" scrolling="auto" src="' + obj.source + '" width="100% "></iframe>';
	        			break;

	        			case 'mp4':
	        				 source_str  = '<video src="'+obj.source +'" autoplay="true" loop="" preload="auto"><img class="" src="'+ obj.trailer_cover +'"></video>'
	        			break;
	        		}

	        		return source_str;
	        	}
	        },
	        renderMiniLive:function(){
	        	var that = this;
	        	var $miniLive = $('<div class="mini-live"></div>');
	        	this.miniLive = $miniLive;

				var conHTML = '<div class="live-con">'+
								'<i class="mini__icon-live"></i>'+
								'<span class="mini__title">正在直播：</span>'+
								'<span class="mini__txt">'+ that.conf.list[that.conf.defaultId].text +'</span>'+
								'</div>';

				$miniLive.html(conHTML);
				
				if(that.conf.status == 2){
					$miniLive.hide();
				}
				$miniLive.appendTo('body');

				$miniLive.unbind().bind('click',function(e){
					e.preventDefault();
					that.hideMiniLive();
				})
			},

			showMiniLive:function(){
				this.miniLive.show();
			},
			hideMiniLive:function(){
				this.miniLive.hide();
				live.show();
				// Live.open(Live.vars.conf);
			}
		}


		window.Live = window.live = new Popup({
			afterClose:function(){
				broad.showMiniLive();
			}
		});
		tool.use('./live.css');
 })()