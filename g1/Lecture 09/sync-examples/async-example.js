const delay = function (ms) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

function calculate (x, y, operation) {
    console.log("Starting calculate");
    let resultPromise = undefined;
    if (operation === "+") {
        resultPromise = add(x, y);
    } else if (operation === "-") {
        resultPromise = subtract(x, y);
    }

    return resultPromise.then(result => {
        console.log("Ending calculate");
        return result || "Unknown operation";
    });
}

function add (x, y) {
    console.log("Starting add");

    const delayed = delay(0);

    // I can write code here

    return delayed.then(() => {
            console.log("After timeout");
            const result = x + y;
            console.log("Ending add");
            return result;
    });
}

function subtract (x, y) {
    console.log("Starting subtract");

    return delay(0).then(() => {
            console.log("After timeout");
            const result = x + y;
            console.log("Ending subtract");
            return result;
    });
}

const resolvedPromise = Promise.resolve();
// const rejectedPromise = Promise.reject();

function calculateArrays(firstArray, secondArray, operation) {
    const results = [];
    for (let index = 0; index < firstArray.length; index++) {
        const first = firstArray[index];
        const second = secondArray[index];
        const valuePromise = calculate(first, second, operation);
        results.push(valuePromise);
        
    }
    return Promise.all(results);
}

// calculateArrays([1, 2, 3], [10, 20, 30], "+") => [11, 22, 33]

async function reduceArray(array, operation) {
    let total = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        total = await calculate(total, element, operation);
    }
    return total;
}

// reduceArray([1, 2, 3, 4], "+") => 10