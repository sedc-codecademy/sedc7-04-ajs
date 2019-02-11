function generateNames() {
    const fnames = ["John", "Steve", "Ben", "Tony"];
    const lnames = ["Burton", "Hatfield", "McCoy", "Johnson"];


    let index = 0;
    for (const fname of fnames) {
        for (const lname of lnames) {
            index += 1;
            console.log(`#${index}: ${fname} ${lname}`);
        }
    }
}

const persons = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generate").addEventListener("click", () => {
        generateNames();
    })
})