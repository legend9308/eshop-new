// 下拉
var $selBtn=$('.sel-btn')
var $selMenu=$('.sel-menu')
$selBtn.on('mousedown',function(){
	$('#select-box').addClass('selected');
});
$selBtn.on('mouseup',function(){
	$('#select-box').removeClass('selected');
	$selMenu.toggle();
});
$('li',$selMenu).on('click',function(){
	$('p',$selBtn).html($(this).html());
	$selMenu.hide();
});
$(document).on('click',function(e){
	if(e.target!=$selBtn[0]&&e.target!=$('p',$selBtn)[0]&&e.target!=$('span',$selBtn)[0]){
		$selMenu.hide();
	}
});

// 选项卡
$('#btns-box li').on('click',function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.tab-item').eq($(this).index()).show().siblings().hide();
});