var btnBox = getClass('carousel-btns')[0];
var aBtns = btnBox.getElementsByTagName('li');
var aItem = getClass('carousel-item');
var oImgBox = getClass('carousel-imgs')[0];
var oCarousel = getClass('carousel')[0];
var iNow = 0;

for(i=0;i<aBtns.length;i++){
	aBtns[i].index=i;
	aBtns[i].onclick=function(){
		change(this.index);
		iNow = this.index;
	}
}

oCarousel.onmouseover = function(){
	clearInterval(timer);
}
oCarousel.onmouseout = function(){
	run();
}
function run(){
	timer = setInterval(function(){
		iNow++;
		change(iNow%aBtns.length);
	},2000);
}
run();

function change(idx){
	for(j=0;j<aBtns.length;j++){
			aBtns[j].className='';
		}
		oImgBox.style.left=-aItem[0].offsetWidth * idx+'px';
		aBtns[idx].className='selected';
}







