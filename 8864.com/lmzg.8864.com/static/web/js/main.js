require.config({
    paths: {
        'jquery': 'jquery.min',
        'signals': 'signals.min',
        'crossroads': 'crossroads.min',
        'hasher': 'hasher.min',
        'core':'vendor/jqueryui/core',
        'datepicker':'vendor/jqueryui/datepicker',
		'routeService':'routeService',
		'timepicker':'vendor/jqueryui/timepicker',
		'jquery_ui':'vendor/jqueryui/jquery-ui.min',
        'utils':'utils',
        'handlebars':'handlebars.min',
		'text':'text',
		'json2':'json2'

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
	'',
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
	
	
});
