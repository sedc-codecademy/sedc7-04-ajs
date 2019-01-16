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

function sum(num1, num2){
    return num1 + num2;
}
// afdasdasdasdasdasdafdasdasdasdasdasdafdasdasdasdasdasd
//afdasdasdasdasdasdafdasdasdasdasdasdafdasdasdasdasdasd
//afdasdasdasdasdasdafdasdasdasdasdasdafdasdasdasdasdasd
// afdasdasdasdasdasdafdasdasdasdasdasdafdasdasdasdasdasd
//afdasdasdasdasdasdafdasdasdasdasdasdafdasdasdasdasdasd
//afdasdasdasdasdasdafdasdasdasdasdasdafdasdasdasdasdasd
sum.description = "This is a function that sums two numbers!";
sum.createdBy = "Dragan";
sum.modifiedBy = "Dejan";
sum.sumThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(sum.description);
console.log(sum(2,6));
console.log(sum.sumThree(2,5,6));



