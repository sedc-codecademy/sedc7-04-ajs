
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

## Scope
Scope is nothing more then a barrier. This barrier doesn't let anyone access the code in the barrier from the outside, but allows the code that is inside it do access things outside of it. In JavaScript there are three types of scopes. Global, Function and Block scope. 

### Function scope ( local scope )
In JavaScript, every function creates a scope around it's code. So everything inside the function **{ }** and the parameters are included in the scope of a function. Because everything is in the function scope, we can use variables that are declared inside of it only in the function. For the outside those variables does not exist. When we declare a variable with the keyword **var** inside of a function, that variable is bound only to that function. Nobody can call it from the outside, because to the outside, it doesn't exist.
```javascript
function getFullName(firstName, lastName) {
	var result = `${firstName} ${lastName}`;
	console.log(result);
}
getFullName("Cave", "Johnson"); // Will log Cave Johnson in the console
console.log(result); // Will throw an Uncaught Reference Error
// It throws this error because it can't find a variable named result
```
![Scopes Example](https://github.com/Drakso/AJS2019/blob/master/Class3/Img/scopeImage2.PNG?raw=true)
### Block scope
A block scope is a new barrier introduced in ES6. It is another type of scope that coexists with the function scope. So if the function scope created a barrier between the function and the outside world, the block scope creates a barrier between a block of code and the outside world. A block of code is code that is enclosed in **{ }**.  When we declare a variable with the keyword **let** inside any block of **{ }** that variable is bound only to that block. Nobody can call it from outside of that block. To the outside, this variable does not exist.
```javascript
function getFullName(firstName, lastName) {
	if(firstName.length > 1 && lastName.length > 1){
		let blockResult = `${firstName} ${lastName}`;
		var functionResult = `${firstName} ${lastName}`;
		console.log(blockResult); // Will log full name in the console
	}
	console.log(functionResult); // Will log full name in the console
	console.log(blockResult ); // Will throw Uncaught Reference Error
}
getFullName("Cave", "Johnson"); // Will log Cave Johnson in the console
console.log(blockResult); // Will throw an Uncaught Reference Error
console.log(functionResult); // Will throw an Uncaught Reference Error
```
functionResult can be accessed anywhere in the function because it is declared with **var** and is contained only in the function **{ }**.  blockResult can be accessed only in the if block ( inside the if **{ }** ) because it is declared with **let**. It is always a good practice for our variables to be contained in the block that they are in so that is why let is always a smarter option to use. 

### Global scope
The global scope is the space of our script. Everything that is not inside a function or block scope, lives in the global scope. That is why sometimes you might hear people calling the variables declared outside of all functions, global variables. 
```javascript
let first = "Cave";
let last = "Johnson";
function getFullName(firstName, lastName) {
	if(firstName.length > 1 && lastName.length > 1){
		let result = `${firstName} ${lastName}`;
		console.log(result); // Will log full name in the console
	}
}
getFullName(first, last); // Will log Cave Johnson in the console
console.log(first); // Will log Cave in the console
console.log(last); // Will log Johnson in the console
console.log(result); // Will throw an Uncaught Reference Error
```
#### Multiple functions scopes example
```javascript
let ten =  10; // Global scope
function sumPlusOne(num1, num2){
	let one =  1; // Function sumPlusOne scope
	console.log(num1 + num2 + one);
	function add5(number){
		console.log(number +  5); // Function add5 scope
	};
	add5(one);
	function add10(number){
		console.log(number +  ten); // Function add10 scope
	};
	add10(ten);
}
sumPlusOne(ten,7);
```
![Scopes Example Colored](https://github.com/Drakso/AJS2019/blob/master/Class3/Img/scopeImage1.PNG?raw=true)
## Self invoked functions
Self invoked functions or immediately-invoked function expressions (IIFE), are functions that are not just written on the spot but also called and executed at the same time. Basically what we usually do to create a function like this, is we create an anonymous function at some point in our code and if we want to call it and execute it immediately we put brackets around it and brackets after it just like calling a function. This makes our anonymous functions handy not only when we want to declare at the spot but call it on the spot as well. These functions help us organise and use variables in enclosed spaces where they will not affect or polute the rest of our code. We can write code in our self invoked functions that will run at the moment and we will be sure that it will be contained in that function at that moment only. 
**Note:** We can name self invoked functions but there is no point in doing so most of the time. 
```javascript
// Anonymous functions
let sayHello = function(name) { console.log(`Hello there ${name}!`)}
let sayHelloArrow = name => console.log(`Hello there ${name}!`);
sayHello("Bob"); // calling of anonymous function

// Self invoked functions
(function(name){console.log(`Hello there ${name}!`)})("bob");
(name => console.log(`Hello there ${name}!`))("bob");
```
### Using self invoked functions
```javascript
// Self invoked function result as variable
let fullName = ((first, last) => `${first} ${last}`)("Cave", "Johnson");

// Self invoked function result as an argument
function sum(num1, num2){
	return num1 + num2;
}
let number1 = 25;
let number2 = "15";
let result = sum(number1, (num=> parseInt(num))(number2));

// Self invoked function result as a return of another function
function sayHello(inputName){
	return (name => {
		if(name.length <= 0) { return "No name"}
		else if(name.length < 2) { return "Too short"}
		else { return `Hello there ${name}`}
	})(inputName)
}
console.log(sayHello("Bob"));
```

## Extra materials &#x1F4D9;
[First class functions](https://medium.freecodecamp.org/discover-the-power-of-first-class-functions-fd0d7b599b69)

[Scopes explained](https://andy-carter.com/blog/variable-scope-in-modern-javascript)

[Self invoked functions and how to use them](https://idiallo.com/javascript/self-invoking-anonymous-function)
