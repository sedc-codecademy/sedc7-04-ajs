# Functions pt1

### Closures

A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables, in other words
a closure is a function declared inside another function, so we would say this function is enclosed in the outer function, thus the name closure
The closure can be called/executed inside the body of the outer function or it can simply be returned and executed at a later time/place in the code

The closure has three scope chains:

* it has access to its own scope - variables defined between its curly brackets
* it has access to the outer function's variables
* it has access to the global scope and its variables

```JavaScript
// ES5
function outer() {
    var b = 10;
    function inner() {
        var a = 20;
        console.log(a + b);
    }
    return inner;
}

// ES6
const outer = () => {
    let b = 10;
    const inner = () => {
        let a = 20;
        console.log(a + b);
    }
    return inner;
}
```
### Callbacks

A JavaScript Callback Function is a function that is passed as a parameter to another JavaScript function, and the callback function is run inside of the function it was passed into

```JavaScript
// Probably the first example of a callback you met at this academy
document.getElementById('#someButton').addEventListener('click', () => {
    // the body of our callback function
});

// other valid examples of a callbak would be:
function sum(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function calculate(a, b, callback) {
    let result = callback(a, b);
    return result;
}
calculate(2, 3, sum)
calculate(5, 4, multiply)
```

### Pure functions

Pure functions are characterized by two main things:

* They don't depend on any outer code (variables declared out of their scope)
* They don't change the value of the parameters we pass to them

Pure functions will take the parameters we pass to them do some calculation and return a value and because they don't depend on any outer code and they will not mutate/change the value of the parameter we send we are ensured that we will always get the same return value for the same parameters

```JavaScript
// Pure function
function increaseByOne(numbers) {
    let result = []
    for(let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + 1)
    }
    return result
}

// Impure function
let one = 1
function increaseByOne(numbers) {
    let result = []
    for(let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + one)
    }
    return result
}
// Impure function
function increaseByOne(numbers) {
    let result = []
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] += 1
    }
    return numbers
}
```

### Recursive functions

Recursive function is a function that calls itself.
This allows us to run the same function multiple times while only calling it ourselves only once.
With recursive functions we have to be careful not to create an infinite lopp, so we have to remember to set a condition upon which the function will return

```JavaScript
// ES5
function sumTo(num) {
    if(num === 0) {
        return 0
    }
    return num + sumTo(num - 1)
}

// ES6
const sumTo = num => num === 0 ? 0 : num + sumTo(--num)
```

### IIFEs

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

```JavaScript
(function() {
    console.log('I executed upon declaration')
})()

(() => {
    console.log('I executed upon declaration')
})()

!function() {
    console.log('I will execute upon declaration but whatever I return will be cast to boolean with opposite value')
}

(a => {
    console.log(a)
})('You can also pass parameters to IIFEs')
```
## More to read

[Closures](https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4)
[Callbacks](https://medium.freecodecamp.org/javascript-callbacks-explained-using-minions-da272f4d9bcd)
[Pure functions](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
[Recursive functions](https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f)