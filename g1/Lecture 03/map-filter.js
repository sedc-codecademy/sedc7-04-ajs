let input = [1, 2, 3, 4, 5, 6];

function double(numbers) {
    let result = [];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        const value = element * 2;
        result.push(value);
    }
    return result;
}

function triple(numbers) {
    let result = [];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        const value = element * 3;
        result.push(value);
    }
    return result;
}