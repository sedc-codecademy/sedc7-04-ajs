const fs = require("fs");

const fileReader = {
    readJson(fileName) {
        return new Promise((resolve, reject) => {
            fs.readFile(fileName, { encoding: "UTF8" }, (err, data) => {
                if (err) {
                    reject(err);
                }
                const values = JSON.parse(data);
                resolve(values);
            })
        });
    }
}

function getMaxSugar() {
    return -1;
}

console.log(getMaxSugar());