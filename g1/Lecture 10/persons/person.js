const g1Students = [];

const firstNames = ["Todor", "Goran", "Jovan", "Vladimir"];
const lastNames = ["Janevski", "Kuzmanoski", "Jovanovski", "Poposki"];

// with factory function
// for (let index = 0; index < 4; index++) {
//     const student = makeMeAPerson(firstNames[index], lastNames[index]);
//     g1Students.push(student);
// }

// g1Students.push(makeMeAPerson("Natasha", "Andova"));

// console.log(g1Students.map(student => student.getFullName()));

function makeMeAPerson(firstName, lastName) {
    const result = {};
    result.firstName = firstName;
    result.lastName = lastName;
    result.getFullName = function () {
        console.log(this);
        return `${this.firstName} ${this.lastName}`;
    };

    return result;
}

// with constructor function

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        console.log(this);
        return `${this.firstName} ${this.lastName}`;
    };
}

for (let index = 0; index < 4; index++) {
    const student = new Person(firstNames[index], lastNames[index]);
    g1Students.push(student);
}

g1Students.push(new Person("Natasha", "Andova"));

console.log(g1Students.map(student => student.getFullName()));

