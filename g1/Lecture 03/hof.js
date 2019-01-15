let add = (x, y) => x + y;

console.log(add(3, 5));

let add3 = y => 3 + y;

console.log(add3(5));

let add7 = y => 7 + y;
console.log(add7(5));

// let generateAdd = function (x) {
//     return y => x + y;
// }

let generateAdd = x => y => x + y;

let add10 = generateAdd(10);
console.log(add10(5));

console.log(generateAdd(3)(5));

//

function transformArray(array, operation) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const value = operation(element);
        result.push(value);
    }
    return result;
}


// function square(numbers) {
//     return transformArray(numbers, n => n*n);
// }

// function double(numbers) {
//     return transformArray(numbers, n => n+n);
// }

// function makeTransformer(operation) {
//     return function (array) {
//         return transformArray(array, operation);
//     }
// }

let makeTransformer = operation => array => transformArray(array, operation);

let square = makeTransformer(n => n ** 2);
let double = makeTransformer(n => n * 3);

let transformations = [
    square,
    double,
    makeTransformer(n => n + 4)
];

let numbers = [1, 2, 3, 4, 5];

console.log(transformations.map(operation => operation(numbers)));

// x^2 + 3x + 4;

console.log(transformations.reduce((result, operation) => operation(result), numbers));


let multiply = x => y => z => t => x * y * z * t;
multiply(5); // y => z => t => 5 * y * z * t
multiply(5)(4); // z => t => 5 * 4 * z * t
multiply(5)(4)(3); // t => 5 * 4 * 3 * t
multiply(5)(4)(3)(2); // 5 * 4 * 3 * 2

let getAdderOrMultiplier = x => {
    if (Math.random() > 0.5) {
        return y => x + y;
    }
    return y => x * y;
}

// returns a function that returns a specified property
let prop = property => obj => obj[property];

let weko = {
    name: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x29
}


let getNamePart = () => {
    let propName = Math.random() > 0.5 ? "name" : "lastName";
    return prop(propName);
}

console.log(getNamePart()(weko));
