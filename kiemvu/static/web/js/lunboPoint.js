//author:bianyuan
//time:2013.11.25
function lunboPoint(wrap,cont,numUl){
	var $wrap = $('#' + wrap),
		$contArr = $('.' + cont),
		$numArr = $('#' + numUl + ' li'),
		now = 0,
		len = $numArr.length,
		timeId;
	if(len <= 1){
		$('#' + numUl).hide();
		$contArr.eq(0).show();
	}else{		
		//auto
		function showAuto(){
			clearTimeout(timeId);
			if(now < (len - 1)){
				now ++;
			}else{
				now = 0;
			}
			showN(now);
			timeId = setTimeout(showAuto,3000);
		}
		//showN
		function showN(n){
			$numArr.removeClass('on');
			$numArr.eq(n).addClass('on');
			$contArr.hide();
			$contArr.eq(n).fadeIn(100);
		}
		$numArr.eq(0).addClass('on');
		$contArr.eq(0).show();
		timeId = setTimeout(showAuto,5000);
		//mouseover
		$wrap.hover(function(){
			clearTimeout(timeId);
		},function(){
			timeId = setTimeout(showAuto,3000);
		});
		$numArr.each(function(i){
			$(this).mouseover(function(event){
				event.stopPropagation();
				now = i;
				showN(now);
			});
		});
	}
}