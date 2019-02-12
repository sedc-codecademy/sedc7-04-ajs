const fs = require('fs');

let shelf = JSON.parse(fs.readFileSync('./../shelf.js', 'utf8'))

shelf.push({ title: 'My book', author: 'Igor Igeto' })


fs.writeFileSync('./../updated_shelf.js', JSON.stringify(shelf, null, 2))

console.log(shelf)