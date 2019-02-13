// Require whole module
// const info = require('./info)

// Require both functions seperately 
// const myName = require('./info').sayMyName
// const myAge = require('./info').sayAge

// Require only necessary functions using destructing
const { sayMyName, sayAge } = require('./info');
// let myName = info.sayMyName()

console.log(sayMyName())