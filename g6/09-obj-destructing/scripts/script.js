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