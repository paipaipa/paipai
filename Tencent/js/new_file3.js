var number2 = 0;
let box2_carousel=document.getElementsByClassName('box2_carousel')[0];
autuChange3();
function autuChange3(){
	setInterval(function(){
			number2++;
			if(number2==4){
				number2=0;
			}
			move(box2_carousel , "left" , -100*number2 , function(){
			});
		},5000);
}
	document.getElementsByClassName("right_jiantou")[0].onclick = function() {setG()};
	document.getElementsByClassName("left_jiantou")[0].onclick = function() {setH()};
	function setG(){
		number2++;
		if(number2==4){
			number2=0;
		}
		move(box2_carousel , "left" , -100*number2 , function(){
		});
	}
	function setH(){
		number2--;
		if(number2==-1){
			number2=3;
		}
		move(box2_carousel , "left" , -100*number2 , function(){
		});
	}