require(['jquery', 'utils', 'routeService'], function ($, utils, routeService) {

    var wrap = {

        //第一屏
        first: function () {
            //菜单切换
            $('.advert_center_t1').find('li').each(function (i, e) {
                $(e).on('mousemove', function () {
                    $(this).addClass('on').siblings().removeClass('on');
                    $('.advert_div1').eq(i).addClass('on').siblings().removeClass('on')
                })
            })
            //焦点图
            var timer = null;
            var iNum = 0;
            var offon = true;
            $('.advert_right_active').find('span').each(function (i, e) {
                $(e).on('mousemove', function () {
                    var index = $(this).index();
                    iNum = index;
                    $(this).addClass('on').siblings().removeClass('on');
                    $('.advert_right_boxT').eq(index).addClass('on').siblings().removeClass('on')
                })
            })

            var timer = setInterval(function () {
                if (iNum == $('.advert_right_active span').length - 1) {
                    iNum = 0
                } else {
                    iNum++
                }
                $(".advert_right_boxT").eq(iNum).addClass('on').siblings().removeClass('on');
                $('.advert_right_active span').eq(iNum).addClass('on').siblings().removeClass('on');
            }, 3000);

            $('.Tab_02Left_cont_show ul').css('width', $('.Tab_02Left_cont_show ul li').length * $('.Tab_02Left_title ul li.on').width() + 'px');

            //最下面运营
            $('.Left_titleR').on('click', function () {

                if (!offon || $('.Tab_02Left_title ul li').length < 6) return false;
                offon = false;

                var oW = $('.Tab_02Left_title ul li').first().width();

                $('.Tab_02Left_title ul').stop().animate({
                    left: -oW
                }, 300, function () {

                    var first = $('.Tab_02Left_title ul li').first().remove();

                    first.appendTo($('.Tab_02Left_title ul'));
                    $('.Tab_02Left_title ul').css('left', '0px');

                    offon = true;

                });

            });
            $('.Left_titleL').on('click', function () {

                if (!offon || $('.Tab_02Left_title ul li').length < 6) return false;
                offon = false;

                var last = $('.Tab_02Left_title ul li').last().remove();
                var oW = $('.Tab_02Left_title ul li').first().width();

                last.insertBefore($('.Tab_02Left_title ul li').first());
                $('.Tab_02Left_title ul').css('left', -oW);

                $('.Tab_02Left_title ul').stop().animate({
                    left: 0
                }, 300, function () {

                    offon = true;

                });

            })

            $('.Tab_02Left_cont_show ul').delegate('li', 'click', function () {

                $(this).addClass('on').siblings().removeClass('on');
                $('.Tab_02Left_cont ul').eq($(this).attr('index')).addClass('on').siblings().removeClass('on');

            });

        },
        //第三屏
        three: function () {

            //left
            var offon = true;
            $('.tab_right').on('click', function () {

                if (!offon) return false;

                var oW = $('.TabContImg.on').children().first().outerWidth() + 3;

                $('.TabContImg.on').stop().animate({
                    left: -oW
                }, 300, function () {

                    var first = $('.TabContImg.on').children().first().remove();

                    first.appendTo($('.TabContImg.on'));
                    $('.TabContImg.on').css('left', '0px');

                    if ($('.TabContImg.on').hasClass('list02')) {

                        $('.img_video:last').find('span').on('click', function () {

                            $('.imgShade').show();
                            $('.imgShade img').hide();
                            $('.imgShade video').show();
                            $('.bgShade').show();
                            $('.imgShade video').attr('src', '');
                            $('.imgShade video').attr('src', $(this).attr('_src'));
                            $('.imgShade video').get(0).play();
                            $('.cloneImg').css('left', $('.imgShade').width() + 'px');

                        })

                    } else {

                        $('.TabContImg.on li:last').hover(function () {
                            $(this).children('.img_shade').show();
                        }, function () {
                            $(this).children('.img_shade').hide();
                        });
                        $('.TabContImg.on li:last').find('.img_shade').on('click', function () {
                            $('.imgShade').show();
                            $('.imgShade img').show();
                            $('.imgShade video').hide();
                            $('.bgShade').show();

                            wrap.imgLoad($(this).prev('img').attr('_src'));

                        })

                    }

                    offon = true;

                });

            });
            //right
            $('.tab_left').on('click', function () {

                if (!offon) return false;
                offon = false;

                var last = $('.TabContImg.on').children().last().remove();
                var oW = $('.TabContImg.on').children().first().outerWidth() + 3;

                last.insertBefore($('.TabContImg.on').children().first());
                $('.TabContImg.on').css('left', -oW);

                $('.TabContImg.on').stop().animate({
                    left: 0
                }, 300, function () {

                    if ($('.TabContImg.on').hasClass('list02')) {

                        $('.img_video:first').find('span').on('click', function () {

                            $('.imgShade').show();
                            $('.imgShade img').hide();
                            $('.imgShade video').show();
                            $('.bgShade').show();
                            $('.imgShade video').attr('src', '');
                            $('.imgShade video').attr('src', $(this).attr('_src'));
                            $('.imgShade video').get(0).play();
                            $('.cloneImg').css('left', $('.imgShade').width() + 'px');

                        })

                    } else {

                        $('.TabContImg.on li:first').hover(function () {
                            $(this).children('.img_shade').show();
                        }, function () {
                            $(this).children('.img_shade').hide();
                        });
                        $('.TabContImg.on li:first').find('.img_shade').on('click', function () {
                            $('.imgShade').show();
                            $('.imgShade img').show();
                            $('.imgShade video').hide();
                            $('.bgShade').show();

                            wrap.imgLoad($(this).prev('img').attr('_src'));

                        })

                    }

                    offon = true;

                });

            })

            $('.l_Tab_01title').find('span').each(function (i, e) {
                $(e).on('click', function () {
                    if ($(this).hasClass('fourT') == false) {
                        $(this).addClass('on').siblings().removeClass('on');
                        $('.TabContImg').eq(i).addClass('on').siblings().removeClass('on')
                    }
                })
            });

            //遮罩
            //原画
            $('.bgShade').outerHeight($(document.body).height());
            $('.cloneImg').on('click', function () {
                $('.imgShade img').attr('src', '');
                $('.imgShade video').attr('src', '');
                $('.imgShade,.imgVideo').hide();
                $('.bgShade').hide();
            });

        },
        //三板斧
        /*trans:function(){

         $('.box_active').each(function(index, element) {

         $(element).on('click',function(){

         if($(this).hasClass('middle')) return false;

         $('.box_active p').hide();

         if($(this).hasClass('up')){

         $('.up').animate({right:40,top:130,width:151},300,function(){

         $(this).removeClass('up').addClass('middle');

         });
         $('.middle').animate({right:10,top:270,width:105},300,function(){

         $(this).removeClass('middle').addClass('down');
         $(this).find('p').show();

         });
         $('.down').animate({right:10,top:40,width:105},300,function(){

         $(this).removeClass('down').addClass('up');
         $(this).find('p').show();

         });

         }else{

         $('.up').animate({right:10,top:270,width:105},300,function(){

         $(this).removeClass('up').addClass('down');
         $(this).find('p').show();

         });
         $('.middle').animate({right:10,top:40,width:105},300,function(){

         $(this).removeClass('middle').addClass('up');
         $(this).find('p').show();

         });
         $('.down').animate({right:40,top:130,width:151},300,function(){

         $(this).removeClass('down').addClass('middle');

         });

         }

         $('.l_occupation_boxT1').eq($(this).index()).addClass('on').siblings().removeClass('on');

         });

         });

         },*/
        videoShow: function () {//首页视频播放

            $('.l_download_01').on('click', function () {

                $('.imgShade').show();
                $('.imgShade img').hide();
                $('.imgShade video').show();
                $('.bgShade').show();
                $('.imgShade video').attr('src', $(this).attr('_src'));
                $('.imgShade video').get(0).load();
                $('.imgShade video').get(0).play();
                $('.cloneImg').css('left', $('.imgShade').width() + 'px');

            });

        },
        slide_api: function () {//轮播图接口

            if(0){
                var url = utils.url + 'api_slide'

                routeService.getListData(url, 'get', '').then(function (data) {

                    data = JSON.parse(data);

                    $.each(data, function (i, e) {

                        if (!e.url) e.url = "javascript:void(0);"

                    });

                    utils.module('right_pic', data, '.l_advert_right');
                    wrap.first();

                });

            }

            wrap.first();

        },
        down_api: function () {//下载接口
            if(0){
                var url = utils.url + 'api_main'

                routeService.getListData(url, 'get', '').then(function (data) {

                    data = JSON.parse(data);

                    $.each(data, function (i, e) {

                        if (!e.url) e.url = "javascript:alert('敬请期待');";

                    });

                    $('.download_02S1 a').attr('href', data[1].url);
                    $('.download_02S2 a').attr('href', data[3].url);
                    $('.dr a:eq(0)').attr('href', data[71].url);
                    $('.dr a:eq(1)').attr('href', data[73].url);

                });
            }



        },
        three_down_api: function () {//3个下载接口
            if(0){
            var url = utils.url + 'api_main_down'

            routeService.getListData(url, 'get', '').then(function (data) {

                data = JSON.parse(data);

                $('.b_btn1 a').attr('href', data[77].url);
                $('.b_btn2 a').attr('href', data[79].url);
                $('.b_btn3 a').attr('href', data[81].url);

            });
            }

        },
        api_three_pic: function () {//三端体验
            if(0){

            var url = utils.url + 'api_three_pic';

            routeService.getListData(url, 'get', '').then(function (data) {

                data = JSON.parse(data);

                var str = '';

                $.each(data, function (i, e) {

                    str += '<li><img src="' + e.filePath + '"><div class="img_shade" style="display: none;"><img src="' + e.filePath2 + '"></div></li>';

                });

                $('.TabContImg.list04').html(str);

            });

            }

        },
        api_down_erweima: function () {//下载二维码
            if(0){

                var url = utils.url + 'api_down_erweima'

                routeService.getListData(url, 'get', '').then(function (data) {

                    data = JSON.parse(data);

                    $('.download_03S1 img').attr('src', utils.imgUrl + data[0].filePath);

                });

            }

        },
        api_alls: function () {//最新

            if(0){

            var url = utils.url + 'api_alls'

            routeService.getListData(url, 'get', '').then(function (data) {

                data = JSON.parse(data);

                $.each(data, function (i, e) {

                    var oDate = new Date(e.outDateTime * 1000);
                    e.outDateTime = (oDate.getMonth() + 1) + '/' + oDate.getDate();

                });

                utils.module('newslist', data, '.advert_div1.fresh');


            });

            }

        },
        api_news: function () {//新闻
            if(0){
            var url = utils.url + 'api_news'

            routeService.getListData(url, 'get', '').then(function (data) {

                data = JSON.parse(data);


                $.each(data, function (i, e) {

                    var oDate = new Date(e.outDateTime * 1000);
                    e.outDateTime = (oDate.getMonth() + 1) + '/' + oDate.getDate();

                });

                utils.module('newslist', data, '.advert_div1.news');

            });

            }

        },
        api_notice: function () {//公告

            if(0){

            var url = utils.url + 'api_notice'

            routeService.getListData(url, 'get', '').then(function (data) {

                data = JSON.parse(data);

                $.each(data, function (i, e) {

                    var oDate = new Date(e.outDateTime * 1000);
                    e.outDateTime = (oDate.getMonth() + 1) + '/' + oDate.getDate();

                });

                utils.module('newslist', data, '.advert_div1.public');

            });
            }

        },
        api_activity: function () {//活动
            if(0){
            var url = utils.url + 'api_activity'

            routeService.getListData(url, 'get', '').then(function (data) {

                data = JSON.parse(data);

                $.each(data, function (i, e) {

                    var oDate = new Date(e.outDateTime * 1000);
                    e.outDateTime = (oDate.getMonth() + 1) + '/' + oDate.getDate();

                });

                utils.module('newslist', data, '.advert_div1.active');

            });
            }

        },
        api_luntan: function () {//论坛
            if(0){
            var url = utils.url + 'api_luntan'

            routeService.getListData(url, 'get', '').then(function (data) {

                data = JSON.parse(data);

                $.each(data, function (i, e) {

                    var oDate = new Date(e.outDateTime * 1000);
                    e.outDateTime = (oDate.getMonth() + 1) + '/' + oDate.getDate();

                });

                utils.module('newslistLT', data, '.advert_div1.luntan');

            });

            }

        },
        api_number: function () {//公众号
            if(0){
            var url = utils.url + 'api_number'

            routeService.getListData(url, 'get', '').then(function (data) {

                data = JSON.parse(data);

                $('.Tab_02Right_t1 img').attr('src', 'http://img.linekong.com' + data[0].filePath);

            });

            }

        },
        // api_play: function(){//首页头部视频

        // 	var url = utils.url+'api_play'

        // 	routeService.getListData(url,'get','').then(function(data){

        // 		data = JSON.parse(data);

        // 		if(!data[0].url){

        // 			$('.l_download_01').off().on('click',function(){

        // 				alert('敬请期待');

        // 			});

        // 		}else{

        // 			$('.imgShade video').attr('src',data[0].url);

        // 		}

        // 	});

        // },
        api_pait: function () {//首页原画
            if(0){
            var url = utils.url + 'api_pait'

            routeService.getListData(url, 'get', '').then(function (data) {

                data = JSON.parse(data);
                utils.module('ori_pic', data, '.TabContImg.list01');

                $('.list01').find('li').each(function (i, e) {
                    $(e).hover(function () {
                        $(this).children('.img_shade').show();
                    }, function () {
                        $(this).children('.img_shade').hide();
                    });
                });
                $('.img_shade').off().on('click', function () {
                    $('.imgShade').show();
                    $('.imgShade img').show();
                    $('.imgShade video').hide();
                    $('.bgShade').show();

                    wrap.imgLoad($(this).prev('img').attr('_src'));

                })

            });

            }


            $('.list01').find('li').each(function (i, e) {
                $(e).hover(function () {
                    $(this).children('.img_shade').show();
                }, function () {
                    $(this).children('.img_shade').hide();
                });
            });
            $('.img_shade').off().on('click', function () {
                $('.imgShade').show();
                $('.imgShade img').show();
                $('.imgShade video').hide();
                $('.bgShade').show();

                wrap.imgLoad($(this).prev('img').attr('_src'));

            })

        },
        api_pic: function () {//首页截图

            if(0){

            var url = utils.url + 'api_pic'

            routeService.getListData(url, 'get', '').then(function (data) {

                data = JSON.parse(data);
                utils.module('ori_pic', data, '.TabContImg.list03');

                $('.list03').find('li').each(function (i, e) {
                    $(e).hover(function () {
                        $(this).children('.img_shade').show();
                    }, function () {
                        $(this).children('.img_shade').hide();
                    });
                });
                $('.img_shade').off().on('click', function () {
                    $('.imgShade').show();
                    $('.imgShade img').show();
                    $('.imgShade video').hide();
                    $('.bgShade').show();
                    console.log();

                    wrap.imgLoad($(this).prev('img').attr('_src'));

                })

            });

            }


            $('.list03').find('li').each(function (i, e) {
                $(e).hover(function () {
                    $(this).children('.img_shade').show();
                }, function () {
                    $(this).children('.img_shade').hide();
                });
            });
            $('.img_shade').off().on('click', function () {
                $('.imgShade').show();
                $('.imgShade img').show();
                $('.imgShade video').hide();
                $('.bgShade').show();
                console.log();

                wrap.imgLoad($(this).prev('img').attr('_src'));

            })

        },
        api_video: function () {//首页视频
            if(0){

            var url = utils.url + 'api_video'

            routeService.getListData(url, 'get', '').then(function (data) {

                data = JSON.parse(data);
                //utils.module('ori_video',data,'.TabContImg.list02');

                //视频
                $('.img_video').find('span').on('click', function () {

                    $('.imgShade').show();
                    $('.imgShade img').hide();
                    $('.imgShade video').show();
                    $('.bgShade').show();
                    $('.imgShade video').attr('src', '');
                    $('.imgShade video').attr('src', $(this).attr('_src'));
                    $('.imgShade video').get(0).play();
                    $('.cloneImg').css('left', $('.imgShade').width() + 'px');

                })

            });

            }

            $('.img_video').find('span').on('click', function () {

                $('.imgShade').show();
                $('.imgShade img').hide();
                $('.imgShade video').show();
                $('.bgShade').show();
                $('.imgShade video').attr('src', '');
                $('.imgShade video').attr('src', $(this).attr('_src'));
                $('.imgShade video').get(0).play();
                $('.cloneImg').css('left', $('.imgShade').width() + 'px');

            })

        },
        api_pic4: function () {//首页三端体验

            var url = utils.url + 'api_pic4'

            routeService.getListData(url, 'get', '').then(function (data) {

                data = JSON.parse(data);
                utils.module('ori_pic', data, '.TabContImg.list04');

                $('.list04').find('li').each(function (i, e) {
                    $(e).hover(function () {
                        $(this).children('.img_shade').show();
                    }, function () {
                        $(this).children('.img_shade').hide();
                    });
                });
                $('.img_shade').off().on('click', function () {
                    $('.imgShade').show();
                    $('.imgShade img').show();
                    $('.imgShade video').hide();
                    $('.bgShade').show();

                    wrap.imgLoad($(this).prev('img').attr('_src'));

                })

            });

        },
        api_adtitle: function () {//首页广告图片
            if(0){

            var url = utils.url + 'api_adtitle'

            routeService.getListData(url, 'get', '').then(function (data) {

                data = JSON.parse(data);

                $.each(data, function (i, e) {

                    if (!e.url) e.url = 'javascript:void(0);';

                });

                $('.advert_left_t1 a').attr('href', data[0].url);
                $('.advert_left_t1').css('background-image', 'url(http://img.linekong.com' + data[0].filePath + ')');
                $('.advert_left_t2').css('background-image', 'url(http://img.linekong.com' + data[1].filePath + ')');
                $('.advert_left_t2 a').attr('href', data[1].url);

            });

            }

        },
        imgLoad: function (src) {//图片预处理

            var oImg = new Image();
            var rat = $('.imgShade').width() / $('.imgShade').height();
            var obj = $('.imgShade img');

            oImg.src = src;
            oImg.onload = function () {

                var oR = this.width / this.height;

                if (oR >= rat) {

                    var oH = $('.imgShade').width() * this.height / this.width;
                    var oT = ($('.imgShade').height() - oH) / 2;

                    obj.css({
                        'height': oH + 'px',
                        'width': $('.imgShade').width() + 'px',
                        'display': 'block',
                        'position': 'absolute',
                        'left': '0px',
                        'top': oT + 'px'
                    });
                    $('.cloneImg').css('left', $('.imgShade').width() + 'px');

                } else {

                    var oW = $('.imgShade').height() * this.width / this.height;
                    var oL = ($('.imgShade').width() - oW) / 2;

                    obj.css({
                        'width': oW + 'px',
                        'height': $('.imgShade').height() + 'px',
                        'display': 'block',
                        'position': 'absolute',
                        'top': '0px',
                        'left': oL + 'px'
                    });
                    $('.cloneImg').css('left', oL + $('.imgShade img').width() + 'px');

                }

                $('.imgShade img').attr('src', src);

            }

        },

        /*2016.11.09 modified by zhoushuanglong*/
        newsVersion: function () {
            /* START OF IF ================================= */
            if(0){

            $.ajax({
                type: 'get',
                dataType: 'json',
                url: 'http://lmzg.8864.com/api_main',
                success: function(data){
                    $('#btnCps').attr('href', data[77].url);
                    $('#btnIos').attr('href', data[79].url);
                    $('#btnSdk').attr('href', data[81].url);
                    $('#downloadBtnApple').attr('href', data[1].url);
                    $('#downloadBtnAndroid').attr('href', data[3].url);
                    $('#downloadBtnExe').attr('href', data[71].url);
                    $('#downloadBtnHome').attr('href', data[73].url);
                }
            });

            $.ajax({
                type: 'get',
                dataType: 'json',
                url: 'http://lmzg.8864.com/api_down_erweima',
                success: function(data){
                    $('#newsQrCode').attr('src', 'http://img.linekong.com' + data[0].filePath)
                }
            });

            }
            /* END OF IF ================================= */


            $('#closeQrCode').click(function () {
                $('div.news-qr-code').hide();
            });


            $('div.news-slogan a').each(function (i) {
                var $this = $(this);
                if (!$this.hasClass('news-download-btn') && !$this.hasClass('news-start-btn')) {
                    $this.addClass('current');
                }
            });

            popbtn('#newsDownloadBtn', '#newsDownloadCon');
            popbtn('#newsStartBtn', '#newsStartCon');

            function popbtn(btn, con){
                var $allBtn = $(btn),
                    $allCon = $(con);

                var timer;
                $allBtn.hover(function () {
                    $allCon.hide();
                    clearTimeout(timer);

                    $allCon.show();
                    setTimeout(function () {
                        $allCon.find('a').addClass('current');
                    }, 10);
                }, function () {
                    $allCon.find('a').removeClass('current');
                    timer = setTimeout(function () {
                        $allCon.hide();
                    }, 600);
                });
            }
        }

    }
    wrap.three();
    // wrap.trans();
    wrap.videoShow();
    wrap.slide_api();
    wrap.down_api();
    wrap.api_down_erweima();
    wrap.api_alls();
    wrap.api_news();
    wrap.api_notice();
    wrap.api_activity();
    wrap.api_luntan();
    wrap.api_number();
    //wrap.api_play();
    wrap.api_pait();
    wrap.api_pic();
    wrap.api_video();
    wrap.api_adtitle();
    wrap.three_down_api();
    wrap.api_three_pic();


    wrap.newsVersion();

    //下载按钮
    var timerT = null;
    $('.l_download_02_w').on('click', function () {
        clearTimeout(timerT);
        $('.s_btn').css('display', 'block');
    });

    $('.s_btn').on('mousemove', function () {
        clearTimeout(timerT);
    })

    $('.s_btn').on('mouseout', function () {
        clearTimeout(timerT);
        timerT = setTimeout(function () {
            $('.s_btn').css('display', 'none');
        }, 600)
    })


})
