// Create Human constructor and a Male and Female constructors that will
// inherit from the Human constructor

// function Human(name, lastName, driversLicence, cookingSkills) {
//     this.name = name
//     this.lastName = lastName
//     this.driversLicence = driversLicence
//     this.cookingSkills = cookingSkills
// }

// Human.prototype.eat = function () {
//     return `Ate!`
// }

// function Male(facialHair, sportLifeID, beerBelly, name, lastName, driversLicence, cookingSkills) {
//     Human.call(this, name, lastName, driversLicence, cookingSkills)
//     this.facialHair = facialHair
//     this.sportLifeID = sportLifeID
//     this.beerBelly = beerBelly
// }



// function Female(hadBirth, numberOfShoes, name, lastName, driversLicence, cookingSkills) {
//     Human.call(this, name, lastName, driversLicence, cookingSkills)
//     this.hadBirth = hadBirth
//     this.numberOfShoes = numberOfShoes
// }

// Female.prototype = Object.create(Human.prototype)

// let olga = new Female(true, 44, 'Olga', 'Trpcevska', '1988-02.17', 'mhhh mhhh')
// let stojance = new Male('Ofc yes', 4432423, true, 'Stojance', 'Angelevski', '1973-02.17', 'its cool')
// stojance.eat = () => 'Ne mi se jadi'
// olga.eat()


// function HumanClass () { // class wrapper
// function Human(name, lastName, yearOfBirth) {
//     this.name = name
//     this.lastName = lastName
//     this.birthYear = yearOfBirth
// }

// Human.prototype.sayName = function () {
//     return `My name is ${this.name} ${this.lastName}`
// }
// }

class Human{
   /**function Human */ constructor(name, lastName, birthYear) {
        this.name = name
        this.lastName = lastName
        this.birthYear = birthYear
        this._age
    }
    get age() {
        return new Date().getFullYear() - this.birthYear
    }
    /**Human.prototype. */sayName() {
        return `My name is ${this.name} ${this.lastName}`
    }
}

class Male extends Human {
    constructor(hasBeard, name, lastName, birthYear) {
        super(name, lastName, birthYear)
        this.hasBeard = hasBeard
    }
    static trimBeard() {
        return `Beard trimmed`
    }
    watchFootbal() {
        return `Watching footbal`
    }
}

let me = new Male(true, 'Igor', 'Mitkovski', 1988, 30)
Array.isArray([])
me.age = 3
console.log(me.sayName())
console.log(me.watchFootbal())
console.log(Male.trimBeard(me))
me.age = 18
console.log(me.age)
