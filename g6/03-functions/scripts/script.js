
(() => {
    // closure
    const outer = (a) => {
        const inner = b => {
            return a + b;
        }
        return inner
    }
    // IIFE
    ((a) => {
        return b => {
            return a + b;
        }
    })(5)(9)


    // let sumWithFive = outer(5)(5)
    // console.log(sumWithFive)
    // Write a pure function that will add 'ski' at the end of given 
// last names in an array
let lastNames = ['Petrov', 'Sulejmanov', 'Cavkov', 'Donev', 'Mitev', 'Artemov']

// Pure function
const addSki = arr => {
    var result;
    // let result = [];
    // arr.forEach(ln => result.push(`${ln}ski`))
    var result = arr.map(ln => `${ln}ski`)
    return result
}
// function addSki(arr) {
//     var result = new Array();
//     arr.forEach(function(lastName) {
//         result.push(lastName + 'ski')
//     })
//     return result
// }
// console.log(addSki(lastNames))
// console.log(lastNames)

// Write a recursive function for calculating 
//factoriel of a given number
// 6! === 720
// 6! 6 * 5!

// Recursion
const factoriel = num => num === 1 ? 1 : num * factoriel(--num);

// function factoriel(num) {
//     if(num === 1) {
//         return 1
//     }
//     return num * factoriel(num - 1)
// }

// console.log(factoriel(6))
// Write a recursive function for calculating sum of given array of numbers
let numArray = [5 ,12, 6, 2, 6, 765, 2, 12, 36, 4, 67, 2, 1, 85]

// Write a closure function that will calculate square of a given number
// Write the samecalculate


// callback
function myFunc(a, b, callback) {
    let result = a + b
    return callback(result)
}

function otherFunc(a) {
    return '' + a;
}

console.log(myFunc(4, 6, otherFunc))

})()
