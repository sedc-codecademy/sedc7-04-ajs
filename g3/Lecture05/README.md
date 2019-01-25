# Functions pt3 &#x1F34E;
## Pure functions

Pure functions or also known as mathematical functions

In mathematics, a function is a relation between a set of inputs and a set of permissible outputs with the property that each input combination is related to exactly one output.

OR

A pure function doesn't depend on and doesn't modify the states of variables out of its scope. Concretely, that means a pure function always returns the same result given same parameters. Its execution doesn't depend on the state of the system.Pure functions are a pillar of functional programming.
```javascript
function priceAfterTax(productPrice) {
	return (productPrice * 0.20) + productPrice;
}
```
## Impure function
```javascript
var tax = 20; \\Output depends on outside defined variable/value
function calculateTax(productPrice) {
return (productPrice * (tax/100)) + productPrice;
}
```

## Recursion

Loosely defined, recursion is the process of taking a big problem and sub-dividing it into multiple, smaller instances of the same problem.

Put into practice, that generally means writing a function that calls itself. Probably the most classic example of this concept is the factorial function.

You may remember from math class that the factorial of a number n is the product of all positive integers less than or equal to n. In other words, the factorial of 5 is 5 x 4 x 3 x 2 x 1. The mathematical notation for this is 5!.

Something interesting you might have noticed about that pattern: 5! is actually just 5 x 4!. And 4! is just 4 x 3!. So on and so forth until you get down to 1.

```javascript
function factorial( n ) {
  if ( n === 1 ) {
   	 return 1;
  }
  return n * factorial( n - 1 );
}
```
## Anonymous functions

Anonymous functions are created at runtime. The function operator can be used anywhere that it's valid to use an expression. For example you can use the function operator when a variable is being assigned, when a parameter is being passed to a function or in a return statement.

A function expression of an anonymous function assigned to the variable multiply:
```javascript
var multiply = function(x, y) {
   return x * y;
};

function flyToTheMoon()
{
	alert(‘We are flying to the moon’); \\Anonymous function executed
}
```

## SelfInvoked functions

Function expressions can be made "self-invoking".
A self-invoking expression is invoked (started) automatically, without being called.
Function expressions will execute automatically if the expression is followed by ().
You cannot self-invoke a function declaration.

```javascript
(function () {
  var x = "Hello!!";      // I will invoke myself
})();
```

## Closures

A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use and "Mozilla" is passed to alert.

```javascript
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

## Strict / NonStrict Evaluation

JavaScript's strict mode, introduced in ECMAScript 5, is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". 

Strict mode makes several changes to normal JavaScript semantics:
    1.	Eliminates some JavaScript silent errors by changing them to throw errors.
    2.	Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
    3.	Prohibits some syntax likely to be defined in future versions of ECMAScript.

```javascript
// Whole-script strict mode syntax
'use strict';
var v = "Hi! I'm a strict mode script!";

'use strict';

// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError
let eval = 5; // throws a TypeError

//Assignment or deleting to not-declared variable
number = 15; // throws a TypeError
delete number; // throws a TypeError

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = { get x() { return 17; } };
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // throws a TypeError
```

## Extra materials &#x1F4D9;

[official git documentation](https://git-scm.com/)
[learn git on fun way](https://learngitbranching.js.org/)