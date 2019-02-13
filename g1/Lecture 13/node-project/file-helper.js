const fs = require("fs");

const getJsonFromFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, {encoding: "UTF-8"}, (err, data) => {
            if (err) {
                reject(err);
            }

            const value = JSON.parse(data);
            resolve(value);
        })
    })
}


module.exports = {
    getJsonFromFile
}

