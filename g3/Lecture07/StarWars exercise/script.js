const peopleUrl = 'https://swapi.co/api/people/';
const planetsUrl = 'https://swapi.co/api/planets/';
const people = [];
const planets = [];

// here goes the logic - Happy coding ;)

function getPeopleData(url){
    fetch(url)
        .then(respons => respons.json())
        .then(respons => {
            if(respons.next){
                getPeopleData(respons.next)
            }
            console.log(respons);
        })
        .catch(e => {
            debugger;
            console.log(e);
        })
    
}
getPeopleData(peopleUrl);
