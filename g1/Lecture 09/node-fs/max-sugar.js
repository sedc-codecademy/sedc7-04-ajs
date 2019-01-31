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

async function getMaxSugar() {
    // read the file with the fruit list (and pause until it's done)
    const fruits = await fileReader.readJson("./fruit-list.json");
    // get an array of promises of the reading of the files
    const fruitPromises = fruits
        // from a fruit's name get the name of the fruit's file
        .map(fruit => `./fruits/${fruit.toLowerCase()}.json`)
        // from a name of the fruit's file get a promise for the file's data
        .map(fruitFile => fileReader.readJson(fruitFile));

    // Promise.all transforms an array of promises to a promise of an array
    // await pauses until we have the array, and then unwraps the promise
    const fruitData = await Promise.all(fruitPromises);
    // reduces the list until we are left with a single element with maximum sugar
    return fruitData.reduce(
        // compare the current max with the new contender, and keep the bigger one
        (max, fruit) => max.sugars > fruit.sugars ? max : fruit, 
        // ensure that the first element runs good, by creating a current max
        // with the lowest possible ammount of sugar
        {sugars: Number.NEGATIVE_INFINITY}
    );
}


getMaxSugar().then(console.log);