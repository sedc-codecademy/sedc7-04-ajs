const fs = require('fs');

const log = msg => {
    const entry = `[${new Date()}] ${msg}
    `
    fs.appendFile('./logs.txt', entry, err => {
        if (!!err) {
            console.log(err)
        }
    })
}

let shelf = JSON.parse(fs.readFileSync('./../shelf.js', 'utf8'))

for (const book of shelf) {
    log(`Read book with title ${book.title}`)
}

shelf.push({ title: 'My book', author: 'Igor Igeto' })
log(`Added new book with title ${shelf[shelf.length - 1]['title']}`)


fs.writeFileSync('./../updated_shelf.js', JSON.stringify(shelf, null, 2))

console.log(shelf)