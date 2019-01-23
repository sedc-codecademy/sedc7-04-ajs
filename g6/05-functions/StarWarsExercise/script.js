const peopleUrl = 'https://swapi.co/api/people/';
const planetsUrl = 'https://swapi.co/api/planets/';
const people = [];
const planets = [];

$(() => {
    $('#goHome').on('click', showLogo)
    $('#getPeople').on('click', () => {
        showPeople()
        getCharatersData(peopleUrl)
    })
    $('#getPlanets').on('click', () => {
        showPlanets()
        getPlanetsData(planetsUrl)
    })
})
let getCharatersData = (url) => {
    people.length ? 
    populateTable(people) :
    fetchData(url)    
}
const getPlanetsData = url => {
    planets.length ? 
    populatePlanetsTable(planets) :
    fetchPlanets(url)    
}

const fetchData = url => {
    fetch(url).then(r => r.json())
    .then(r => { 
        people.push(...r.results)
        return r
    })
    .then(r => {
        console.log(r)
        r.next ? 
        fetchData(r.next) : 
        populateTable(people)
    })
}
const fetchPlanets = url => {
    fetch(url).then(r => r.json())
    .then(r => { 
        planets.push(...r.results)
        return r
    })
    .then(r => {
        console.log(r)
        r.next ? 
        fetchPlanets(r.next) : 
        populatePlanetsTable(planets)
    })
}

let populateTable = (people) => {
    $('#spinner').html('')
    $('#body').html('');
    const formatedPeople = formatData(people)
    for (let person of formatedPeople) {
        $('#body').append(`
                <tr>
                <td>${person.name}</td>
                <td>${person.gender}</td>
                <td>${person.birth_year}</td>
                <td>${person.height}</td>
                <td>${person.mass}</td>
                </tr>
                `)
    }
}

let populatePlanetsTable = (planets) => {
    $('#spinner').html('')
    $('#body').html('');
    for (let planet of planets) {
        $('#body').append(`
                <tr>
                <td>${planet.name}</td>
                <td>${planet.diameter}</td>
                <td>${planet.climate}</td>
                <td>${planet.terrain}</td>
                <td>${planet.rotation_period}</td>
                <td>${planet.population}</td>
                </tr>
                `)
    }
}

const showLogo = () => {
    $('#body').html('');
    $('.logo').removeClass('display-none')
    $('#table').addClass('display-none')
    $('#people').addClass('display-none')
    $('#planets').addClass('display-none')
}
const showPeople = () => {
    $('#body').html('');
    $('.logo').addClass('display-none')
    $('#table').removeClass('display-none')
    $('#people').removeClass('display-none')
    $('#planets').addClass('display-none')
    $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');
}

const showPlanets = () => {
    $('#body').html('');
    $('.logo').addClass('display-none')
    $('#table').removeClass('display-none')
    $('#people').addClass('display-none')
    $('#planets').removeClass('display-none')
    $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');
}

const formatData = people => {
    return people.map(p => {
        // let obj = Object.assign({}, p, { height: p.height + 'cm', mass: p.mass + 'kg' })
        let obj = {
            ...p,
            height: p.height !== 'unknown' ? p.height + 'cm' : p.height,
            mass: p.mass !== 'unknown' ? p.mass + 'kg' : p.mass
        }
        // p.height += 'cm'
        // p.mass += 'kg'
        return obj
    })
}

let findCharacter = (data, keyword) => {
    
}
