const fs = require('fs')

const { sayMyName, sayMyProfession, sayMyProfession2 } = require('./myScript.js')
sayMyProfession2()
// var titleCase = require('title-case');

// console.log(titleCase('allLowerLetters'))
const log = msg => {
    let entry = `[${new Date()}] ${msg}
    `

    fs.appendFileSync('./logInfo.txt', entry)
}

let shelf = JSON.parse(fs.readFileSync('./shelf.json', 'utf8'))

for (const book of shelf) {
    log(`Read book with title ${book.title}`)
}


fs.writeFileSync('./updated_shelf.json', JSON.stringify(shelf, null, 2))
log(`updated_shelf.json created`)

// console.log(shelf)