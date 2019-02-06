// let obj ={
//     name: 'Igor',
//     lastName: 'Mitkovski',
//     fullName: `${this.name} Mitkovski`,
//     getFIrstName() {
//         this.fullName = `${this.name} Mitkovski`
//     },
//     sayFullName() {
//         return `${this.name} ${this.lastName}`
//     }
// // }

// something['somethingElse']
// obj = {
//     'key with spaces': true
// }
// arr[0]
// obj['0']

// let newObj = {
//     name: 'Martin',
//     lastName: 'Panovski'
// }

// newObj.fullName = obj.fullName
// newObj.sayFullName = obj.sayFullName.bind(newObj)
// console.log(newObj)
// console.log(newObj.sayFullName())


function somFunc({a, b, c = 4, d = 3}, v) {
    console.log('hi')
}
function somFunc(obj) {
    let { a, b , c , d = 6 } = obj

    console.log(a, b, c, d, 'hi', Array.of(...arguments))
}


// let { 
//     a: numA,
//     b: numberOfB,
//     c,
//     d: {
//         c
//     }
// } = obj

let obj = {
    a: 1,
    b: 2,
    c: 4,
    d: {
        g: 6
    }
}
let obj2 = {}

let obg = {
    a: 1,
    b: {
        c: 2,
        arr: [1,2,3,4,6]
    }
}

obj2 = JSON.parse(JSON.stringify(obj))
Object.assign(obj2, obj)
obj2.d.g = 8
// somFunc(obj, 3, 2)

Array.of(1,2,3,4,5,[4,3,4],6,77)
[1,2,3,4,5,6,77]
// Object.assign(myFirstObj, SecondObj, ThirdObj)
console.log(Object.assign(obj, {c: 6}, {v: 8}))

let { a } = {b: 4, d: 2, a: 9 }
a

let obj = {
    name: 'Igor',
    lastName: 'Mitkovski',
    birthCity: {
        cityName: 'Bitola',
        population: 10000000,
        villages: ['Kravari', 'Kremenica', 'Medzitlija', 'Dolno Dupeni']
    }
}


// function info(name, city, population) {
//     return `Hi I'm ${name} I'm born in ${city} which has ${population} citizens`
// }
// function info({ name, birthCity: { cityName, population }}) {
//     return `Hi I'm ${name} I'm born in ${cityName} which has ${population} citizens`
// }
// let name
// let cityName
// let pop
// let name, lastName, population
// function info(obj) {
//     let { name, birthCity: { cityName, population }} = obj
//     return `Hi I'm ${name} I'm born in ${cityName} which has ${population} citizens`
// }

// let myInfo = info(obj)
// myInfo

function getEvenAndOdd(arr) {
    let evens = [], odds = []
    for (const num of arr) {
        if(num % 2 === 0) {
            evens.push(num)
        } else {
            odds.push(num)
        }
    }
    let result = []
    result.push(evens, odds)
    return result
}

// let evens, odds
// let result = getEvenAndOdd([1,2,3,4,5,6,7,8,9,0])

// for (const arr of result) {
//     if(arr[0] % 2 === 0) {
//         evens = arr
//     } else {
//         odds = arr
//     }
// }
// evens
// odds

let [evens, odds] = getEvenAndOdd([1,2,3,4,5,6,7,8,9,0])

evens
odds
