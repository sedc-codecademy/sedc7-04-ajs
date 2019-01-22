// for (var index = 1; index <= 5; index++) {
//     var button = document.createElement("button");
//     button.addEventListener("click", () => {
//         console.log(`I'm button #${index}`);
//     });
//     button.textContent = `Button #${index}`;

//     document.body.appendChild(button);
// }

var index = "Weko";
var button;


for (index = 1; index <= 5; index++) {
    button = document.createElement("button");
    button.addEventListener("click", () => {
        console.log(`I'm button #${index}`);
    });
    button.textContent = `Button #${index}`;

    document.body.appendChild(button);
}

console.log(index);

// for (index = 1; index <= 5; index++) {
//     button = document.createElement("button");
//     button.addEventListener("click", ((index) => () => {
//         console.log(`I'm button #${index}`);
//     })(index));
//     button.textContent = `Button #${index}`;

//     document.body.appendChild(button);
// }

// console.log(index);