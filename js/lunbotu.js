window.addEventListener('load',function(){
	// 1.箭头的显示与隐藏
	var top=document.querySelector('.top');
	var focus=document.querySelector('.focus');
	focus.addEventListener('mouseenter',function(){
		top.style.display='block';
		clearInterval(timer);
		timer=null;
	})
	focus.addEventListener('mouseleave',function(){
		top.style.display='none';
		timer=setInterval(function(){
			top.children[1].click();
		},3000)
	})
	// 动态生成小圆圈
	var ul=focus.querySelector('ul');
	var ol=focus.querySelector('ol');
	for(var i=0;i<ul.children.length;i++){
		var li=document.createElement('li');
		ol.appendChild(li);
	}
	//给第一个小圆圈添加类current
	ol.children[0].setAttribute('class','current');
	for(var i=0;i<ol.children.length;i++){
		ol.children[i].addEventListener('click',function(){
			for(var i=0;i<ol.children.length;i++){
				ol.children[i].removeAttribute('class','current');
				ol.children[i].setAttribute('data-index',i);
			}
			this.setAttribute('class','current');
			// 让图片跟随小圆圈移动
			var index=this.getAttribute('data-index');
			num=circre=index;
			animore(ul,-index*focus.offsetWidth);
		})
	}
	// 给左边箭头设置滚动事件
	var li_u=ul.children[0].cloneNode(1);
	ul.appendChild(li_u);
	var num=0;
	var circre=0;
	top.children[0].addEventListener('click',function(){
		if(num==0){
			num=ul.children.length-1;
			ul.style.left=-num*focus.offsetWidth+'px';
		}
		num--;
		animore(ul,-num*focus.offsetWidth);
		if(circre==0){
			circre=ul.children.length-1;
		}
		circre--;
		for(var i=0;i<ol.children.length;i++){
			ol.children[i].removeAttribute('class','current');
		}
		ol.children[circre].setAttribute('class','current');
	})
	// 右侧箭头设置滚动
	top.children[1].addEventListener('click',function(){
		if(num==ul.children.length-1){
			ul.style.left=0+'px';
			num=0;
		}
		num++;
		animore(ul,-num*focus.offsetWidth);
		if(circre==ul.children.length-1-1){
			circre=-1;
		}
		circre++;
		for(var i=0;i<ol.children.length;i++){
			ol.children[i].removeAttribute('class','current');
		}
		ol.children[circre].setAttribute('class','current');
	})
	// 自动播放
	var timer=setInterval(function(){
		top.children[1].click();
	},3000)
})