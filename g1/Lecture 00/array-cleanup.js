let array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

/*
null
undefined
NaN
"" (empty string)
*/
function cleanUp(array) {
    let cleanArray = [];
    for (let element of array) {
        let isNotNull = element !== null;
        let isNotUndefined = element !== undefined;
        let isNotNaN = typeof element !== "number" || !isNaN(element);
        let isNotEmpty = element !== "";

        if (isNotNull && isNotEmpty && isNotNaN && isNotUndefined) {
            cleanArray.push(element);
        }
    }
    return cleanArray;
}

let result = cleanUp(array);
console.log(`Input = ${array}`);
console.log(array);
console.log(`Result = ${result}`);
console.log(result);

console.log("------");
console.log(cleanUp([1, NaN, 2, [3, NaN, 5]]));