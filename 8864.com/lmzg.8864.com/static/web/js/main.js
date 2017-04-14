require.config({
    paths: {
        'jquery': 'vendor/jquery.min',
        'signals': 'vendor/router/signals.min',
        'crossroads': 'vendor/router/crossroads.min',
        'hasher': 'vendor/router/hasher.min',
        'core':'vendor/jqueryui/core',
        'datepicker':'vendor/jqueryui/datepicker',
		'routeService':'services/route/routeService',
		'timepicker':'vendor/jqueryui/timepicker',
		'jquery_ui':'vendor/jqueryui/jquery-ui.min',
        'utils':'utils',
        'handlebars':'vendor/handlebars/handlebars.min',
		'text':'vendor/requirePlug/text',
		'json2':'vendor/json2'

    },
    shim: {
		datepicker:{
			deps:['jquery_ui'],
			exports:"$.datepicker"
		},
		timepicker: {
            deps: ['jquery_ui','datepicker'],
            exports: "$.timepicker"
        }

    }
});

require([
    'jquery',
    'app',
	'text',
	'text!/main/tpl/tpl.html',
	'json2'
],function($,app,text,tpl,json2){
	
	var u = navigator.userAgent.toLowerCase();
	
	if(u.indexOf('iphone')>0 || u.indexOf('android')>0 || u.indexOf('xiaomi')>0|| u.indexOf('ipad')>0){
		
		 window.location.href = 'http://lmzg.8864.com/mobile';
		 return false;
	}
	
    $(function(){
        app.init();
    });
	
	$('body').append(tpl);
	
});
