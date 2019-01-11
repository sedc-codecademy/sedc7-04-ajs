
// console.log("We are live!")
// function getDigits(number){
//   if(number < 0){
//     return number.toString().length -1;
//   }
//   return number.toString().length;
// }

// function oddOrEven(number){
//   return number % 2 === 0 ? "even" : "odd";
// }

// function positiveOrNegative(number){
//   return number < 0 ? "negative" : "positive";
// }

// function getStats(mainNumber){
//   return `Number: ${mainNumber},
//   Digits: ${getDigits(mainNumber)}, 
//   ${oddOrEven(mainNumber)}, 
//   ${positiveOrNegative(mainNumber)}`
// }

// console.log(getStats(25));
// console.log(getStats(-252));
// console.log(getStats(3));
// console.log(getStats(0));
// console.log(getStats(-7));

// let func = function() { console.log("Hello")};
// func();
// let array = [2, 4, 5, function(){ return 2 + 5 - 7 }];
// console.log(array);
// console.log(array[3]());

// let someResult = num => num + 10;
// console.log(someResult(25));
// let sumFunc = (num1, num2) => num1 + num2;
// console.log(sumFunc(25, 5));

let sumFunc1 = (num1, num2) => {
  let result = num1 + num2;
  console.log(`The result is: ${result}`)
  return result;
};
console.log(sumFunc1(22, 5));

let randomFunc = () => console.log("Hey guys!");
randomFunc();