const url = 'https://swapi.co/api/planets/';
let planets = []
let previous, next

$(() => {
    console.log('1) Table data loading')

    $('#load').on('click', () => {
        getDataWithFetch(url)
    })
    // $('#prev').on('click', () => {
    //     if(!!previous) {
    //         getData(previous)
    //     }
    // })
    // $('#next').on('click', () => {
    //     if(!!next) {
    //         getData(next)
    //     }
    // })
    
    console.log(planets)
    console.log('3) Table data loaded')
})

function getData(url) {
    $.ajax({
        url,
        type: 'GET',
        success: data => {
            planets = data.results;
            next = data.next;
            previous = data.previous
            console.log('2)', data)
            showPlanets(planets)
        },
        error: err => { console.log(`something bad happened`, err) }
    })
}

function getDataWithFetch(url) {
    $('#planetsData').append(`<td style="background: green; color: green;">|</td>`)
    fetch(url)
    .then(res => res.json())
    .then(res => {
        planets.push(...res.results)
        return res
    })
    .then(res => {
        res.next ?
        getDataWithFetch(res.next) :
        showPlanets(planets)
    })
    .catch(err => console.log(err))
}

function showPlanets(planets) {
    $('#planetsData').html('')
    for(const planet of planets) {
        $('#planetsData').append(`
        <tr>
            <td>${planet.name}</td>
            <td>${planet.diameter}</td>
            <td>${planet.climate}</td>
            <td>${planet.terrain}</td>
        </tr>
        `)
    }
}

// $.ajax({
//     url,
//     type: 'POST', //POST, DELETE, PUT, PATCH
//     success: function(data) {
//         // ourData = JSON.parse(data)
//         dsada
//         return data
//     },
//     error: function(err) {
//         console.log(`Something bad happened ${err}`)
//     },
//     data: JSON.stringify({}),
//     'Content-Type': 'application/json'
// })

// fetch(url).then(res => res.json()).then(res => console.log(res))