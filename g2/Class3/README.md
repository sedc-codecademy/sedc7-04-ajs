
# Functions pt2 &#x1F34E;
## Functions as first class citizens
Functions are first class citizens in the JavaScript language. But what does a first class citizen mean? Well simply put, if some entity in a programming language has the power to be used as any other entity in that language, it is considered as a first class citizen. Why are functions in JavaScript considered first class citizens? Because they can act and be used as any other entity such as:
* Stored in a variable
* Stored in an array
* Used as an argument to another function
* Used as a return value from another function
* Have properties like objects
* Have methods like objects

If you don't believe it here are some crazy examples of what JavaScript functions are capable of:
#### Storing function as a variable
```javascript
let sayHello = function(name) { console.log(`Hello there ${name}!`) };
// we call the function from the variable the same as we do with functions
sayHello("Bob")
```
#### Storing functions in an array and using them
```javascript
let numberStatsFunctions = [
(num) => num > 0 ? "Positive" : "Negative",
(num) => num % 2 === 0 ? "Odd" : "Even",
(num) => num >= 0 ? num.toString().length : num.toString().length - 1
];
// We can call the functions from the array
// We can loop it with for as well
numberStatsFunctions[0](2); // Positive
numberStatsFunctions[1](2); // Even
numberStatsFunctions[2](2); // 1
```
#### Using function as an argument
```javascript
function calculator(calculateFunc, number1, number2){
	return calculateFunc(number1, number2);
}
function sum(number1, number2){ return number1 + number2 };
function difference(number1, number2){ return number1 - number2 };
// We send functions sum and difference to the calculator function
// We can send anonymous functions as well
console.log(calculator(sum, 3, 6)); // 9
console.log(calculator(difference, 40, 12)); // 28
```
#### Returning a function from another function
```javascript
function calculator(operation){
	switch(operation){  
		case  "+":  
		return function(number1, number2){ return number1 + number2 };
		break;  
		case  "-":  
		return function(number1, number2){ return number1 - number2 };
		break;  
		default:  
		console.log("ERROR")
		return null;
	}
}
// We call the calculator function and get back a function as a result
let result = calculator("+");
// We can call the result function now
console.log(result(2,5)); // 7
// We can also call the function right away
console.log(calculator("-")(7,2)); // 5
```
#### A function with properties and a method
```javascript
function sayHello(name){
	return `Hello there ${name}!`;
}
// Adding a properties to a function
sayHello.defaultName = "Bob";
sayHello.description = "This is a function that greets a person.";
// Getting property value from the function
sayHello(sayHello.defaultName ); // Hello there Bob!
// Adding a method to a function
sayHello.differentGreeting = function(name){
	return `Hi ${name}!`;
}
// Calling the method from the function
sayHello.differentGreeting("Bob"); // Hi Bob!
```
