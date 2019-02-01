function calculate (x, y, operation, callback) {
    console.log("Starting calculate");
    if (operation === "+") {
        add(x, y, (result) => {
            console.log("Ending calculate");
            callback(result);
        });
    } else if (operation === "-") {
        subtract(x, y, (result) => {
            console.log("Ending calculate");
            callback(result);
        });
    }
}

function add (x, y, callback) {
    console.log("Starting add");

    setTimeout(() => {
        console.log("After timeout");
        const result = x + y;
        console.log("Ending add");
        callback(result);
    }, 0);
}

function subtract (x, y, callback) {
    console.log("Starting subtract");

    setTimeout(() => {
        console.log("After timeout");
        const result = x + y;
        console.log("Ending subtract");
        callback(result);
    }, 0);
}