function move(obj , attr , target ,callback){
		obj.style[attr] = target + "%";//设置obj现在的位置
		callback && callback();
}