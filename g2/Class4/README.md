# Functions pt3 &#x1F34E;
## Pure functions
Pure functions are functions that do not need or change anything in the outside world. There is no special syntax or code for pure functions. You wrote some pure functions until this point for sure without even knowing that you did it. Pure function is a state of a function that we always try to achieve. With pure function, our code is cleaner, more organised and decoupled ( with few connections and ties ). A code with pure functions is a code that can scale easily ( easier to continue working on and build on top of in the future ). Of course there are times when you need something from the outside or you need to change something outside of the function and it is not wrong to not write a function that is not pure. But every time you write a function ask your self:
* Can I request  for the stuff that I need through parameters instead of accessing them directly and get the same results?
* Can I return a value instead of changing a value from the outside directly and get the same results?
* Do I get the same result for passing the same arguments every time?
```javascript
// Pure function
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + 1)
    }
    return result;
}

// Impure function  ( using a variable from the outside )
let one = 1
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + one)
    }
    return result;
}
// Impure function ( mutating data from the outside )
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] += 1
    }
    return numbers;
}

// Impure function ( changing the DOM outside of the function )
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
		result.push(numbers[i] + 1)
        document.getElementById("result") += numbers[i] + " ";
    }
    return result;
}
```

## Function arguments
Every functions has a collection of all the arguments sent to that function when it was called. Since the person calling the function can send as much arguments as he wants, it's important to know how to check how many arguments were passed before continuing with your execution. 
```javascript
function longestString() {
	console.log(arguments[0]) // first argument
	console.log(arguments[1]) // second argument
	console.log(arguments[2]) // third argument
	let longest = '';
	for (let i=0; i < arguments.length; i++) {
		if (arguments[i].length > longest.length) {
			longest = arguments[i];
		}
	}
	return longest;
}
```

## Recursion
Functions can call other functions inside of them. But functions can also call them selves inside of their block of code. And because the function is calling it self and it self contains another call to the same function we can easily tell that recursion can have some unwanted effects right away. That is why when we are doing recursion ( calling the same function inside of it self ) we always make a condition, so at some point our function can stop calling it self. 
```javascript
// With function ( standard )
function sumTo(num) {
    if(num === 0) {
        return 0
    }
    return num + sumTo(num - 1)
}

// With an arrow function ( shorter )
let sumTo = num => num === 0 ? 0 : num + sumTo(--num)
```

## What is strict typing in JavaScript?
Javascript lets us do all sorts of magic things. But some might say it is too flexible of a language. For this reason, for securing our code from our selves and our mistakes as developers, something that is called **strict** typing exists. We tell at the start of our script or at the start of a function **'use strict';**. With this some extra rules are applied on your javascript code. Some of those are:
* Not allowing to pass value to an undeclared variable
* Not allowing to delete variables, functions or objects
* Not allowing declaring two parameters of a function with the same name
* Some extra names are not allowed to be used as variables ( are reserved for the language it self )

```javascript
'use strict';
// These lines of code will throw an error if we use strict
number = 15; // no declaration
delete number; // cant delete stuff
function sum(num1, num1){ return num1 + num1 }; // same parameter names
let eval = 5; // cant use keyword eval
let arguments = 2; // cant use ketworkd arguments
```