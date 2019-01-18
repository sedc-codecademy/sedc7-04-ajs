$(() => {
    displayFruits(fruits);

    $(".heading th").on("click", (event) => {
        const fieldName = $(event.currentTarget).data("field");

        if (fieldName === "name") {
            fruits.sort((f, s) => f.name.localeCompare(s.name));
        } else {
            fruits.sort(makeSorter(fieldName));
        }

        $(event.currentTarget).css("color","blue");

        displayFruits(fruits);
    });
})

function makeSorter(fieldName) {
    return (f, s) => f[fieldName] - s[fieldName];
}


function displayFruits(fruits) {
    $("#fruits-container").empty();
    for (const fruit of fruits) {
        $("#fruits-container").append(`
            <tr>
                <td>${fruit.name}</td>
                <td>${fruit.calories / 1000} kcal</td>
                <td>${fruit.totalFat} g</td>
                <td>${fruit.saturatedFat} g</td>
                <td>${fruit.salt * 1000} mg</td>
                <td>${fruit.totalCarbs} g</td>
                <td>${fruit.fiber} g</td>
                <td>${fruit.sugars} g</td>
                <td>${fruit.protein} g</td>
                <td>${fruit.calcium * 1000} mg</td>
                <td>${fruit.potasium * 1000} mg</td>
            </tr>
        `);
    }
}