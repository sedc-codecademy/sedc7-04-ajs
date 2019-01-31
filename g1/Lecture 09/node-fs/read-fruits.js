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

// fs.readFile("./fruits.json", { encoding: "UTF8" }, (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const fruits = JSON.parse(data);
//     console.log(fruits);
// })

// fileReader
//     .readJson("./fruits.json")
//     .then(fruits => console.log(fruits));

async function main() {
    const fruits = await fileReader.readJson("./fruits.json");
    console.log(fruits);
}

main();
