function sum (first = 0, second = 0) {
    return first + second;
}
console.log("SUMS");
// two arguments
console.log(sum(2, 3));
// extra argument
console.log(sum(2, 3, 4));
// missing argument
console.log(sum(2));
// no arguments
console.log(sum());

console.log("getFullName");
function getFullName(firstName, lastName = "") {
    return `${firstName} ${lastName}`;
}

console.log(getFullName("Wekoslav", "Stefanovski"));
console.log(getFullName("Madonna"));

console.log("multiply");
function multiply(first = 0, second = 1) {
    return first * second;
}

// two arguments
console.log(multiply(2, 3));
// extra argument
console.log(multiply(2, 3, 4));
// missing argument
console.log(multiply(2));
// no arguments
console.log(multiply());

console.log("sumMany - with array");

function sumManyArray(values = []) {
    let result = 0;
    for (const number of values) {
        result += number;
    }
    return result;
}

console.log(sumManyArray([1, 2, 3, 4]));
console.log(sumManyArray([]));
console.log(sumManyArray());

console.log("sumMany - with spread");

function sumManySpread(...values) {
    console.log(`values is `, values);
    let result = 0;
    for (const number of values) {
        result += number;
    }
    return result;
}

console.log(sumManySpread(1, 2, 3, 4));
console.log(sumManySpread());

console.log(sumManySpread(1, 2, 3, 4, 5, 6));

console.log("set suffix");

function setSuffix(suffix, ...strings) {
    let result = [];
    for (const string of strings) {
        result.push(`${string}${suffix}`);
    }
    return result;
}

console.log(setSuffix("иќ", "Јанков","Стефанов","Марков"));

console.log("Get full name - parameter destructuring")

function getFullName (person) {
    let firstName = person.firstName;
    let lastName = person.lastName;
    return `${firstName} ${lastName}`;
}

let weko = {
    firstName: "Wekoslav",
    lastName: "Stefanovski",
    age: 0x29
}

console.log(getFullName(weko));

function getFullNameDestructured ( {firstName, lastName} ) {
    return `${firstName} ${lastName}`;
}

console.log(getFullNameDestructured(weko));

// button management

function handler({target: {textContent}}) {
    console.log(textContent);
}

let buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("click", handler);
}

// $("button").on("click", handler);