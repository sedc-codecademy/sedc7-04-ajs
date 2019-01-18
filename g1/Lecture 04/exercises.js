/// only works for numbers
function flatten(array) {
    return array.toString().split(",").map(item => Number(item));
}


// function difference(first, second) {
//     return [
//         ...flatten(first).filter(f => !second.includes(f)),
//         ...flatten(second).filter(s => !first.includes(s))
//     ];
// }

function difference (first, second) {
    let result = [];
    for (const felement of flatten(first)) {
        let found = false;
        for (const selement of flatten(second)) {
            if (felement === selement) {
                found = true;
            }
        }
        if (!found) {
            result.push(felement);
        }
    }
    for (const selement of flatten(second)) {
        let found = false;
        for (const felement of flatten(first)) {
            if (felement === selement) {
                found = true;
            }
        }
        if (!found) {
            result.push(selement);
        }
    }
    return result;
}