var allA = document.getElementsByClassName("aaa");
var number = 0;
let box3_carousel=document.getElementsByClassName('box3_carousel')[0];
	allA[number].style.backgroundColor = "#0052D9";
	allA[number].style.width = "30px";
	for(var j=0; j<allA.length ; j++){
		allA[j].num = j;
		allA[j].onclick = function(){
			number = this.num;
			//carousel.style.left = -100*index + "%";
			move(box3_carousel , "left" , -100*number ,function(){});
			setB();
		}	
	}
	autuChange2();
	function setB(){
		for(var j=0 ; j<allA.length ; j++){
			allA[j].style.backgroundColor = "white";
			allA[j].style.width = "15px";
		}
		allA[number].style.backgroundColor = "#0052D9";
		allA[number].style.width = "30px";
	}
	function autuChange2(){
		setInterval(function(){
			number++;
			if(number==3){
				number=0;
			}
			move(box3_carousel , "left" , -100*number , function(){
				setB();
			});
		},5000);
	}
	document.getElementsByClassName("right")[1].onclick = function() {setE()};
	document.getElementsByClassName("left")[1].onclick = function() {setF()};
	function setE(){
		number++;
		if(number==3){
			number=0;
		}
		move(box3_carousel , "left" , -100*number , function(){
			setB();
		});
	}
	function setF(){
		number--;
		if(number==-1){
			number=4;
		}
		move(box3_carousel , "left" , -100*number , function(){
			setB();
		});
	}