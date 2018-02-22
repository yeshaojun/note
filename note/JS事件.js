// 焦点：使浏览器能够区分用户输入的对象，当一个元素有焦点的时候，他就可以接收用户的输入
// 我们可以通过一些方式给元素设置焦点
// 点击，Tab,JS
// 不是所有元素都可以接收焦点，能相应用户操作才有焦点

// onfouce 焦点事件 onblue失去焦点事件
// obj.focus()给指定的元素设置焦点
// obj.blur()取消元素的焦点
// obj.select()选择指定元素的文本内容（可交互性内容）


// Event对象：事件对象，当一个事件发生的时候，和当前这个对象发生的有关的信息都会被存到一个临时的
// 指定地方，供我们在需要的时候调用

// 兼容
// ie/chrome:event是一个内置的全局对象
// 事件对象必须在事件调用的时候才能使用，一个函数是不是事件函数，不是在定义的时候决定的
// 而是在调用的时候决定的

// 标准：事件对象是通过事件函数的第一个参数传入
// 如果一个函数是被事件调用的，第一个参数就是event对象

var ev=ev || event;

// clientX,clientX 当事件发生的时候，当前鼠标到可视区的距离
// onmouseover:当鼠标在一个元素上面移动的触发，触发频率不是以像素为单位的，而是时间间隔

// 事件冒泡：当一个元素接受到事件的时候，会把他接受到的所有事件传播到父级，一直到顶层
// <div id="div1">
// 	<div id="div2">
// 		<div id="div3"></div>
// 	</div>
// </div> 
// odiv1.onclick=fn1(); 给**元素加事件，给元素加事件处理函数，告诉div接受一个点击事件
//事件函数绑定
// 阻止冒泡：当然要阻止冒泡的时间函数中调用 event.cancelBubble=true;

//事件捕获（事件的第二种绑定方式）
// 只能在标准下面使用

// 给一个对象绑定一个事件的第一种形式：obj.onclick=fn;
// 第一种是赋值形式，添加新的事件会覆盖原来得事件

// 给一个对象变的同一个事件绑定不同的函数
// ie：obj.attachEvent(事件名称（onclick），事件函数);
		// 1。没有捕获
		// 2.事件名称有on
		// 3。事件函数执行的顺利，标准正序，非标准反序
		// 4.this指向window
// 标准下：obj.addEventListener(事件名(click)，事件函数，是否捕获);
		// 1.有捕获
		// 2.没有on
		// 3.执行的顺序是正序
		// 4.this指向触发该事件的对象
// 是否捕获 默认是false false:冒泡 true：捕获

// call:函数下的一个方法（调用函数）
// f1()等价于f1.call()
// call可以传参，call方法的第一个参数可以改变函数执行过程中内部的this指向，从第二个参数开始就是原函数的参数列表

// 函数绑定
function bind(obj,evname,fn){
	if(obj.addEventListener){
		obj.addEventListener(evname,fn,false);
	}
	else{
		obj.attachEvent('on'+evname,function(){
			fn.call(obj);
		})
	}
}

// 事件捕获:从父级进入目标点。
// 先进入，再出去，先捕获在冒泡


// 事件函数的取消
// 第一种取消方式：document.onclick=null;
// 第二种：ie:obj.detachEvent(事件名称，事件函数)；
// 标准：obj.removeEventListener(事件名称，事件函数，是否捕获)

// 事件取消
function unbind(obj,evname,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(evname,false);
	}
	else{
		obj.detachEvent(事件名称，事件函数);
	}
}


// 键盘事件

// onkeydown:当键盘按键按下的时候
// onkeyup:当键盘按键抬起的时候
// event.keyCode：数字类型 键盘按键的值 键值（）
	// ctrlKey,shifKey，altKey 布尔值
	// 当一个事件发生的时候，如果ctrl ||shift || alt 是按下的状态，返回true，否则false

document.onkeydown=function(ev){
	var ev=ev || event;
}

// 键盘控制div移动
// 不是所有元素都能接收键盘事件，能相应用户输入的元素，能够接收焦点的元素
// onkeydown:如果按下不抬起，那么会连续触发
//定时器
document.onkeydown=function(ev){
	var ev=ev || event;
	switch(ev.keyCode){
		case 37:
		odiv.style.left=
		break;
		case 37:
		odiv.style.top=
		break;
		case 37:
		odiv.style.left=
		break;
		case 37:
		odiv.style.top=
		break;
	}
}


// 事件默认行为：当一个事件发生的时候，浏览器自己会默认做的事情
// 怎么阻止？

// 当前这个行为是什么事件触发的？，然后在转增事件的处理函数中使用 return false;
// oncontextmenu:右键菜单事件，当右键菜单（环境菜单）显示时触发
// 自定义右键菜单

// cookie:存储数据，当用户访问了某个网站(网页)的时候，我们就可以通过cookie对象访问
	// 1.不同的浏览器存放的cookie位置不一样，也不能通用
	// 2.cookie存储是以域名形式进行区分
	// 3.cookie的数据可以设置名字
	// 4.一个域名下存放的cookie的个数是由限制的
	// 5.每个cookie存放的内容大小也是有限制的，不同浏览器不同

	// cooki是临时存储，默认关闭浏览器的时候自动销毁

	// 编码：encodeURL()  解码：decodeURL()   

	// 如果想长时间设置cookie，必须给cookie设置一个过期时间 document.cookie='名称=值';exprires='时间字符串'

// document.cookie='名字=值'； document.cookie='name=0'  读取：document.cookie 得到字符串，包含了cookie里面的所有值

// 设置cookie
function setCookie(key,value,t){
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+t);
	document.cookie=key+'='+value+';expires='+oDate.toGMTString();

}


// 读取cookie特定的值
function getCookie(key){
	var arr1=document.cookie.split(';');
	for(var i=0;i<arr1.length;i++){
		var arr2=arr[i].split('=');
		if(arr[0]==key){
			return decodeURL(arr2[1]);
		}
	}
}
//删除cookie
function removeCookie(key){
	setCookie(key,'',-1);
}

// 鼠标滚轮事件：onmousewheel
// ff:DOMMouseScroll 必须用addEventListener
// 标准：ev.wheelDelta  ff:ev.detail


// return false 阻止的事是 obj.on 事件=名称这种形式
// addEventListener 方法阻止需要用 ev.preventDefault