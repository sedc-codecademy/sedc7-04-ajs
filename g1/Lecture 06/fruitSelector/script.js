document.getElementById("calculate").addEventListener("click", () => {
    getData();
})

// const getData = () => {
//     const fruitUrl = "http://10.10.83.142:8080/fruits.json";
//     const selectorUrl = "http://10.10.83.142:8080/selector.json"

//     fetch(fruitUrl)
//         .then(response => response.json())
//         .then(fruits => {
//             fetch(selectorUrl)
//                 .then(response => response.json())
//                 .then(selector => {
//                     const result = processData(fruits, selector);
//                     displayResult(result, selector.property, selector.type);
//                 });
//         });
// }

// const getData = async () => {
//     const fruitUrl = "http://10.10.83.142:8080/fruits.json";
//     const selectorUrl = "http://10.10.83.142:8080/selector.json"

//     // const fresponse = await fetch(fruitUrl);
//     // const fruits = await fresponse.json();

//     const fruits = await fetch(fruitUrl).then(response => response.json());
//     const selector = await fetch(selectorUrl).then(response => response.json());

//     const result = processData(fruits, selector);
    
//     displayResult(result, selector.property, selector.type);
// }

const getData = async () => {
    const fruitUrl = "http://10.10.83.142:8080/fruits.json";
    const selectorUrl = "http://10.10.83.142:8080/selector.json"

    const fruitsPromise = fetch(fruitUrl).then(response => response.json());
    const selectorPromise = fetch(selectorUrl).then(response => response.json());

    const [fruits, selector] = await Promise.all([fruitsPromise, selectorPromise]);

    // const fruits = resoved[0]
    // const selector = resolved[1];

    const result = processData(fruits, selector);
    
    displayResult(result, selector.property, selector.type);
}

const processData = (fruits, {type, property} ) => {
    // if (type === "max") {
    //     return processMax(fruits, property);
    // }
    // if (type === "min") {
    //     return processMin(fruits, property);
    // }
    // if (type === "sum") {
    //     return processSum(fruits, property);
    // }
    // throw `Invalid selector type ${type}`;

    const typeProcessors = {
        "max" : processMax,
        "min" : processMin,
        "sum" : processSum
    }

    const processor = typeProcessors[type];

    if (!processor) {
        throw `Invalid selector type ${type}`;
    }

    return processor(fruits, property);
}

const displayResult = (result, property, type) => {
    const typeTitles = {
        "max" : "Maximum value",
        "min" : "Minimum value",
        "sum" : "Sum"
    }

    const title = typeTitles[type];

    document.getElementById("result").textContent = `${title} of ${property} is ${result.toFixed(3)}`
}

const processMax = (fruits, property) => {
    let max = {
        [property]: Number.NEGATIVE_INFINITY
    };
    for (const fruit of fruits) {
        if (fruit[property] > max[property]) {
            max = fruit;
        }
    }
    return max[property];
}

const processMin = (fruits, property) => {
    let min = {
        [property]: Number.POSITIVE_INFINITY
    };
    for (const fruit of fruits) {
        if (fruit[property] < min[property]) {
            min = fruit;
        }
    }
    return min[property];
}

const processSum = (fruits, property) => {
    // let sum = 0;
    // for (const fruit of fruits) {
    //     sum = sum + fruit[property];
    // }
    
    return fruits.reduce((sum, fruit) => sum + fruit[property], 0)
}