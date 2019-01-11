function addRange (start, end) {
    let sum = 0;
    for (let index = start; index <= end; index++) {
        sum += index;
    }
    return sum;
}

console.log(addRange(11, 20));

// things we can do with values
let a = 3;

function return3() {
    return 3;
}

function print(value) {
    console.log(value);
}

print(3);
print(a);

// function as a value;
print(addRange(1, 10));
print(addRange);

let secondFunction = addRange;
print(secondFunction(1, 10));

// function expressions

let double = function (number) {
    return number * 2;
};

let triple = number => number * 3;

console.log(double(10));
console.log(triple(10));

let weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x29
}

let getAge = person => person.age;
// function(person) {
//     return person.age;
// }

console.log(getAge(weko));

let misteryFunction;

let half = Math.random() > 0.5;

if (half) {
    misteryFunction = double;
} else {
    misteryFunction = triple;
}

//misteryFunction = half ? double : triple;

console.log(`The result from the mistery function is ${misteryFunction(15)}`);

// this randomly returns person or undefined;
function getPerson() {
    let half = Math.random() > 0.5;
    if (half){
        return {
            firstName: "Wekoslav",
            lastName: "Stefanovski",
            age: 0x29
        }
    };
}

let getName = function () {
    let person = getPerson();
    // if (person !== undefined) {
    //     return person.firstName;
    // } else {
    //     return "Unknown";
    // }
    // if person return firstName else return Unknown
    return person ? person.firstName : "Unknown";
}

console.log(getName());

// Create a function that takes two parameters
// - A person that has a first and last name
// - A boolean that specifies whether to return the first or the last name

let getNamePart = function (person, getFirstName){
    return getFirstName ? person.firstName : person.lastName;
}

// getNamePart(weko, true) === "Wekoslav";
// getNamePart(weko, false) === "Stefanovski";