function calculate (x, y, operation) {
    console.log("Starting calculate");
    let result = undefined;
    if (operation === "+") {
        result = add(x, y);
    } else if (operation === "-") {
        result = subtract(x, y);
    }

    console.log("Ending calculate");
    return result || "Unknown operation";
}

function add (x, y) {
    console.log("Starting add");
    const result = x + y;
    console.log("Ending add");
    return result;
}

function subtract (x, y) {
    console.log("Starting subtract");
    const result = x - y;
    console.log("Ending subtract");
    return result;
}

function fibbonaci (number) {
    if ((number === 0) || (number === 1)) {
        return 1;
    }
    return fibbonaci(number-1) + fibbonaci(number-2);
}