// 实现命令计算器

'use strict'
// 1.接受参数 
const args = process.argv.slice(2); //[node 执行程序所在路径，'当前脚本地址路径'，。。。。]

// 2.分析参数

//p1,OP,p2

let parameter1 = args[0];
let operator = args[1];
let parameter2 = args[2];

// 3.进行运算

// let result=eval(`${parameter1} ${operator} ${parameter2}`);

switch(operator){
	case '+':
		result=parseFloat(parameter1)+parseFloat(parameter2);
		break;
	case '-':
		result=parseFloat(parameter1)-parseFloat(parameter2);
		break;
	case '*':
		result=parseFloat(parameter1)*parseFloat(parameter2);
		break;
	case '/':
		result=parseFloat(parameter1)/parseFloat(parameter2);
		break;
	default:
		throw new Error('不被支持');
}

console.log(result);