function drawChristmassTree(size) {
    drawTreeBranches(size);
    drawTreeTrunk(size);
}

function drawTreeBranches(size) {
    let stars = 1;
    let spaces = size-1;
    for (let index = 0; index < size; index++) {
        let rowString = "".padStart(spaces, " ");
        rowString += "".padStart(stars, "*");

        console.log(rowString);

        //console.log(`draw for index ${index}, stars is ${stars}`);
        stars +=2;
        spaces -=1;
    }
}

function drawTreeTrunk(size) {
    console.log("*".padStart(size, " "));
    console.log("*".padStart(size, " "));
}

drawChristmassTree(30);