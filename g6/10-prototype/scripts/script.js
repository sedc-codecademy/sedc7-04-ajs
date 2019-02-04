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
let arr = [1,2,3]
arr.myCustomMap()



























