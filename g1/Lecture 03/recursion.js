// 5! = 5 * 4 * 3 * 2 * 1;

// function factoriel(number) {
//     let result = 1;
//     for (let index = 1; index <= number; index++) {
//         result *= index;
//     }
//     return result;
// }


// 5! = 5 * 4!;

// n! = n * (n-1)!

function factoriel(number) {
    if (number === 0) {
        return 1;
    }
    return number * factoriel(number-1);
}

let input = 5;

let display = () => {
    document.getElementById("result").textContent = 
        `Result of ${input}! is ${factoriel(input)}`;
}