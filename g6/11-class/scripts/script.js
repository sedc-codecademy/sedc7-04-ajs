// function Person(name, lastName) {
//     this.name = name
//     this.lastName = lastName
// }

// Person.prototype.sayName = function () {
//     return `Hi my name is ${this.name} ${this.lastName}`
// }

// function Programmer(obj) {
//     let { languages } = obj
//     Person.call(this, obj)
//     this.languages = languages
// }

// Programmer.prototype = Object.create(Person.prototype)
// Programmer.prototype.turnCoffeeIntoCode = function () {
//     return `I turn coffee into code like a pro!!`
// }

// let template = {
//     name: 'Igor',
//     lastName: 'Mitkovski',
//     languages: ['JavaScript', 'C#']
// }

// let me = new Programmer(template)

// // console.log(me.sayName())
// // me

class Person {
   /*function Person */ constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }

    /*Person.prototype. */sayName() {
        return `Hi my name is ${this.name} ${this.lastName}`
    }
}

class Programmer extends Person {
    constructor(name, lastName, languages) {
        super(name, lastName) // Person.call(this, name, lastName)
        this.languages = languages
    }

    turnCoffeeIntoCode() {
        return `I turn coffee into code like a pro!!`
    }
}

let me = new Programmer('Igor', 'Mitkovski', ['JavaScript', 'Other cool language'])

// me
// console.log(me.turnCoffeeIntoCode())
// console.log(me.sayName())

// Animal properties: legs, tail, name, breed, function makeSound 'I go ${this.sound}'
// Dog properties: owner, dogSound
// Cat properties: roommate, catSound

class Human {
    constructor(name, birthYear) {
        this.name = name
        this.yearOfBirth = birthYear
        this._age
    }
    static feed(obj) {
        obj.belly = 'filled with delicious food'
    }
    get age() {
        return new Date().getFullYear() - this.yearOfBirth
    }
    set age(n) {
        this._age = n
    }
}
Object.create(null)
Object.assign({}, {})
let igor = new Human('Igor', 1988, 30)
let martin = new Object()
// martin.assign()
igor.belly = {}
Human.feed(igor.belly)
// igor._age = 22
console.log(igor.age)
Human.feed(igor)
console.log(igor)