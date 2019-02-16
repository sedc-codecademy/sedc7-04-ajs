const fs = require('fs')
const { sayMyName, sayMyProfession } = require('./myScript')

var titleCase = require('title-case');

console.log(titleCase('allLowerLetters'))


let shelf = fs.readFileSync('./shelf.js', 'utf8')



fs.writeFileSync('./updated_shelf.js', data)


console.log(shelf)