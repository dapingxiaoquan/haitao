//导航栏的二级菜单显示与隐藏
$('.c_trans').mouseover(function() {
				$('._trans').hide();
				$(this).find('._trans').show();
			}).mouseout(function(){
				$('._trans').hide();
			})
			//导航栏的世界时间
//	var timeStr='';	
//	function Time( ){
//		
//		return new Date().getTime();
//	}
//	var time1='',
//	    time2='',
//	    time3='',
//	    time4='',
//	    time5='',
//	    time6='',
//$('.drop').mouseover(function(){
//	var now=Time();
//	now-4*60*60*1000
//console.log(Time())
//
//console.log(time,time1)
//})
	

