'use strict'

let delay = ms =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let random = Math.random() < 0.7;
            return random ? resolve("Success random is true") : reject("error random is false");
        }, ms);
        
    })
};
debugger;
// delay(500).then(d =>{
//     console.log(d);
//     return delay(500);
// }).then(d =>{
//     console.log(d);
//     return delay(500)
// }).then(d=>{
//     console.log(d)
// })
// .catch(error =>{
//     console.log(error);
// });

async function callDelay(){
    console.log("start await")
    try {
        await delay(500);    
        console.log("end await");
        let res = await delay(500)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
callDelay();