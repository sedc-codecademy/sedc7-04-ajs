let index = "Weko";

for (let index = 1; index <= 5; index++) {
    const button = document.createElement("button");
    button.addEventListener("click", () => {
        console.log(`I'm button #${index}`);
    });
    button.textContent = `Button #${index}`;

    document.body.appendChild(button);
}

console.log(index);

