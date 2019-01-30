
// console.log('one')
// console.log('two')
// console.log('three')
// setTimeout(() => {
//     console.log('four')
// }, 0)
// // alert('jhi')
// console.log('five')
// console.log('six')

// function one() {
//     two()
//     two()
// }
// function two() {
//     three()
//     three()
// }
// function three() {
//     four()
//     four()
// }
// function four() {
//     console.log('hello g6')
// }
const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.random() < 0.7
            return rand ? resolve() : reject()
        }, ms)
    })
}

console.log('one')
let promise = delay(1000)
const myFunc = () => console.log('hi')

myFunc()

promise.then(() => {
    console.log('two')
    return delay(1000)
}).then(() => {
    console.log('three')
    return delay(1000)
}).then(() => {
    console.log('four')
    return delay(1000)
}).then(() => {
    console.log('five')
    return delay(1000)
}).then(() => {
    console.log('six')
    return delay(1000)
}).catch(() => console.log('error'))


// one()
// setTimeout(() => {
//     console.log('one')
//     setTimeout(() => {
//         setTimeout(() => {
//             setTimeout(() => {
//                 setTimeout(() =>{
//                     console.log('five')
//                     setTimeout(() => {
//                         console.log('six')
//                     }, 1000)
//                 }, 1000)
//                 console.log('four')
//             }, 1000)
//             console.log('three')
//         }, 1000)
//         console.log('two')
//     }, 1000)
// }, 1000)

// let result = fetch(url)
// /**
//  * some code here...
//  */
// let jsonResult = result
// .then(r => r.json())
// .then(r => showOnScreen())
