// console.log("We are live!");

function sum(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
// console.log(sum(2, 4));

// let sum2 = (num1, num2) => num1 + num2;
// console.log(sum2(2, 4));

// let sumFail = sum();
// let sum3 = sum;
// console.log(sumFail);
// console.log(sum3(2, 4));

//let calcArray = [sum, subtract];
// let calcArray = [(num1, num2) => num1 + num2 , subtract];
// console.log(calcArray[0](8, 5));
// for (let func of calcArray) {
//     console.log(func(7, 2));
// }

// function calculator(func, num1, num2){
//     // find user who is calling function
//     // Write what function is called
//     // Report if there is problem
//     // Report if user enters undefined
//     return func(num1, num2);
// }

// console.log(calculator((num1, num2) => num1 + num2, 4, 6));
// console.log(calculator(subtract, 4, 6));

// function calculator9000(operation){
//     if(operation === "+"){
//         return (num1, num2) => num1 + num2;
//     } else if(operation === "-"){
//         return (num1, num2) => num1 - num2;
//     }
// }

// let myFunc = calculator9000("-");
// console.log(myFunc(2,6));

// function sum(num1, num2){
//     return num1 + num2;
// }
// // afdasdasdasdasdasdafdasdasdasdasdasdafdasdasdasdasdasd
// //afdasdasdasdasdasdafdasdasdasdasdasdafdasdasdasdasdasd
// //afdasdasdasdasdasdafdasdasdasdasdasdafdasdasdasdasdasd
// // afdasdasdasdasdasdafdasdasdasdasdasdafdasdasdasdasdasd
// //afdasdasdasdasdasdafdasdasdasdasdasdafdasdasdasdasdasd
// //afdasdasdasdasdasdafdasdasdasdasdasdafdasdasdasdasdasd
// sum.description = "This is a function that sums two numbers!";
// sum.createdBy = "Dragan";
// sum.modifiedBy = "Dejan";
// sum.sumThree = (num1, num2, num3) => num1 + num2 + num3;
// console.log(sum.description);
// console.log(sum(2,6));
// console.log(sum.sumThree(2,5,6));

// function getFullName(firstName, lastName){
//     var result = `${firstName} ${lastName}`;
//     console.log(result);
// }

// function getFullName1(firstName, lastName){
//     if(firstName.length > 1 && lastName.length > 1){
//         //var result = `${firstName} ${lastName}`;
//         let result = `${firstName} ${lastName}`;
//         var hello = "Hey there!";
//         console.log(result);
//     }
//     console.log(hello);
//     // console.log("Diskutabilno: " + result);
// }


// //getFullName("Cave", "Johnson");
// getFullName1("Cave", "Johnson");
// // console.log(result);

// // var y = 5;
// // var y = 6;
// // console.log(y);
// let x = 5;
// x = 6;
// console.log(x);

// let ten =  10; // Global scope
// function sumPlusOne(num1, num2){
// 	let one =  1; // Function sumPlusOne scope
//     console.log(num1 + num2 + one);
// 	function add5(number){
//         console.log(one);
//         let insideFunction = 100;
// 		console.log(number +  5); // Function add5 scope
//     };
//     //console.log(insideFunction); // WILL NOT WORK
// 	add5(one);
// 	function add10(number){
// 		console.log(number +  ten); // Function add10 scope
// 	};
// 	add10(ten);
// }
// sumPlusOne(ten,7);

// let func = () => {
//     let result = 5;
//     console.log(result);
// };

// func();

// let result = 5;
// console.log(result);

// result = 10;

// (() => {
//     let result = 5;
//     console.log(result);
// })();

// (function(num1, num2) {
//     console.log(num1 + num2);
// })(2, 5);

// let result = (function(num1, num2) {
//     return num1 + num2;
// })(7, 5);
// console.log(result);

function sum(num1, num2){
    console.log(num1 + num2);
}

sum((function suma(num1, num2) {
    return num1 + num2;
})(7, 5), 5)

