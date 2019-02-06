let obj = {}

let person = {
    name: 'Igor',
    lastName: 'Mitkovski',
    sayName() {
        return `Hi my name is ${this.name} ${this.lastName}`
    }
}

// let me = Object.create(person)
// me.name = 'Zoran'
// me
// console.log(me)

function Person(name, lastName) {
    this.name = name
    this.lastName = lastName
}
Person.prototype.sayName = function(){ return `Hi my name is ${this.firstName} ${this.lastName}`}

let me = new Person('Igor', 'Mitkovski')
let ali = new Person('Sameer', 'Ali')

me
ali.firstName = 'Sammeer'
console.log(me.sayName())
console.log(ali.sayName())

Person.prototype.sayHight = function() { return 'Im very tall' }

console.log(me.sayHight())


// Write your own map or filter function that will be available to every
// array that we create
// example of our custom map/filter function can be found in 
// the 4th class examples
// keep in mind that now since we are going to call our custom map/filter
// function on our array [myArr.myMap(el => el)] we dont need the first 
// parameter from our previous example
// Keep in mind u need to use the [this] keyword
// let arr = [1,2,3]
// arr.myCustomMap()

// With destruct
function Vehicle({ year, make }) {
    this.year = year
    this.make = make
}
// Without destruct
// function Vehicle( year, make ) {
//     this.year = year
//     this.make = make
// }
Vehicle.prototype.startEngine = function() { return 'brrrrrm brrrrm' }
Vehicle.prototype.year = '1960'

// With destruct
function Motorbike(obj) {
    let { model, transmition } = obj
    this.model = model
    this.transmition = transmition
    Vehicle.call(this, obj)
}

// Without destruct
// function Motorbike(model, transmition, year, make) {
//     this.model = model
//     this.transmition = transmition
//     Vehicle.call(this, year, make)
// }

let harley = {
    model: 'Davidoson',
    year: 1960,
    make: 'Harley',
    transmition: 'manual'
}

Motorbike.prototype = Object.create(Vehicle.prototype)

// For constructor functions with destruct
let myHarley = new Motorbike(harley)

// For the functions without destruct
// let myHarley = new Motorbike(harley)
harley
console.log(myHarley.startEngine())

function LivingBeing() {}

LivingBeing.prototype.canBeBorn = true
LivingBeing.prototype.isAllowedToDie = true
LivingBeing.prototype.canSpeak = 'Only in mysterious ways'

function Human(name) { this.name = name }
Human.prototype = Object.create(LivingBeing.prototype)
Human.prototype.canSpeak = true
Human.prototype.canEat = true
let Adam = new Human('Adam')
console.log(Adam.canBeBorn)
console.log(Adam.canSpeak)
console.log(Adam.isAllowedToDie)

let God = new LivingBeing()
console.log(God.canSpeak)
console.log(God.canEat)


// 
// Object.create(someObj) will create an object for us and set [someObj] as a 
// prototype to the created object



























