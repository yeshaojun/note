// 1.变量的定义和使用
	// 声明（var a）告诉系统，什么也不做
	//声明+赋值（var a=9;）
	// 变量名:可以是字符，数字，下划线，中文，但不能用关键字

// 2.变量的作用域
	// 全局变量
	// 局部变量
	// 闭包

// 3.变量类型
	// js是一种弱语言
	// string,number,bool,object,function
	// 对象是由更小的一个单元组成的一个集合
	// VQuery选择器

// 4.变量的转换
	// 1.
		// parseInt()转化成数字 
		// 提取其中的数字,但数字必须开头，parseInt('12px')=12 
		// NaN——> Not a Number,NaN跟任何数相加都为NaN
		// isNaN():判断是否是数字

	// 2.
		// parseFloat
	// 3.
		// Number 比较严格，必须要求所有的都是数字

	// 隐式类型转换——不用说，系统自动转换
	// ==可以做隐式类型转换，先把两边的东西转换成一样的类型，然后再比价
	// ===不做转换，直接比较

// 5.变量的使用习惯
	// 变量只存储一种类型
	// 匈牙利命名法 (oDivUserName)
		// 1.首字符大写
		// 类型前缀
			// o——>object
			// a——>array
			// s——>string
			// i——>interger
			// f——>float
	