document.addEventListener("DOMContentLoaded", () => {
    loadPlanetData();
});

const config = {
    baseUrl: "https://swapi.co/api",
    planets: "planets"
}

// with .then syntax - only first page

// function loadPlanetData() {
//     const select = document.getElementById("planet-selector");

//     fetch(`${config.baseUrl}/${config.planets}`)
//         .then(response => response.json())
//         .then(result => {

//             const planets = result.results.map(planet => ({
//                 id: getIdFromPlanetUrl(planet.url),
//                 name: planet.name
//             }));

//             for (const planet of planets) {
//                 const option = document.createElement('option');
//                 option.value = planet.id;
//                 option.text = planet.name;
//                 select.add(option);
//             }
//         });
// }

const planets = [];

async function loadPlanetData() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    loader.style.display = "block";
    content.style.display = "none";

    let hasNext = true;
    let page = 1;

    do {
        console.log(`Loading page ${page}`);
        const url = `${config.baseUrl}/${config.planets}?page=${page}`;
        const response = await fetch(url);
        const result = await response.json();
        
        planets.push(...result.results.map(planet => ({
            id: getIdFromPlanetUrl(planet.url),
            name: planet.name
        })));

        hasNext = result.next !== null;
        page += 1;
    } while(hasNext);
    console.log("Finished loading");

    renderPlanetOptions(planets);
    loader.style.display = "none";
    content.style.display = "block";
}

function renderPlanetOptions(planets) {
    const select = document.getElementById("planet-selector");
    for (const planet of planets) {
        const option = document.createElement('option');
        option.value = planet.id;
        option.text = planet.name;
        select.add(option);
    }
}


function getIdFromPlanetUrl(planetUrl) {
    // // manipulate the string until it yields the ID
    // // remove the first 29 characters; 
    // const tail = planetUrl.substr(29);
    // // remove the last slash
    // return tail.substr(0, tail.lastIndexOf("/"));

    // using regex
    // **never write regex in code**
    // ** use https://regex101.com/ **
    const idRegex = /^.*\/(\d+)\/$/;
    const match = planetUrl.match(idRegex);
    return (match) ? match[1] : null;
}