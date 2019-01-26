// var x = 5;
// var x;
// function someFunc (x) {
//     console.log(x)
//     let x = 7;
// }
// someFunc()

// for (var i = 0; i < 5; i++) {
//     button = document.createElement('button');
//     button.addEventListener('click', () => {
//         console.log(`Hi im button ${i}`)
//     })
//     button.textContent = `Button # ${i}`
//     document.body.appendChild(button) 
// }
// for (let i = 0; i < 5; i++) {
//     button = document.createElement('button');
//     button.addEventListener('click', () => {
//         console.log(`Hi im button ${i}`)
//     })
//     button.textContent = `Button # ${i}`
//     document.body.appendChild(button) 
// }
var x;
// window.name = 'Igor'
let myFunc = (s) => {
    console.log(s)
};
const obj = Object.freeze({
    name: 'Igor',
    sayName: (...args) => {
        return this.name + args[1] + args[0] + a
    }
})

// obj = 5
obj.sayName = 5
myFunc(obj.sayName(' Mitkovski', 43, 4, 4, 4))

// console.log(seven)
// seven = 7