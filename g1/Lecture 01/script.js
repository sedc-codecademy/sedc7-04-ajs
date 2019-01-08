
let urlGood = "https://raw.githubusercontent.com/sedc-codecademy/sedc6-mean/master/data/quiz.json";
let urlBad = "https://raw.githubusercontent.com/sedc-codeadsadasmy/sedc6-mean/master/data/quiz.json";
let quizData;

// randomly choose one url 
let url = Math.random() > 0.5 ? urlGood : urlBad;

// using fetch and promises
// $(() => {
//     $("#load").on("click", () => {
//         console.log("quiz loading");

//         let promise = fetch(url);
//         // here we can have code
//         promise
//             .then(data => data.json())
//             .then(quizData => {
//                 fillQuestionTable(quizData);
//                 console.log("quiz loaded");
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     });
// })

// using jquery ajax
$(() => {
    $("#load").on("click", ()=>{
        $.ajax(url, {
            success: data => {
                quizData = JSON.parse(data);
                fillQuestionTable(quizData);
                console.log("quiz loaded");
            },
            error: err => {
                console.log("error occured");
                console.log(err);
            }
        });

        console.log("quiz loading");
    })
});

let fillQuestionTable = (quizData) => {
    for (const question of quizData) {
        $("#quiz").append(`
            <tr>
                <td>${question.content}</td>
                <td>${question.answers.join(", ")}</td>
            </tr>`);
    }
}

// $(() => {
//     $("#load").on("click", () => {
//         console.log("quiz loading");

//         let data = await fetch(url);
//         let quizData = await data.json();
//         fillQuestionTable(quizData);

//         console.log("quiz loaded");
//     });
// })

/*

// why we have arrow functions:

let double = function (n) {
    return n+n;
}

let double = n => n+n;
*/