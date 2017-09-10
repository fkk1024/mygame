// 主页js
$(()=>{
	var srcArry=[
		'2048/2048.html',
		'elousi/tetris.html'
	]
	var leftBoxHeigh=document.body.scrollHeight;
	$('#left').css({
		'height':(leftBoxHeigh-60)+'px',
		'width':'200px',
		'borderRight':"2px solid #333"
	}).on('click','li',function(){
		$(this).addClass('on').siblings().removeClass('on');
		$('#iframe').attr('src',srcArry[$(this).index()]);
	});
	$("#right").css('width','100%')
	$("#right #iframe").css({
		'width':'100%',
		'height':(leftBoxHeigh-60)+'px',
		'border':'none'
	})
})