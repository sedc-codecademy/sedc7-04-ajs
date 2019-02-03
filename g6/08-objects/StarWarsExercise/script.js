const db = {
    people: {
        url: 'https://swapi.co/api/people/',
        data: (type => {
            let arr = []
            arr.type = type
            return arr
        })('people'),
    },
    planets: {
        url: 'https://swapi.co/api/planets/',
        data: (type => {
            let arr = []
            arr.type =type
            return arr
        })('planets'),
    }
}


$(() => {
    $('#goHome').on('click', showLogo)
    $('#getPeople').on('click', () => {
        showPeople()
        getData(db.people)
    })
    $('#getPlanets').on('click', () => {
        showPlanets()
        getData(db.planets)
    })
})

const getData = ({ url, data }) => {
    data.length ? 
    populateTable(data) :
    fetchData({ url, data })  
}

const fetchData = ({ url, data }) => {
    fetch(url).then(r => r.json())
    .then(r => { 
        data.push(...r.results)
        return r
    })
    .then(r => {
        console.log(r)
        r.next ? 
        fetchData({ url: r.next, data }) : 
        populateTable(data)
    }).catch(e => console.log(e))
}

const populateTable = (data) => {
    $('#spinner').html('')
    $('#body').html('');
    if(data.type === 'people') {
        populatePeople(data)
    } else if(data.type === 'planets') {
        populatePlanets(data)
    }
}

let populatePeople = (people) => {
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

// Object.keys()
// Object.values()

let populatePlanets = (planets) => {
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
    let result = data .filter(res => res.name.search(keyword) >= 0);
    populateTable(result);
}

$('#search').on('click', () => {
    let keyword = $('#inputVal').val();
    findCharacter(people,keyword);
})