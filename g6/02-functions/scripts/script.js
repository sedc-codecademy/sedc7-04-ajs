// normal ES5 syntax function
// function sum(a, b) {
//     return a + b
// }

// arrow function syntax
const sum = a => a + b;

// console.log() will never execute
function number(a) {
    return a
    console.log('Hello')
}

// we can pass function as a parameter in another function
let result = sum(3, number(6), 2)

// functions give us use of the arguments keyword which holds all the arguments we pass to
// that function
function myFullName(name, lastName) {
    if(arguments[2] === undefined) {
        return `${name} ${lastName}`
    }
    return `${name} ${arguments[2]} ${lastName}`
}

console.log(myFullName('Igor', 'Mitkovski', 'Igeto'))

// Write a function that returns the sum of all numbers between 0 and the 
// number parameter that we pass to that function

const sumTo = num => {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumTo(10))


const sumTo = num => num * (num + 1) / 2;


