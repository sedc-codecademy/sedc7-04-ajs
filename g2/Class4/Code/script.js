// 'use strict';
// function longestString(num1) {
// 	console.log(arguments) // first argument
// 	//console.log(arguments[1]) // second argument
// 	// console.log(arguments[2]) // third argument
// 	let longest = '';
// 	for (let i=0; i < arguments.length; i++) {
// 		//console.log(i+1 + ": " + arguments[i])
// 		if (arguments[i].length > longest.length) {
// 			longest = arguments[i];
// 		}
// 	}
// 	return longest;
// }

// console.log("Result:" + longestString("Hello", "Yo", "Super", "Hello SEDC", "HelLo SEDC", 2, true, null));



// let input1 = document.getElementById("number1").value;
// let input2 = document.getElementById("number2").value;
// function sum(num1, num2){
// 	return num1 + num2
// }
// console.log(sum(input1,input2))

// function subtract(num1, num2){
// 	return num1 - num2;
// }
// document.getElementById("result")
// .innerText = subtract(input1, input2);

// function multiply(num1, num2){
// 	let result = num1 * num2;
// 	return result;
// }
// function checkZero(num1){
// 	if(num1 === 0){
// 		return false;
// 	}
// 	return true;
// }
// function divide(num1, num2){
// 	if(checkZero(num2)){
// 		result = num1 + num2;
// 		return result;
// 	} else {
// 		return "Can't divide by zero";
// 	}
// }
// document.getElementById("result")
// 		.innerText = divide(1, 5);


// var number;

// number = 15;
// console.log(number);

// function sum(num1, num2){ 
// 	console.log("first:"+arguments[0]);
// 	console.log("second:"+arguments[1]);
// 	return num1 + num1;
// };
// console.log(sum(5,3));
// arguments[0] = 5;
// var num1 = 5
// arguments[1] = 3;
// var num2 = 3

var arguments = 2;
console.log(arguments);