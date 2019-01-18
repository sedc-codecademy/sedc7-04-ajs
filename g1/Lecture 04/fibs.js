// let counter = 0;

// function fibonacci(number) {
//     if ((number === 0) || (number === 1)) {
//         return 1;
//     }
//     return fibonacci(number - 1) + fibonacci(number - 2);
// }

let fibonacci = (() => {
    let results = {
        0: 1,
        1: 1
    };

    function fibonacci(number) {

        // console.log(`calculating for number ${number}`);
        // counter++;

        if (results[number]) {
            return results[number];
        }

        let result = fibonacci(number - 1) + fibonacci(number - 2);
        results[number] = result;
        return result;
    };

    return { 
        fn: fibonacci,
        getCache: () => ({ ...results})
    };

})();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calculate").addEventListener("click", () => {
        let number = document.getElementById("fibIndex").valueAsNumber;
        // counter = 0;
        let result = fibonacci.fn(number);
        document.getElementById("result").textContent = result;
        // console.log(counter);
    });
});


function whatever() {
    let a = 7;
    return (a === 7) ? 3 : 4;
}

// (function () {
//     let name = "Wekoslav";
//     console.log(name);
// })();

(() => {
    let name = "Wekoslav";
    console.log(name);
})();
