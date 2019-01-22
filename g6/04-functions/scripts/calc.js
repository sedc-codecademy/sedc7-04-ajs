
// function getWeight(obj) {
//     console.log(obj.name)
//     let totalWeight = obj.weight;
//     for(let child of obj.children) {
//         totalWeight += getWeight(child)
//         console.log(totalWeight)
//     }
//     return totalWeight;
// }

// console.log(getWeight(source))

let arr = [1, 'Hello', 0, 54, { name: 'Igor' }, NaN, undefined, [1, 2], null]

// extract all the truthy values of the 'arr' array
console.log(arr)
function getTruthyVals(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if(!!arr[i]) {
            result.push(arr[i]);
        }
    }
    return result
}
// our custom filter function 
function myFilter(arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result
}
// let truthyVals = arr.filter(el => !!el)
let truthyVals = myFilter(arr, el => !!el)
let someVals = myFilter(arr, el => el === 'Hello')

console.log('Arr with truthy vals ', someVals)
// find all the falsy values of the 'arr' array and change them to 'true'

function castFalsyToTruthy(arr) {
    let result =[]
    for (const el of arr) {
        if(el === 1) {
            result.push(2)
        } else {
            result.push(el)
        }
    }
    return result
}
// our custom map function
function myMap(arr, callback) {
    let result =[]
    for (const el of arr) {
        result.push(callback(el))
    }
    return result
}

// let changedVals = arr.map(el => !el ? 'true' : el)
let changedVals = myMap(arr, el => !el ? 'true' : el)
console.log('Arr of changed vals ', changedVals)

/**
 * .find()
 * .slice()
 * .splice()
 * .indexOf()
 * .includes()
 */
arr = [1,2,3,4,5,6]
 console.log(arr.reduce((sum, b) => {
    sum.push(b + 1)
    return sum
 }, []))




















