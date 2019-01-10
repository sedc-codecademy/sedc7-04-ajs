// completely inpure

// let someNumber = 150;

// function upToSomeNumber() {
//     let sum = 0;
//     for (let index = 1; index <= someNumber; index++) {
//         sum += index;
//     }
//     console.log(`The sum is ${sum}`);
// }

// someNumber = 150;
// upToSomeNumber();

// someNumber = 200;
// upToSomeNumber();

// someNumber = 250;
// upToSomeNumber();

// pure - by - input

// function upToSomeNumber(someNumber) {
//     let sum = 0;
//     for (let index = 1; index <= someNumber; index++) {
//         sum += index;
//     }
//     console.log(`The sum is ${sum}`);
// }

// upToSomeNumber(150);
// upToSomeNumber(200);
// upToSomeNumber(250);

// totally pure

function upToSomeNumber(someNumber) {
    // let sum = 0;
    // for (let index = 1; index <= someNumber; index++) {
    //     sum += index;
    // }
    // return sum;
    return someNumber * (someNumber +1) / 2;
}

console.log(`The sum up to 150 is ${upToSomeNumber(150)}`);
console.log(`Сумата до 200 is ${upToSomeNumber(200)}`);
console.log(`${upToSomeNumber(250)} up to 250 the sum is`);

let s50 = upToSomeNumber(50);
let s100 = upToSomeNumber(100);

let result = s50 * s100;
console.log(`The product of sums is ${result}`);

// Exercise 1:
// Make a function that calculates a full name

// Use it to write
// "Hello FirstName LastName" and
// "FirstName LastName, where are you?"
