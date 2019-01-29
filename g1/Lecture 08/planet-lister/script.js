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
    console.log(result);
}