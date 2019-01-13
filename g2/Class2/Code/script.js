console.log("We are live!")

// Annonimous functions
let func = function() { console.log("Hello")};
func();
let array = [2, 4, 5, function(){ return 2 + 5 - 7 }];
console.log(array);
console.log(array[3]());

// Arrow functions
let someResult = num => num + 10;
console.log(someResult(25));
let sumFunc = (num1, num2) => num1 + num2;
console.log(sumFunc(25, 5));

let sumFunc1 = (num1, num2) => {
  let result = num1 + num2;
  console.log(`The result is: ${result}`)
  return result;
};
console.log(sumFunc1(22, 5));

let randomFunc = () => console.log("Hey guys!");
randomFunc();

// Spread syntax
function sumThreeNums(num1, num2, num3){
  return num1+num2+num3;
}
let arrayNumbers = [2,6,8, 6,2,6,8, 6];
console.log(sumThreeNums(...arrayNumbers));