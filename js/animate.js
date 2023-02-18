function animore (obj,target,callback) {
				clearInterval(obj.timer)
					obj.timer= setInterval(function(){
						var stop=(target-obj.offsetLeft)/5;
						stop=stop>0?Math.ceil(stop):Math.floor(stop);
					obj.style.left=obj.offsetLeft+stop+'px';
				var _left=obj.offsetLeft;
					if(_left==target){
						clearInterval(obj.timer);
						if(callback){
							callback();
						}
					}
				},30);
			}