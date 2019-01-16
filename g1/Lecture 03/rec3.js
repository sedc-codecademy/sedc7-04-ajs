function sumIterate(numbers) {
    let result = 0;
    for (let index = 0; index < numbers.length; index++) {
        result += numbers[index];
    }
    return result;
}

function sumRecurse(numbers) {
    console.log(numbers);
    // for empty array, the sum is always zero
    if (numbers.length === 0) {
        return 0;
    }
    // breaks down numbers into the first element (head)
    // and all other elements (tail)
    let [head, ...tail] = numbers;
    console.log(head, tail);
    return head + sumRecurse(tail);
}