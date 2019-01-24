const fs = require("fs");

fs.readFile("./fruits.json", { encoding: "UTF8" }, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const fruits = JSON.parse(data);
    for (const fruit of fruits) {
        const fruitString = JSON.stringify(fruit, null, 4);
        fs.writeFile(`./fruits/${fruit.name.toLowerCase()}.json`, fruitString, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        })
    }
})