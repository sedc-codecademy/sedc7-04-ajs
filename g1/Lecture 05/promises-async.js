const numbers = ["one","two", "three", "four", "five", "six", "seven"];

const delay = function (ms) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const random = Math.random() < 0.9;
            return random ? resolve() : reject("You have bad luck");
            // resolve();
        }, ms);
    });
} 


async function upToFive() {
    console.log("one");
    await delay(1000);
    console.log("two");
    await delay(1000);
    console.log("three");
    await delay(1000);
    console.log("four");
    await delay(1000);
    console.log("five");
}

// upToFive();


const upToFiveLoop = async () => {
    for (const number of numbers) {
        console.log(number);
        await delay(1000);
    }
}
// upToFiveLoop();


const getQuizData = async() => {
    const url = "https://raw.githubusercontent.com/sedc-codecademy/sedc6-mean/master/data/quiz.json";

    const response = await fetch(url);
    const quizData = await response.json();
    return quizData;
}

// getQuizData().then(console.log);
    

const getBestFruit = async () => {
    const url = "https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g1/Lecture%2005/fruits.json";
    const response = await fetch(url);
    const fruits = await response.json();
    const bestSugar = findMaxSugar(fruits);
    console.log(bestSugar.name);
}

getBestFruit();

const findMaxSugar = (fruits) => {
    let max = {
        sugars: Number.NEGATIVE_INFINITY
    };
    for (const fruit of fruits) {
        if (fruit.sugars > max.sugars) {
            max = fruit;
        }
    }
    return max;
}