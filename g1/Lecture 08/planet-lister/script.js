document.addEventListener("DOMContentLoaded", () => {
    loadPlanetData();

    document.getElementById("name-sort").addEventListener("click", () => {
        planets.sort((f, s) => f.name.localeCompare(s.name));
        renderPlanetOptions(planets);
    });

    document.getElementById("length-sort").addEventListener("click", () => {
        planets.sort((f, s) => f.name.length - s.name.length);
        renderPlanetOptions(planets);
    });

    document.getElementById("length-name-sort").addEventListener("click", () => {
        planets.sort((f, s) => {
            const lengthDiff = f.name.length - s.name.length;
            if (lengthDiff !== 0) {
                return lengthDiff;
            }
            return f.name.localeCompare(s.name);
        });
        renderPlanetOptions(planets);
    });

    document.getElementById("planet-selector").addEventListener("change", ({target}) => {
        const planetId = target.value;
        const planet = planets.find(planet => planet.id === planetId);
        displayPeople(planet);
    })


});

// configuration options that describe the api and its structure
const config = {
    baseUrl: "https://swapi.co/api",
    planets: "planets",
    people: "people"
}

// with .then syntax - only first page

// function loadPlanetData() {
//     const select = document.getElementById("planet-selector");

//     return fetch(`${config.baseUrl}/${config.planets}`)
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
    // display the loader and hide the content
    loader.style.display = "block";
    content.style.display = "none";

    // hasNext is true if we have a nextPage. When the next page is empty, we're done looping
    let hasNext = true;
    // initially we start at page 1
    let page = 1;

    do {
        console.log(`Loading page ${page}`);
        // get the data from the url
        const url = `${config.baseUrl}/${config.planets}?page=${page}`;
        const response = await fetch(url);
        const result = await response.json();
        
        // map the results into objects with id and name
        const pagePlanets = result.results.map(planet => ({
            id: getIdFromItemUrl(planet.url),
            name: planet.name,
            residentIds: planet.residents.map(resident => getIdFromItemUrl(resident)),
            isLoaded: false,
        }));

        // and then add them to the global planets array (using ...)
        planets.push(...pagePlanets);

        // set the looping data to point to the next page (if any)
        hasNext = result.next !== null;
        page += 1;
    } while(hasNext);
    console.log("Finished loading");

    renderPlanetOptions(planets);

    // hide the loader, and display the content
    loader.style.display = "none";
    content.style.display = "block";
}

function renderPlanetOptions(planets) {
    const select = document.getElementById("planet-selector");
    select.innerHTML = "";
    for (const planet of planets) {
        const option = document.createElement('option');
        option.value = planet.id;
        option.text = planet.name;
        select.add(option);
    }
}


function getIdFromItemUrl(itemUrl) {
    // // manipulate the string until it yields the ID
    // // remove the first 29 characters; 
    // const tail = itemUrl.substr(29);
    // // remove the last slash
    // return tail.substr(0, tail.lastIndexOf("/"));

    // using regex
    // **never write regex in code**
    // ** use https://regex101.com/ **
    const idRegex = /^.*\/(\d+)\/$/;
    const match = itemUrl.match(idRegex);
    return (match) ? match[1] : null;
}

async function displayPeople(planet) {
    const people = await loadPeople(planet);
    const peopleContainer = document.getElementById("people");
    peopleContainer.innerHTML = "";
    for (const person of people) {
        const li = document.createElement("li");
        li.textContent = person.name;
        peopleContainer.appendChild(li);
    }
}

async function loadPeople(planet) {
    // if people are already loaded, just return them - cache
    if (planet.isLoaded) {
        return planet.residents;
    }
    // if the people are not loaded
    // - load them
    // - save them
    // - return the saved values
    planet.residents = [];
    for (const id of planet.residentIds) {  
        const person = await getPerson(id);
        planet.residents.push(person);
    }
    planet.isLoaded = true;
    return planet.residents;
}

async function getPerson(personId) {
    const url = `${config.baseUrl}/${config.people}/${personId}`;

    // return fetch(url)
    //     .then(response => response.json());

    const response = await fetch(url);
    const person = await response.json();

    return person;
}