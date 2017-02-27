// _menu.js  
function navigation_block(){
	var menu_toggle = $(".menu-top-toggle,.menu-top-overlay");
	var menu 		= $(".menu-top")
	var menu_overlay= $(".menu-top-overlay")
	var menu_page 	= $(".page");
	var menu_open   = "open";

	menu_toggle.click(function(event){
		event.preventDefault();
		menu_toggle.toggleClass(menu_open);
		menu.toggleClass(menu_open);
		menu_page.toggleClass("menu_open");
		$('body').toggleClass("menu-fixhidden");
	}) 

	/* menu mobile toggle */
	var has_submenu = $('.has-submenu>a');
	var breadpoint = 992;
	has_submenu.click(function(event){
		if($( window ).width()<breadpoint) { 
			event.preventDefault();
			$('.has-submenu ul').removeAttr('style');
			$(this).parent().toggleClass("open-content");
			$(this).parent().children('ul').toggleClass('has-submenu-open'); 
		}
			
	}); 
	  
}