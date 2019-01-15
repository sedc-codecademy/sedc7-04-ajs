/// transform array === map

function double(numbers) {
    let result = [];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        const value = element * 2;
        result.push(value);
    }
    return result;
}

function triple(numbers) {
    let result = [];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        const value = element * 3;
        result.push(value);
    }
    return result;
}

function square(numbers) {
    let result = [];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        const value = element * element;
        result.push(value);
    }
    return result;
}

function addSkiSuffix(lastNames) {
    let result = [];
    for (let index = 0; index < lastNames.length; index++) {
        const element = lastNames[index];
        const value = element + "ski";
        result.push(value);
    }
    return result;
}

function factoriels(numbers) {
    let result = [];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        const value = factoriel(element);
        result.push(value);
    }
    return result;
}

function getAllProperties(numbers) {
    let result = [];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        const value = getProperties(element);
        result.push(value);
    }
    return result;
}


//

// functions that work on a single number, only differ in constant
// let doubleNumber = n => n * 2;
// let tripleNumber = n => n * 3;
// let quadNumber = n => n * 4;

// general function that works in all the cases - the constant is now a parameter
// let multiply = (x, y) => x * y;

// reimplement a single function as a call to the general one
// let doubleNumber = n => multiply(n, 2);


function transformArray(array, operation) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const value = operation(element);
        result.push(value);
    }
    return result;
}

let persons = [
    {
        name: "Wekoslav",
        lastName: "Stefanovski"
    }, 
    {
        name: "Trajan",
        lastName: "Stevkovski"
    }
];

// transformArray(persons, person => person.name)
// persons.map(person => person.name)

///

function getOddNumbers (numbers) {
    let result =[];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element % 2 !== 0) {
            result.push(element);
        }
    }
    return result;
}

function getLargerThanTen (numbers) {
    let result =[];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element > 10) {
            result.push(element);
        }
    }
    return result;
}

function filterArray(array, predicate) {
    let result =[];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
}


// for numbers, 
//  get all the odd ones
//  and for each of those get properties

// numbers
//   .filter(n => n % 2 !== 0)
//   .map(n => getProperties(n))

let lastNames = [
    "Jankov", 
    "Stefanovski", 
    "Johnson", 
    "Petrov", 
    "Blazevski"
];

let result = [
    "Jankovski",
    "Johnsonski",
    "Petrovski"
]

// numbers = [1, 2, 3, 4, 5]
// numbers.reduce( (sum, element) => sum + element ,0) 