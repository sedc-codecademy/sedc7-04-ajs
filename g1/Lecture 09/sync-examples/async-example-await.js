const delay = function (ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function calculate (x, y, operation) {
    console.log("Starting calculate");
    let result = undefined;
    if (operation === "+") {
        result = await add(x, y);
    } else if (operation === "-") {
        result = await subtract(x, y);
    }

    console.log("Ending calculate");
    return result || "Unknown operation";
}

async function add(x, y) {
    console.log("Starting add");

    await delay(0);

    console.log("After timeout");
    const result = x + y;
    console.log("Ending add");
    return result;
}

async function subtract(x, y) {
    console.log("Starting subtract");

    await delay(0);

    console.log("After timeout");
    const result = x + y;
    console.log("Ending subtract");
    return result;
}

const resolvedPromise = Promise.resolve();
// const rejectedPromise = Promise.reject();

async function calculateArrays(firstArray, secondArray, operation) {
    const results = [];
    for (let index = 0; index < firstArray.length; index++) {
        const first = firstArray[index];
        const second = secondArray[index];
        const value = await calculate(first, second, operation);
        results.push(value);

    }
    return results;
}

// calculateArrays([1, 2, 3], [10, 20, 30], "+") => [11, 22, 33]

function reduceArray(array, operation) {
    let totalPromise = Promise.resolve(0);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        totalPromise = totalPromise.then(total => calculate(total, element, operation));
    }
    return totalPromise;
}

// reduceArray([1, 2, 3, 4], "+") => 10