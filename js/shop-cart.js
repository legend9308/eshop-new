// var oTab=document.getElementById('tab'),
// 	oInp=oTab.getElementsByClassName('check');

// oInp[0].onmouseup=function(){
// 	if(this.checked=='true'||this.checked==''){
// 		for (var i = 1; i < oInp.length; i++) {
// 			oInp[i].checked='true';
// 		}
// 	}else if(this.checked=='false'){
// 		for (var j = 1; j < oInp.length; j++) {
// 			oInp[j].checked='false';
// 		}
// 	}
// }

$('#tab tr:not(.tbhead)').on('click',function(e){
	if(e.target==$(this).find(':checkbox')[0]){
		e.target.checked=!e.target.checked;
	}
	if($(this).find(':checkbox').prop('checked')){
		$(this).find(':checkbox').prop('checked',false).end().removeClass('selected');
	}else{
		$(this).find(':checkbox').prop('checked',true).end().addClass('selected');
	}
	if($('#tab tr:not(.tbhead)').length==$('#tab tr:not(.tbhead)').find(':checked').length){
		$('#tab .tbhead').find(':checkbox').prop('checked',true);
	}else{
		$('#tab .tbhead').find(':checkbox').prop('checked',false);
	}
})
$('.tbhead :checkbox').on('click',function(){
	if(this.checked){
		$('#tab tr:not(.tbhead)').find(':checkbox').prop('checked',true).end().addClass('selected');
	}
	else{
		$('#tab tr:not(.tbhead)').find(':checkbox').prop('checked',false).end().removeClass('selected');
	}
})