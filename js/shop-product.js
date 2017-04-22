// 选项卡
var title=document.getElementById('btns-box');
var tit=title.getElementsByTagName('li');
var act=document.getElementsByClassName("act");
var del=document.getElementsByClassName("del-txt");

for(var i=0;i<tit.length;i++){
	tit[i].index=i;
	tit[i].onclick=function(){
		var oo=this.index;
		tit[0].className='';
		tit[1].className='';
		this.className='active';
		act[0].style.display='none';
		del[0].style.display='none';
		if (oo==0) {
			act[0].style.display='block';
		}else{
			del[0].style.display='block';
		}
	}
}



// 下拉

var selBtn=document.getElementById('sel-btn'),
	selBox=document.getElementById('select-box'),
	selP=selBtn.getElementsByTagName('p')[0],
	selMenu=document.getElementById('sel-menu'),
	selLi=selMenu.getElementsByTagName('li'),
	oSpan=selBtn.getElementsByTagName('span')[0];

selBox.onmousedown=function(){
	selBox.className='select-box selected';
}
selBox.onmouseup=function(){
	selBox.className='select-box';
	if (selMenu.style.display==''||selMenu.style.display=='none') {
		selMenu.style.display='block';
	}else{
		selMenu.style.display='none';
	}
}
// document.onclick=function(){
// 	selMenu.style.display='none';
// }
// selBtn.onclick=function(){
// 	if (selMenu.style.display==''||selMenu.style.display=='none') {
// 		selMenu.style.display='block';
// 	}else{
// 		selMenu.style.display='none';
// 	}
// }
for (var i = 0; i < selLi.length; i++) {
	selLi[i].onclick=function(){
		selP.innerHTML=this.innerHTML;
		selMenu.style.display='none';
	}
}

document.body.onclick=function(e){
	var target=e.target;  //取事件源 
	if(target!=selBtn&&target!=selP&&target!=oSpan){
		selMenu.style.display='none';
	}
}