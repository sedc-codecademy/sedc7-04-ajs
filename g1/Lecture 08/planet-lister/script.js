document.addEventListener("DOMContentLoaded", () => {
    loadPlanetData();
});

const config = {
    baseUrl: "https://swapi.co/api",
    planets: "planets"
}


async function loadPlanetData() {
    const response = await fetch(`${config.baseUrl}/${config.planets}`);
    const result = await response.json();
    
    const planets = result.results.map(planet => ({
        id : getIdFromPlanetUrl(planet.url),
        name: planet.name
    }));

    console.log(planets);
}

function getIdFromPlanetUrl (planetUrl) {
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