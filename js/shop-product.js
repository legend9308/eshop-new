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
	var target=e.target||event.srcElement;  //取事件源 后者是ie的 前者不兼容ie
	if(target!=selBtn&&target!=selP&&target!=oSpan){
		selMenu.style.display='none';
	}
}


//弹层

var oSmallImg = getClass('small-img')[0];
var aDialogLi = oSmallImg.getElementsByTagName('li');
var oDialogBox = getClass('dialog-box')[0];
var oDialogBody = getClass('dialog-body')[0];
var oDialogImg = oDialogBody.getElementsByTagName('img')[0];
var oDialogClose = getClass('dialog-close')[0];
var oDialogPrev = getClass('dialog-prev',oDialogBox)[0];
var oDialogNext = getClass('dialog-next',oDialogBox)[0];
var iNow = 0;
var oSlideBtn = getClass('slide-btn',oDialogBox)[0];
var oContent = getClass('content',oDialogBox)[0];

for(var i=0;i<aDialogLi.length;i++){
	aDialogLi[i].index=i;
	aDialogLi[i].onclick=function(){
		var oImg = this.getElementsByTagName('img')[0];
		oDialogBox.style.display='block';
		oDialogImg.src=oImg.src;
		oContent.style.animation='show 1s ease forwards';
		iNow=this.index;
	}
}
//关闭弹层
oDialogBox.onclick=function(e){
	var target=e.target||event.srcElement;
	if(target == oDialogBox||target==oDialogClose){
		oDialogBox.style.display='none';
	}
}

oDialogNext.onclick=function(){
	iNow++;
	if(iNow==aDialogLi.length){
		iNow=0;
	}
	slideNext();
	//oDialogImg.src=prevLi.getElementsByTagName('img')[0].src;
}
oDialogPrev.onclick=function(){
	iNow--;
	if(iNow==-1){
		iNow=aDialogLi.length-1;
	}
	slideNext();
}
var timer;
oSlideBtn.onclick=function(){
	if(timer){
		clearInterval(timer);
		timer='';
	}else{
		timer=setInterval(function(){
		oDialogPrev.onclick();
		},1000);
	}
}
function slideNext(){
	var nextLi = aDialogLi[iNow];
	var nextSrc=nextLi.getElementsByTagName('img')[0].src;
	var oImg = document.createElement('img');
	oImg.src = nextSrc;
	var oldImg=oDialogBody.children[0];
	oDialogBody.insertBefore(oImg,oldImg);
	oldImg.style.animation='hide 1s ease forwards';
	setTimeout(function(){
		oDialogBody.removeChild(oldImg);
	},1000);
}