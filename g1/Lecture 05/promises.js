const numbers = ["one","two", "three", "four", "five", "six", "seven"];

const delay = function (ms) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const random = Math.random() < 0.9;
            return random ? resolve() : reject("You have bad luck");
            // resolve();
        }, ms);
    });
} 


// console.log("one");
// delay(1000)
// .then(() => {
//     console.log("two");
//     return delay(1000);
// })
// .then(() => {
//     console.log("three");
//     return delay(1000);
// })
// .then(() => {
//     console.log("four");
//     return delay(1000);
// })
// .then(() => {
//     console.log("five");
// })

// -----------

// console.log("one");
// const promise = delay(1000);

// // some code here ....
// promise.then(() => {
//     console.log("two");
//     return delay(1000);
// })
// .then(() => {
//     console.log("three");
//     return delay(1000);
// })
// .then(() => {
//     console.log("four");
//     return delay(1000);
// })
// .then(() => {
//     console.log("five");
// })

// -----------

// let promise = Promise.resolve();

// for (const number of numbers) {
//     promise = promise.then(() => {
//         console.log(number);
//         return delay(1000);
//     })
// }

// promise.catch((error) => {
//     console.log(`Error "${error}" occured`);
// });

// console.log("FOR LOOP DONE");
// console.log(promise);


const url = "https://raw.githubusercontent.com/sedc-codecademy/sedc6-mean/master/data/quiz.json";

fetch(url)
    .then(data => data.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
    