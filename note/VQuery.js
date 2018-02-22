// 1.面向对象
// 2.Jquery
// 3.call可以改变this的指向
// 4.apply('ab',[])改变this的指向

function myAddEvent(obj,sEv,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+sEv,function(){
			if(false==fn.call(obj)){
				event.cancelBubble="true";
				return false;
			}
		});
	}
	else{
		obj.addEventListener(sEv,function(ev){
			if(false==fn.call(obj)){
				ev.cancelBubble="true";
				ev.preventDefault();//在ff和chrome中阻止默认事件

			}
		},false);	
	}

}

function getByClass(oParent,sClass){
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];
	var i=0;
	for(i=0;i<aEle.length;i++){
		if(aEle[i].className==sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;

}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}

}

function VQuery(vArg){
	// 用来保存选中的元素
	this.element=[];
	switch(typeof vArg){
		case 'function':
			myAddEvent(window,"load",vArg);
			break;

		case 'string':
			switch(vArg.charAt(0)){
				case '#': //id
					var obj=document.getElementById(vArg.substring(1));
					this.element.push(obj);
					break;

				case '.':
					this.element=getByClass(document,vArg.substring(1));
					break;

				default:
					this.element=document.getElementsByTagName(vArg);
			}
			break;
		case 'object':
			this.element.push(vArg);
	}
}

VQuery.prototype.click=function(fn){
	var i=0;
	for(i=0;i<this.element.length;i++){
		myAddEvent(this.element[i],'click',fn);
	}
	return this;
}

VQuery.prototype.show=function(){
	var i=0;
	for(i=0;i<this.element.length;i++){
		this.element[i].style.display='block';
	}
	return this;
}

VQuery.prototype.hide=function(){
	var i=0;
	for(i=0;i<this.element.length;i++){
		this.element[i].style.display='none';
	}
	return this;
}

VQuery.prototype.hover=function(fnOver,fnOut){
	var i=0;
	for(i=0;i<this.element.length;i++){
		myAddEvent(this.element[i],'onmouseover',fnOver);
		myAddEvent(this.element[i],'onmouseout',fnOut);
	}
	return this;
}

VQuery.prototype.css=function(attr,value){
	if(arguments.length==2){
		var i=0;
		for(i=0;i<this.element.length;i++){
			this.element[i].style[attr]=value;
		}
	}else{
		if(typeof attr=='string'){
			return getStyle(this.element[0],attr);
		}else{
			var i=0;
			for(i=0;i<this.element.length;i++){
				var k='';
				for(k in attr){
					this.element[i].style[k]=attr[k];
				}
			}
		}	
	}
	return this;
}

VQuery.prototype.attr=function(attr,value){
	if(arguments.length==2){
		var i=0;
		for(i=0;i<this.element.length;i++){
			this.element[i][attr]=value;
		}
	}
	else{
		return this.element[0][attr];
	}
	return this;
}

VQuery.prototype.toggle=function(){
		var i=0;
		var _arguments=arguments;
		for(i=0;i<this.element.length;i++){
			addToggle(this.element[i]);
		}
		function addToggle(obj){
			var count=0;
			myAddEvent(obj,'click',function(){
				_arguments[count++%_arguments.length].call(obj);
			})
		}
		return this;
}

VQuery.prototype.eq=function(n){
	return $(this.element[n]);
}

function appendArr(arr1,arr2){
	var i=0;
	for(i=0;i<arr2.length;i++){
		arr1.push(arr2[i]);
	}
}

VQuery.prototype.find=function(str){
	var aResult=[];
	var i=0;
	for(i=0;i<this.element.length;i++){
		switch(str.charAt(0)){
			case '.':
				var aEle=getByClass(this.element[i],str.substring(1));
				aResult=aResult.concat(aEle);
				break;
			default:
				var aEle=this.element[i].getElementsByTagName(str);

				appendArr(aResult,aEle);	
				// aResult=aResult.concat(aEle);
		}
	}
	var newVquery=$();
	newVquery.element=aResult;
	return newVquery;
}

VQuery.prototype.index=function(){
	var obj=this.element[0].parentNode.children;
	var i=0;
	for(i=0;i<obj.length;i++){
		if(obj[i]==this.element[0]){
			return i;
		}
	}
}

VQuery.prototype.on=function(sEv,fn){
	var i=0;
	for(i=0;i<this.element.length;i++){
		myAddEvent(this.element,sEv,fn);
	}
}

VQuery.prototype.extend=function(name,fn){
	VQuery.prototype[name]=fn;
};

function $(vArg){
	return new VQuery(vArg);
}