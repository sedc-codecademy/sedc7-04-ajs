let data = [];

function first() {
    setTimeout(() => {
        console.log(1);
    }, 2000);
}

function second() {
    console.log(2);
}

// first();
// second();


function doYourHomework(subject, callback) {
    console.log(`I'm done with homework ${subject}`);
    callback();
}

// doYourHomework("AJS");

function showProgress() {
    console.log("READY TO GO OUT!");

}

function showMe() {
    console.log("Show you");
}

doYourHomework('AJS--1', showMe);

getDataFromServer();
function getDataFromServer() {

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            return response.json();
            // throw new Error ("Nemas plateno za internet");
        })
        .then((data) => {
            //callback function 
            // console.log(data);
            handleResponse(data);
        })
        .catch((err) => {
            handleErrors(err);
        });
}

function handleErrors(err) {
    $(".errMsg").text("");
    $(".errMsg").text(err.message);
}


// let tableBody = $("#table-1 > tbody");
function handleResponse(data) {

    // for (const item of data) {
    //     tableBody.append(`${item.userId}`);
    // }
}


// 5 = 5 * 4 * 3 * 2 * 1 = 120;


function calcFactorial(n) {

    let result = 1;

    for (let i = 1; i <= n; i++) {
        console.log(`result ${result} = result(${result}) * i(${i})`);
        result *= i;
    }
    return result;
}


function recFatorial(n) {
    if (n === 0)
        return 1;
    console.log(`N = ${n}`);
    return n * recFatorial(n - 1);
}

console.log("Factorial of 5 is ", calcFactorial(5));
console.log("Factorial of 0 is ", recFatorial(0));


function sumToNumber(n) {
    if (n === 0)
        return 0;
    return n + sumToNumber(n - 1);
}


console.log("Sum to 10 = ", sumToNumber(10));


let inputElement = document.getElementsByTagName("input")[0];

document.getElementById("sum").addEventListener("click", (e) => {
    console.log(inputElement);
    let n = parseInt(inputElement.value);
    document.getElementsByClassName("errMsg")[0].innerHTML = "";
   document.getElementsByClassName("errMsg")[0].innerHTML = sumToNumber(n);
});


