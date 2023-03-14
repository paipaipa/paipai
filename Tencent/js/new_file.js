	var allnA = document.getElementsByClassName("sss");
	var index = 0;
	let carousel=document.getElementsByClassName("carousel")[0];
	allnA[index].style.backgroundColor = "#0052D9";
	allnA[index].style.width = "30px";
	for(var i=0; i<allnA.length ; i++){
		allnA[i].num = i;
		allnA[i].onclick = function(){
			index = this.num;
			//carousel.style.left = -100*index + "%";
			move(carousel , "left" , -100*index ,function(){});
			setA();
		}	
	}
	autuChange();
	function setA(){
		for(var i=0 ; i<allnA.length ; i++){
			allnA[i].style.backgroundColor = "white";
			allnA[i].style.width = "15px";
		}
		allnA[index].style.backgroundColor = "#0052D9";
		allnA[index].style.width = "30px";
	}
	function autuChange(){
		setInterval(function(){
			index++;
			if(index==5){
				index=0;
			}
			move(carousel , "left" , -100*index , function(){
				setA();
			});
		},5000);
	}
	document.getElementsByClassName("right")[0].onclick = function() {setC()};
	document.getElementsByClassName("left")[0].onclick = function() {setD()};
	function setC(){
		index++;
		if(index==5){
			index=0;
		}
		move(carousel , "left" , -100*index , function(){
			setA();
		});
	}
	function setD(){
		index--;
		if(index==-1){
			index=4;
		}
		move(carousel , "left" , -100*index , function(){
			setA();
		});
	}
	