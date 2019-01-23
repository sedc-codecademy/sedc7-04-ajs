const url = 'https://swapi.co/api/people/';
let previous, next;
let people = [];


$(() => {
    $('#goHome').on('click', () => {
        $('#body').html('');
        $('.logo').removeClass('display-none')
        $('#table').addClass('display-none')
        $('#people').addClass('display-none')
        $('#planets').addClass('display-none')
    })
    $('#getPeople').on('click', () => {
        getCharatersData(url)
    })
})
let getCharatersData = (url) => {
    $('#body').html('');
    $('.logo').addClass('display-none')
    $('#table').removeClass('display-none')
    $('#people').removeClass('display-none')
    $('#spinner').html('<img class="text-center" src="./assets/spinner3.gif">');

    people.length ? 
    populateTable(people) :
    fetchData(url)
    
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

let populateTable = (people) => {
    $('#spinner').html('')
    $('#body').html('');
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

const formatData = people => {
}

let findCharacter = (data, keyword) => {
    
}
